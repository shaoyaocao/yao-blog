import React from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../common/store'

// parentName   父项名称
// childName    子项名称
// pageName     当前页面名称


class PageHeader extends React.Component {

    render() {
        return (
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2 className="site-header-title">{this.props.pageName}</h2>
                    <ol className="breadcrumb">
                        <li>
                            <Link to="/main">控制台</Link>
                        </li>
                        {typeof this.props.parentName !== "undefined" ?
                            <li>
                                {this.props.parentName}
                            </li>
                            : null
                        }
                        {typeof this.props.childName === "undefined" ?
                            <li className="active">
                                <strong>{this.props.pageName}</strong>
                            </li>
                            :
                            <li>
                                {this.props.pageName}
                            </li>
                        }
                        {typeof this.props.childName !== "undefined" ?
                            <li className="active">
                                <strong>{this.props.childName}</strong>
                            </li>
                            : null
                        }
                        {typeof this.props.childName !== "undefined" ?
                            <li>
                                <a onClick={() => {
                                    //回退方法
                                    history.goBack()
                                }}><i className="fa fa-reply">返回</i></a>
                            </li>
                            : null
                        }
                    </ol>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
        );
    }

}

export default PageHeader;
