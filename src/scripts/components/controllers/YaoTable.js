import React, { Component } from 'react';

class YaoTable extends Component {
    componentDidMount() {
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
        });
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
              {/* {this.props.page.show?
                <tfoot>
                    <tr>
                        <td colSpan="5" className="footable-visible">
                        <ul className="pagination pull-right" style={{width: "100%",margin:"0"}}>
                            <li className="footable-page-arrow"><a data-page="first" id="#first" onClick={this.props.page.firstPage}>«</a></li>
                            <li className="footable-page-arrow"><a data-page="prev" id="#prev" onClick={this.props.page.prevPage}>‹</a></li>
                            {this.initRow()}
                            <li className="footable-page-arrow"><a data-page="next" id="#next" onClick={this.props.page.nextPage}>›</a></li>
                            <li className="footable-page-arrow"><a data-page="last" id="#last" onClick={this.props.page.lastPage}>»</a></li>
                        </ul>
                        </td>
                    </tr>
                </tfoot>
                :
                null
              } */}
             </table> 
        </div>
        );
    }
}

export default YaoTable;