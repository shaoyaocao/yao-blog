import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Box,BoxHeader,BoxContent,Row,Col} from '../controllers/Box'
import Weather from '../controllers/Weather'
import YaoTable from 'src/scripts/yaocomponents/yaotable'
import CheckBox from 'src/scripts/yaocomponents/yaocheckbox'
import {getTodoList,updateTodo} from './redux/actions/main'
import {formatTimestamp2DateInSecond,logout,getToken} from '../../static/tool'
import toastr from 'toastr'
import vex from 'vex-js'

const mapStateToProps = (state) => {
  return {
    data: state.get('main').get('data'),
    status: state.get('main').get('status')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoList: (option) => {
        return  dispatch(getTodoList(option))
    },
    updateTodo: (option) => {
        return  dispatch(updateTodo(option))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Main extends Component {

    state={
        todoList:{
            pageSize:4,
            pageIndex:1
        },
        todoTable:{}
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
    addTodo = () => {
        vex.dialog.open({
            message: '新增任务',
            input: [
                '<div id="vex-form"></div>',
            ].join(''),
            afterOpen:function(){

            },
            callback: function (data) {
                if (!data) {
                console.log('Cancelled')
                }
            }
        })
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
        return <input type="checkbox"/>
    }
    componentDidMount() {
        getToken()
        this.props.getTodoList(this.state.todoList).then(()=>{
            if(this.props.status==="SUCCESS"){
                this.setState({
                    todoTable:{
                        title:[
                            '#',
                            '编号',
                            '任务名称',
                            '任务发布时间',
                            '完成状态',
                            '操作'
                        ],
                        keylist:[
                            "_id",
                            "_id",
                            "todo",
                            "adddate",
                            "completed",
                            "mAction"
                        ],
                        callback:[
                            this.showCheckbox,
                            this.showId,
                            null,
                            (value)=>{return formatTimestamp2DateInSecond(value)},
                            this.completedBtn,
                            null
                        ],
                        data:this.props.data.data.todos,
                        custom:this.customRow,
                        action:this.props.getTodoList
                    }
                })
            }else{
                // toastr.error(this.props.data)
            }
        })
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
                                                    <input type="text" placeholder="请输入关键字" className="input-sm form-control"/>
                                                    <span className="input-group-btn">
                                                        <button type="button" className="btn btn-sm btn-primary">查询</button> 
                                                        <button type="button" className="btn btn-sm btn-success" onClick={this.addTodo}>新增</button> 
                                                        <button type="button" className="btn btn-sm btn-danger">删除</button> 
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
                                <Weather/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Main