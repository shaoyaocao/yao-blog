import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {Box,BoxHeader,BoxContent,Row,Col} from '../controllers/Box'
import Weather from '../controllers/Weather'
import YaoTable from 'src/scripts/yaocomponents/yaotable'
import CheckBox from 'src/scripts/yaocomponents/yaocheckbox'
import {getTodoList,updateTodo,creatTodo,deleteTodo,filterTodo,getWeather} from './redux/actions/main'
import {formatTimestamp2DateInSecond,logout,getToken} from '../../static/tool'
import toastr from 'toastr'
import vex from 'vex-js'

const mapStateToProps = (state) => {
  return {
    data: state.get('main').get('data'),
    status: state.get('main').get('status'),
    weather: state.get('main').get('weather'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoList: (option) => {
        return  dispatch(getTodoList(option))
    },
    updateTodo: (option) => {
        return  dispatch(updateTodo(option))
    },
    creatTodo: (option) => {
        return  dispatch(creatTodo(option))
    },
    deleteTodo: (option) => {
        return  dispatch(deleteTodo(option))
    },
    filterTodo: (option) => {
        return  dispatch(filterTodo(option))
    },
    getWeather: (url) => {
        return dispatch(getWeather(url))
    },
  }
}
const weatherAPI = "http://api.wunderground.com/api/34651fbe5f5c9046/forecast/lang:CN/q/zmw:00000.1.58847.json";//换成当地的日期接口

@connect(mapStateToProps, mapDispatchToProps)
class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            todoList: {
                pageSize: 4,
                pageIndex: 1
            },
            todoTable: {},
            weather:""
        }
    }

    initWeather = (url) => {
        typeof this.props.weather==="undefined"?this.props.getWeather(url):null
    }

    customRow = (item,i) =>{
        let rows = [];
        rows.push(<a href="javascript:void(0);" key={i} onClick={this.test.bind(this,item)}>详情</a>)
        return rows;
    }

    test = (item) =>{
        console.log(item)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.data!==this.props.data){
            let {todoTable,todoList} = this.state
            todoTable.data = nextProps.data.data.todos
            //记录页数
            todoList.pageIndex = nextProps.data.data.todos.index
            this.setState({todoTable,todoList})
        }
        if(nextProps.weather!==this.props.weather){
            console.log(nextProps)
            this.setState({
                weather:nextProps.weather
            })
        }
    }
    completedBtn =(value,i,data)=>{
        return  <CheckBox type="slideThree" id={data._id} checked={value} onChange={this.completedTodo.bind(this,data)}/>
    }
    showId = (value,i,item,index) => {
        return this.state.todoList.pageIndex!==1?
            <span>{index+1+(this.state.todoList.pageIndex-1)*this.state.todoList.pageSize}</span>
            :
            <span>{index+1}</span>
    }
    filterTodo = () => {
        let option = {
            filter:this.refs.filter.value,
            ...this.state.todoList
        }
        this.props.filterTodo(option)
    }
    addTodo = () => {
        let that = this
        vex.dialog.open({
            message: '新增任务',
            input: [
                '<input name="todo" type="text" placeholder="输入任务名" required />',
            ].join(''),
            callback: function (data) {
                if (data) {
                    let value = {
                        todo:data.todo,
                        uid:localStorage.getItem("id")
                    }
                    that.props.creatTodo(value).then(function(){
                        that.props.getTodoList(that.state.todoList)
                    })
                }
            }
        })
    }

    delTodo = () => {
        let ids = []
        $("input[name=todolist]:checked").each(function(){
            ids.push($(this).data("id"))
        })
        if(ids.length===0){
            vex.dialog.alert({message: '请先选择删除项'})
        }
        let del = this.del(ids)
        for (var i = 0; i < ids.length; i++) {
            del.next(i).then((info) => {
                if(info.done){
                    this.props.getTodoList(this.state.todoList)
                    this.refreshCheckbox()
                }
            }).catch((err) => {
                // this.props.getTodoList(this.state.todoList)
                console.log(err)
                toastr.error(err.del)
            })
        }
    }

    del = (ids) => {
        let that =this;
        return {
            next: function(index) {
                let option = {
                    _id:ids[index++]
                }
                return new Promise((resolve,reject) => {
                    that.props.deleteTodo(option).then(() => {
                        if(that.props.status==="SUCCESS"){
                            resolve({
                                del:"SUCCESS",
                                done:(index<ids.length)?false:true
                            })
                        }else{
                            reject({
                                del:"FAIL"
                            })
                        }
                    })
                })
            }
        };
    }

    completedTodo = (value) => {
        let option  = {
            _id:value._id,
            todo:value.todo,
            completed:!value.completed
        }
        this.props.updateTodo(option).then(() => {
            this.props.getTodoList(this.state.todoList)
        })
    }
    showCheckbox = (value) => {
        return <input name="todolist" data-id={value} type="checkbox"/>
    }
    refreshCheckbox = () => {
        $("input[name=todolist]:checked").each(function(i,v){
            $(v).prop("checked", false);
        })
    }
    componentDidMount() {
        getToken()
        this.initWeather(weatherAPI)
        if(typeof this.props.data==="undefined"){
            console.log("load data")
            this.props.getTodoList(this.state.todoList).then(() => {
                if (this.props.status === "SUCCESS") {
                    this.setState({
                        todoTable: {
                            title: [
                                '#',
                                '编号',
                                '任务名称',
                                '任务发布时间',
                                '完成状态',
                                '操作'
                            ],
                            keylist: [
                                "_id",
                                "_id",
                                "todo",
                                "adddate",
                                "completed",
                                "mAction"
                            ],
                            callback: [
                                this.showCheckbox,
                                this.showId,
                                null,
                                (value) => { return formatTimestamp2DateInSecond(value) },
                                this.completedBtn,
                                null
                            ],
                            data: this.props.data.data.todos,
                            custom: this.customRow,
                            action: this.props.getTodoList
                        }
                    })
                } else {
                    // toastr.error(this.props.data)
                }
            })
        }else{
            let { todoTable, todoList } = this.state
            todoTable.data = this.props.data.data.todos
            todoList.pageIndex = this.props.data.data.todos.index
            this.setState({
                todoTable: {
                    title: [
                        '#',
                        '编号',
                        '任务名称',
                        '任务发布时间',
                        '完成状态',
                        '操作'
                    ],
                    keylist: [
                        "_id",
                        "_id",
                        "todo",
                        "adddate",
                        "completed",
                        "mAction"
                    ],
                    callback: [
                        this.showCheckbox,
                        this.showId,
                        null,
                        (value) => { return formatTimestamp2DateInSecond(value) },
                        this.completedBtn,
                        null
                    ],
                    data: this.props.data.data.todos,
                    custom: this.customRow,
                    action: this.props.getTodoList
                },
                weather:this.props.weather
            })
        }
        
    }
    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={12}>
                                <Box>
                                    <BoxHeader title="任务列表"/>
                                    <BoxContent>
                                        <Row>
                                            <Col sm={4}>
                                                <div data-toggle="buttons" className="btn-group">
                                                    <label className="btn btn-sm btn-white">
                                                        <input type="radio" id="option1" name="options"/>已完成 
                                                    </label>
                                                    <label className="btn btn-sm btn-white active"> 
                                                        <input type="radio" id="option2" name="options"/>未完成 
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col sm={8}>
                                                <div className="input-group">
                                                    <input type="text" placeholder="请输入关键字" ref="filter" className="input-sm form-control"/>
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-sm btn-primary" onClick={this.filterTodo}>查询</button> 
                                                        <button type="button" className="btn btn-sm btn-success" onClick={this.addTodo}>新增</button> 
                                                        <button type="button" className="btn btn-sm btn-danger" onClick={this.delTodo}>删除</button> 
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                        {typeof this.state.todoTable.title!=="undefined"?<YaoTable className="yao-table" option={this.state.todoTable}/>:<div>图表载入中</div>}
                                    </BoxContent>
                                </Box>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={12}>
                                <Weather weather={this.state.weather}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Main