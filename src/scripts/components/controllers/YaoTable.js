import React, { Component } from 'react';

class YaoTable extends Component {
    componentDidMount() {
        console.log(this.props.option)
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
    }

    firstPage =() => {
        let {data,action,callback,custom,keylist,title} = this.props.option
        action({pageSize:data.size,pageIndex:1})
    }
    lastPage = () => {
        let {data,action,callback,custom,keylist,title} = this.props.option
        action({pageSize:data.size,pageIndex:data.pages})
    }
    prevPage = () => {
        let {data,action,callback,custom,keylist,title} = this.props.option
        if(data.index>1){
            action({pageSize:data.size,pageIndex:(data.index-1)})
        }
    }
    nextPage = () => {
        let {data,action,callback,custom,keylist,title} = this.props.option
        if(data.index<data.pages){
            action({pageSize:data.size,pageIndex:(data.index+1)})
        }
    }
    selectPage =(index) => {
        let {data,action,callback,custom,keylist,title} = this.props.option
        action({pageSize:data.size,pageIndex:(index+1)})
    }
    initRow = ()=>{
        let {data,action,callback,custom,keylist,title} = this.props.option
        let rows = [];
        if(data.pages<=10){
            for (let i=0; i < data.pages; i++) {
                rows.push(<li key={i} className={i=== (data.index-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
            }
        }else if(data.pages>10&&data.index<6){
            let allpage = parseInt(data.pages);
            let currentpage = parseInt(data.index)
            for (let i=0; i < 10; i++) {
                rows.push(<li key={i} className={i=== (parseInt(currentpage)-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
            }
            rows.push(<li key={allpage} className="footable-page"><a href="javascript:void(0)">...</a></li>);
        }else if(data.pages>10&&data.index>5&&data.index<parseInt(page.pages)-10){
            let currentpage = parseInt(data.index)
            rows.push(<li key={currentpage-6} className="footable-page"><a href="javascript:void(0)">...</a></li>);
            for (let i=currentpage-5; i < currentpage; i++) {
                rows.push(<li key={i} className={i=== (currentpage-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
            }
            for (let i=currentpage; i < currentpage+5; i++) {
                rows.push(<li key={i} className={i=== (currentpage-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
            }
            rows.push(<li key={currentpage+5} className="footable-page"><a href="javascript:void(0)">...</a></li>);
        }else if(data.pages>10&&data.index>parseInt(data.pages)-10){
            let allpage = parseInt(data.pages)
            let currentpage = parseInt(data.index)
            rows.push(<li key={currentpage-12} className="footable-page"><a href="javascript:void(0)">...</a></li>);
            for (let i=allpage-11; i < allpage; i++) {
                rows.push(<li key={i} className={i=== (currentpage-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
            }
        }
        return rows;
    }

    render() {
        return (
            <div className="table-responsive" style={this.props.style}>
                 <table className="table table-striped">
                    <thead>
                        <tr>
                            {this.props.option.title.map((item,index) => {
                                return <th key={index}>{item}</th>
                            })}
                        </tr>
                    </thead>
                     <tbody>
                        { this.props.option.data.list.length>0?this.props.option.data.list.map((item,index) => {
                            return <tr key={index}>
                                {this.props.option.keylist.map((keyname,i) => {
                                    if(keyname==="mAction"){
                                        return <td key={i}>{typeof this.props.option.custom !=="undefined"?this.props.option.custom(item,i):null}</td>
                                    }else{
                                        if(typeof keyname.format!=="undefined"){
                                            return <td key={i}>{keyname.format(item[keyname])}</td>
                                        }else{
                                            if(this.props.option.callback[i]===null){
                                                return <td key={i}>{item[keyname]}</td>
                                            }else{
                                                return <td key={i}>{this.props.option.callback[i](item[keyname],i)}</td>
                                            }
                                        }
                                    }
                                })}
                            </tr>
                        })
                        :
                        <tr><td rowSpan={this.props.titlelist.length}>无对应数据</td></tr>
                    }
                    </tbody>  
                     <tfoot>
                        <tr>
                            <td colSpan="5" className="footable-visible">
                            <ul className="pagination pull-right" style={{width: "100%",margin:"0"}}>
                                <li className="footable-page-arrow"><a data-page="first" id="#first" onClick={this.firstPage}>«</a></li>
                                <li className="footable-page-arrow"><a data-page="prev" id="#prev" onClick={this.prevPage}>‹</a></li>
                                 {this.initRow()} 
                                <li className="footable-page-arrow"><a data-page="next" id="#next" onClick={this.nextPage}>›</a></li>
                                <li className="footable-page-arrow"><a data-page="last" id="#last" onClick={this.lastPage}>»</a></li>
                            </ul>
                            </td>
                        </tr>
                    </tfoot> 
             </table> 
        </div>
        );
    }
}

export default YaoTable;