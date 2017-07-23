import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Box,BoxHeader,BoxContent,Row,Col} from '../controllers/Box'
import Weather from '../controllers/Weather'
import YaoTable from '../controllers/YaoTable'
import {getTodoList} from './redux/actions/main'
import {formatTimestamp2DateInSecond,logout} from '../../static/tool'
import toastr from 'toastr'
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
    completedBtn =(value)=>{
        return <div className="i-checks">
                    <label style={value?{color:"green"}:{color:"red"}}>
                        <input type="checkbox" defaultChecked={value} /><i></i>{value?" 已完成":" 未完成"}
                    </label>
                </div> 
    }
    componentDidMount() {
        this.props.getTodoList(this.state.todoList).then(()=>{
            if(this.props.status==="SUCCESS"){
                this.setState({
                    todoTable:{
                        title:[
                            '编号',
                            '任务名称',
                            '任务发布时间',
                            '完成状态',
                            '操作'
                        ],
                        keylist:[
                            "_id",
                            "todo",
                            "adddate",
                            "completed",
                            "mAction"
                        ],
                        callback:[
                            null,
                            null,
                            (value)=>{return formatTimestamp2DateInSecond(value)},
                            this.completedBtn,
                            null
                        ],
                        data:this.props.data.data.todos,
                        custom:this.customRow
                    }
                })
            }else{
                toastr.error(this.props.data)
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
                                        {typeof this.state.todoTable.title!=="undefined"?<YaoTable option={this.state.todoTable}/>:<div>图表载入中</div>}
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