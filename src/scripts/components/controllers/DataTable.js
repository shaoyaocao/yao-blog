import React from 'react';

class DataTable extends React.Component {
  // tableId
  // titlelist
  // paramlist
  // dataurl
  // filter
  constructor(props){
    super(props);
    this.state={
      rows:[]
    }
  }

  selectPage =(i) => {
    this.props.page.switchPage(i+1);
  }

  initRow = ()=>{
    let rows = [];
    // for (let i=0; i < this.props.page.pages; i++) {
    //     rows.push(<li key={i} className={i=== (this.props.page.page-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
    // }
    if(this.props.page.pages<=10){
      for (let i=0; i < this.props.page.pages; i++) {
          rows.push(<li key={i} className={i=== (this.props.page.page-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
      }
    }else if(this.props.page.pages>10&&this.props.page.page<6){
      let allpage = parseInt(this.props.page.pages);
      let currentpage = parseInt(this.props.page.page)
      for (let i=0; i < 10; i++) {
          rows.push(<li key={i} className={i=== (parseInt(currentpage)-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
      }
      rows.push(<li key={allpage} className="footable-page"><a href="javascript:void(0)">...</a></li>);
    }else if(this.props.page.pages>10&&this.props.page.page>5&&this.props.page.page<parseInt(this.props.page.pages)-10){
      let currentpage = parseInt(this.props.page.page)
      rows.push(<li key={currentpage-6} className="footable-page"><a href="javascript:void(0)">...</a></li>);
      for (let i=currentpage-5; i < currentpage; i++) {
          rows.push(<li key={i} className={i=== (currentpage-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
      }
      for (let i=currentpage; i < currentpage+5; i++) {
          rows.push(<li key={i} className={i=== (currentpage-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
      }
      rows.push(<li key={currentpage+5} className="footable-page"><a href="javascript:void(0)">...</a></li>);
    }else if(this.props.page.pages>10&&this.props.page.page>parseInt(this.props.page.pages)-10){
      let allpage = parseInt(this.props.page.pages)
      let currentpage = parseInt(this.props.page.page)
      rows.push(<li key={currentpage-12} className="footable-page"><a href="javascript:void(0)">...</a></li>);
      for (let i=allpage-11; i < allpage; i++) {
          rows.push(<li key={i} className={i=== (currentpage-1)?"footable-page active":"footable-page"}><a data-page={i} href="javascript:void(0)" onClick={this.selectPage.bind(this, i)}>{i+1}</a></li>);
      }
    }
    return rows;
  }

  render() {
    if(typeof this.props.titlelist==="undefined"){
      return (
        <div>列表头部清单配置错误</div>
      )
    }else if(typeof this.props.data==="undefined"){
      return (
        <div>无数据源</div>
      )
    }else if(typeof this.props.keylist==="undefined"){
      return (
        <div>无键值</div>
      )
    }else{
      return (
        <div className="table-responsive" style={this.props.style}>
          <table className="table table-striped">
              <thead>
              <tr>
                {this.props.titlelist.map((item,index) => {
                  return <th key={index}>{item}</th>
                })}
              </tr>
              </thead>
              <tbody>
                { this.props.data.length>0?this.props.data.map((item,index) => {
                   return <tr key={index}>
                            {this.props.keylist.map((key,i) => {
                              if(key.name==="mAction"){
                                return <td key={i}>{typeof this.props.page.custom !=="undefined"?this.props.page.custom(item['id']):null}</td>
                              }else{
                                if(typeof key.format!=="undefined"){
                                  return <td key={i}>{key.format(item[key.name])}</td>
                                }else{
                                  return <td key={i}>{item[key.name]}</td>
                                }
                              }
                            })}
                        </tr>
                })
                :
                <tr><td rowSpan={this.props.titlelist.length}>无对应数据</td></tr>
              }
              </tbody>
              {this.props.page.show?
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
              }
            </table>
        </div>
      );
    }
  }

}

export default DataTable;
