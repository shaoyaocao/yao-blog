import React from 'react'
import slimscroll from 'jquery-slimscroll'
import {localStorageSupport,SmoothlyMenu} from 'src/scripts/lib/layout.run'

class ThemeConfig extends React.Component {
    componentDidMount(){
        // Config box
        // Enable/disable fixed top navbar
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

        // Enable/disable fixed sidebar
        $('#fixedsidebar').click(function (){
            console.log($('#fixedsidebar').is(':checked'))
            if ($('#fixedsidebar').is(':checked')){
                $("body").addClass('fixed-sidebar');
                // $('.sidebar-collapse').slimScroll({
                //     height: '100%',
                //     railOpacity: 0.9
                // });
                if (localStorageSupport){
                    localStorage.setItem("fixedsidebar",'on');
                }
            }else{
                // $('.sidebar-collapse').slimscroll({destroy: true});
                $('.sidebar-collapse').attr('style', '');
                $("body").removeClass('fixed-sidebar');
                if (localStorageSupport){
                    localStorage.setItem("fixedsidebar",'off');
                }
            }
        });

        // Enable/disable collapse menu
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

        // Enable/disable boxed layout
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
                <div className="theme-config">
                    <div className="theme-config-box">
                        <div className="spin-icon">
                            <i className="fa fa-cogs fa-spin"></i>
                        </div>
                        <div className="skin-settings">
                            <div className="title">设置框</div>
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
                            {/*<div className="setings-item">
                                    <span>
                                        底部状态栏
                                    </span>
                                <div className="switch">
                                    <div className="onoffswitch">
                                        <input type="checkbox" name="fixedfooter" className="onoffswitch-checkbox" id="fixedfooter" />
                                        <label className="onoffswitch-label" htmlFor="fixedfooter">
                                            <span className="onoffswitch-inner"></span>
                                            <span className="onoffswitch-switch"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>*/}

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
                            {/*<div className="title">皮肤</div>
                            <div className="setings-item default-skin">
                                    <span className="skin-name ">
                                        <a href="#" className="s-skin-0" onClick={this.onDefaultSkinChange.bind(this)}>
                                            默认皮肤
                                        </a>
                                    </span>
                            </div>
                            <div className="setings-item ultra-skin">
                                    <span className="skin-name ">
                                        <a href="#" className="md-skin" onClick={this.onMDSkinChange.bind(this)}>
                                            Material皮肤
                                        </a>
                                    </span>
                            </div>*/}
                        </div>
                    </div>
                </div>
            );
    }

}

export default ThemeConfig