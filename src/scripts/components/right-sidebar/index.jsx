import React from 'react'
import {localStorageSupport,SmoothlyMenu} from 'src/scripts/lib/layout.run'
class RightSidebar extends React.Component {
    componentDidMount(){
        $('#fixednavbar').click(function (){
            if ($('#fixednavbar').is(':checked')){
                $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
                $("body").removeClass('boxed-layout');
                $("body").addClass('fixed-nav');
                $('#boxedlayout').prop('checked', false);
                if (localStorageSupport){
                    localStorage.setItem("boxedlayout",'off');
                }
                if (localStorageSupport){
                    localStorage.setItem("fixednavbar",'on');
                }
            } else{
                $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
                $("body").removeClass('fixed-nav');
                $("body").removeClass('fixed-nav-basic');
                if (localStorageSupport){
                    localStorage.setItem("fixednavbar",'off');
                }
            }
        });

        $('#fixedsidebar').click(function (){
            console.log($('#fixedsidebar').is(':checked'))
            if ($('#fixedsidebar').is(':checked')){
                $("body").addClass('fixed-sidebar');
                if (localStorageSupport){
                    localStorage.setItem("fixedsidebar",'on');
                }
            }else{
                $('.sidebar-collapse').attr('style', '');
                $("body").removeClass('fixed-sidebar');
                if (localStorageSupport){
                    localStorage.setItem("fixedsidebar",'off');
                }
            }
        });

        $('#collapsemenu').click(function (){
            if ($('#collapsemenu').is(':checked')){
                $("body").addClass('mini-navbar');
                SmoothlyMenu();

                if (localStorageSupport){
                    localStorage.setItem("collapse_menu",'on');
                }
            } else{
                $("body").removeClass('mini-navbar');
                SmoothlyMenu();

                if (localStorageSupport){
                    localStorage.setItem("collapse_menu",'off');
                }
            }
        });

        $('#boxedlayout').click(function (){
            if ($('#boxedlayout').is(':checked')){
                $("body").addClass('boxed-layout');
                $('#fixednavbar').prop('checked', false);
                $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
                $("body").removeClass('fixed-nav');
                $("body").removeClass('fixed-nav-basic');
                $(".footer").removeClass('fixed');
                $('#fixedfooter').prop('checked', false);
                if (localStorageSupport){
                    localStorage.setItem("fixednavbar",'off');
                }
                if (localStorageSupport){
                    localStorage.setItem("fixedfooter",'off');
                }
                if (localStorageSupport){
                    localStorage.setItem("boxedlayout",'on');
                }
            } else{
                $("body").removeClass('boxed-layout');
                if (localStorageSupport){
                    localStorage.setItem("boxedlayout",'off');
                }
            }
        });

        // Enable/disable fixed footer
        $('#fixedfooter').click(function (){
            if ($('#fixedfooter').is(':checked')){
                $('#boxedlayout').prop('checked', false);
                $("body").removeClass('boxed-layout');
                $(".footer").addClass('fixed');
                if (localStorageSupport){
                    localStorage.setItem("boxedlayout",'off');
                }
                if (localStorageSupport){
                    localStorage.setItem("fixedfooter",'on');
                }
            } else{
                $(".footer").removeClass('fixed');
                if (localStorageSupport){
                    localStorage.setItem("fixedfooter",'off');
                }
            }
        });

        // SKIN Select
        $('.spin-icon').click(function (){
            $(".theme-config-box").toggleClass("show");
        });

        // Default skin
        $('.s-skin-0').click(function (){
            $("body").removeClass("skin-1");
            $("body").removeClass("skin-2");
            $("body").removeClass("skin-3");
            localStorage.setItem("bodyskin",'skin-0');
        });

        // Blue skin
        $('.s-skin-1').click(function (){
            $("body").removeClass("skin-2");
            $("body").removeClass("skin-3");
            $("body").addClass("skin-1");
            localStorage.setItem("bodyskin",'skin-1');
        });

        // Inspinia ultra skin
        $('.s-skin-2').click(function (){
            $("body").removeClass("skin-1");
            $("body").removeClass("skin-3");
            $("body").addClass("skin-2");
            localStorage.setItem("bodyskin",'skin-2');
        });

        // Yellow skin
        $('.s-skin-3').click(function (){
            $("body").removeClass("skin-1");
            $("body").removeClass("skin-2");
            $("body").addClass("skin-3");
            localStorage.setItem("bodyskin",'skin-3');
        });

        if (localStorageSupport){
            var collapse = localStorage.getItem("collapse_menu");
            var fixedsidebar = localStorage.getItem("fixedsidebar");
            var fixednavbar = localStorage.getItem("fixednavbar");
            var boxedlayout = localStorage.getItem("boxedlayout");
            var fixedfooter = localStorage.getItem("fixedfooter");

            if (collapse == 'on'){
                $('#collapsemenu').prop('checked','checked')
            }
            if (fixedsidebar == 'on'){
                $('#fixedsidebar').prop('checked','checked')
            }
            if (fixednavbar == 'on'){
                $('#fixednavbar').prop('checked','checked')
            }
            if (boxedlayout == 'on'){
                $('#boxedlayout').prop('checked','checked')
            }
            if (fixedfooter == 'on') {
                $('#fixedfooter').prop('checked','checked')
            }
        }
    }
    onMDSkinChange(){
        $("body").addClass("md-skin")
    }
    onDefaultSkinChange(){
        let length=$("body")[0].classList.length
        for(var i=0;i<length;i++)
        {
            $("body")[0].classList[i].search(/^[^\s]*-skin$/i)!=-1?$("body").removeClass($("body")[0].classList[i]):null
        }
    }
    render() {
        return (
            <div id="right-sidebar" className="animated">
                <div className="sidebar-container">
                    <ul className="nav nav-tabs navs-3">
                        <li className="active"><a data-toggle="tab" href="#tab-1">
                            Notes
                        </a></li>
                        <li><a data-toggle="tab" href="#tab-2">
                            Projects
                        </a></li>
                        <li className=""><a data-toggle="tab" href="#tab-3">
                            <i className="fa fa-gear"></i>
                        </a></li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane active">
                            <div className="sidebar-title">
                                <h3> <i className="fa fa-comments-o"></i> Latest Notes</h3>
                                <small><i className="fa fa-tim"></i> You have 10 new message.</small>
                            </div>
                            <div>
                                <div className="sidebar-message">
                                    <a href="#">
                                        <div className="pull-left text-center">
                                            <img alt="image" className="img-circle message-avatar" src="assets/img/face/a1.jpg" />

                                            <div className="m-t-xs">
                                                <i className="fa fa-star text-warning"></i>
                                                <i className="fa fa-star text-warning"></i>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            There are many variations of passages of Lorem Ipsum available.<br />
                                            <small className="text-muted">Today 4:21 pm</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="sidebar-message">
                                    <a href="#">
                                        <div className="pull-left text-center">
                                            <img alt="image" className="img-circle message-avatar" src="assets/img/face/a2.jpg" />
                                        </div>
                                        <div className="media-body">
                                            The point of using Lorem Ipsum is that it has a more-or-less normal.
                                            <br />
                                            <small className="text-muted">Yesterday 2:45 pm</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="sidebar-message">
                                    <a href="#">
                                        <div className="pull-left text-center">
                                            <img alt="image" className="img-circle message-avatar" src="assets/img/face/a3.jpg" />

                                            <div className="m-t-xs">
                                                <i className="fa fa-star text-warning"></i>
                                                <i className="fa fa-star text-warning"></i>
                                                <i className="fa fa-star text-warning"></i>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            Mevolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                            <br />
                                            <small className="text-muted">Yesterday 1:10 pm</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="sidebar-message">
                                    <a href="#">
                                        <div className="pull-left text-center">
                                            <img alt="image" className="img-circle message-avatar" src="assets/img/face/a4.jpg" />
                                        </div>

                                        <div className="media-body">
                                            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                                            <br />
                                            <small className="text-muted">Monday 8:37 pm</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="sidebar-message">
                                    <a href="#">
                                        <div className="pull-left text-center">
                                            <img alt="image" className="img-circle message-avatar" src="assets/img/face/a8.jpg" />
                                        </div>
                                        <div className="media-body">

                                            All the Lorem Ipsum generators on the Internet tend to repeat.
                                            <br />
                                            <small className="text-muted">Today 4:21 pm</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="sidebar-message">
                                    <a href="#">
                                        <div className="pull-left text-center">
                                            <img alt="image" className="img-circle message-avatar" src="assets/img/face/a7.jpg" />
                                        </div>
                                        <div className="media-body">
                                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                            <br />
                                            <small className="text-muted">Yesterday 2:45 pm</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="sidebar-message">
                                    <a href="#">
                                        <div className="pull-left text-center">
                                            <img alt="image" className="img-circle message-avatar" src="assets/img/face/a3.jpg" />

                                            <div className="m-t-xs">
                                                <i className="fa fa-star text-warning"></i>
                                                <i className="fa fa-star text-warning"></i>
                                                <i className="fa fa-star text-warning"></i>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.
                                            <br />
                                            <small className="text-muted">Yesterday 1:10 pm</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="sidebar-message">
                                    <a href="#">
                                        <div className="pull-left text-center">
                                            <img alt="image" className="img-circle message-avatar" src="assets/img/face/a4.jpg" />
                                        </div>
                                        <div className="media-body">
                                            Uncover many web sites still in their infancy. Various versions have.
                                            <br />
                                            <small className="text-muted">Monday 8:37 pm</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane">
                            <div className="sidebar-title">
                                <h3> <i className="fa fa-cube"></i> Latest projects</h3>
                                <small><i className="fa fa-tim"></i> You have 14 projects. 10 not completed.</small>
                            </div>
                            <ul className="sidebar-list">
                                <li>
                                    <a href="#">
                                        <div className="small pull-right m-t-xs">9 hours ago</div>
                                        <h4>Business valuation</h4>
                                        It is a long established fact that a reader will be distracted.

                                        <div className="small">Completion with: 22%</div>
                                        <div className="progress progress-mini">
                                            <div style={{width: '22%'}} className="progress-bar progress-bar-warning"></div>
                                        </div>
                                        <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="small pull-right m-t-xs">9 hours ago</div>
                                        <h4>Contract with Company </h4>
                                        Many desktop publishing packages and web page editors.

                                        <div className="small">Completion with: 48%</div>
                                        <div className="progress progress-mini">
                                            <div style={{width: '48%'}} className="progress-bar"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="small pull-right m-t-xs">9 hours ago</div>
                                        <h4>Meeting</h4>
                                        By the readable content of a page when looking at its layout.

                                        <div className="small">Completion with: 14%</div>
                                        <div className="progress progress-mini">
                                            <div style={{width: '14%'}} className="progress-bar progress-bar-info"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="label label-primary pull-right">NEW</span>
                                        <h4>The generated</h4>
                                        There are many variations of passages of Lorem Ipsum available.
                                        <div className="small">Completion with: 22%</div>
                                        <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="small pull-right m-t-xs">9 hours ago</div>
                                        <h4>Business valuation</h4>
                                        It is a long established fact that a reader will be distracted.

                                        <div className="small">Completion with: 22%</div>
                                        <div className="progress progress-mini">
                                            <div style={{width: '22%'}} className="progress-bar progress-bar-warning"></div>
                                        </div>
                                        <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="small pull-right m-t-xs">9 hours ago</div>
                                        <h4>Contract with Company </h4>
                                        Many desktop publishing packages and web page editors.

                                        <div className="small">Completion with: 48%</div>
                                        <div className="progress progress-mini">
                                            <div style={{width: '48%'}} className="progress-bar"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="small pull-right m-t-xs">9 hours ago</div>
                                        <h4>Meeting</h4>
                                        By the readable content of a page when looking at its layout.

                                        <div className="small">Completion with: 14%</div>
                                        <div className="progress progress-mini">
                                            <div style={{width: '14%'}} className="progress-bar progress-bar-info"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="label label-primary pull-right">NEW</span>
                                        <h4>The generated</h4>
                                        <div className="small pull-right m-t-xs">9 hours ago</div>
                                        There are many variations of passages of Lorem Ipsum available.
                                        <div className="small">Completion with: 22%</div>
                                        <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="tab-3" className="tab-pane">
                            <div className="sidebar-title">
                                <h3><i className="fa fa-gears"></i>设置框</h3>
                                <small><i className="fa fa-tim"></i>您可以在这里设置页面风格</small>
                            </div>
                            <div className="skin-settings" style={{width:"100%",margin:"0"}}>
                                <div className="setings-item">
                                        <span>
                                            收起菜单
                                        </span>

                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="collapsemenu" />
                                            <label className="onoffswitch-label" htmlFor="collapsemenu">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="setings-item">
                                        <span>
                                            隐藏侧栏
                                        </span>
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="fixedsidebar" className="onoffswitch-checkbox" id="fixedsidebar" />
                                            <label className="onoffswitch-label" htmlFor="fixedsidebar">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="setings-item">
                                        <span>
                                            顶部导航
                                        </span>

                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="fixednavbar" className="onoffswitch-checkbox" id="fixednavbar" />
                                            <label className="onoffswitch-label" htmlFor="fixednavbar">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="setings-item">
                                        <span>
                                            居中模式
                                        </span>

                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" name="boxedlayout" className="onoffswitch-checkbox" id="boxedlayout" />
                                            <label className="onoffswitch-label" htmlFor="boxedlayout">
                                                <span className="onoffswitch-inner"></span>
                                                <span className="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">主题</div>
                                <div className="setings-item default-skin s-skin-0">
                                        <span className="skin-name ">
                                            <a href="#" className="">
                                                默认主题
                                            </a>
                                        </span>
                                </div>
                                <div className="setings-item blue-skin s-skin-1">
                                        <span className="skin-name ">
                                            <a href="#" className="">
                                                淡蓝色主题
                                            </a>
                                        </span>
                                </div>
                                <div className="setings-item yellow-skin s-skin-3">
                                        <span className="skin-name ">
                                            <a href="#" className="">
                                                黄色主题
                                            </a>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default RightSidebar