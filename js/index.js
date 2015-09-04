/*
*   创建于 20150904 23:10
*
* */

$(function(){
    $('.tobox').draggable({
        revert : true,
        cursor : 'text'
     });
    /*拖动组件，独立组件*/

    $('.box').droppable({
        accept : '.tobox',
        onDragEnter : function(e,source){
           }, //元素到该区域时触发，只会进入时触发一次
        onDragOver : function(e,source){
         },  //元素经过该区域时触发，在元素运动时将不断触发
        onDragLeave : function(e,source){
        },  //元素离开该区域时触发，在元素离开时将触发一次
        onDrop : function(e,source){
        } //元素放入到该区域时触发，即松开鼠标
    });
    /*$('.box').droppable('disable|enable');*/
    //放置组件，独立组件

    $('.dx').resizable({
        disable : false, //true为静止调整
        handles : 'all',//声明可以调整的位置 n北，e东，s南，w西，ne,se,sw,nw,all
        minWidth : 10, //调整时的最小宽度
        minHeight : 10, //调整的最小高度
        maxWidth : 10000,
        maxHeight : 10000,
        edge : 5, //触发范围，离边框的距离 px
        onStartResize : function(e){}, //开始调整时触发
        onResize : function(e){}, //调整时触发，在调整时将不断触发，当返回false时元素不会变化
        onStopResize : function (e) {} //停止调整时触发
    });

    /* $('.box').droppable('options') //返回包含所用配置的对象*/
    //拖动组件，独立组件

        $('.nrts').tooltip({
     //  content : "", //提示内容，可以包含html标签
     //  position :
       trackMouse : true, //内容提示框鼠标更随
       deltaX : 0, //水平方向，提示框的位置
       deltaY : 0, //垂直方向，提示框的位置
       showEvent : 'mouseenter', //显示提示框事件类型
       hideEvent : 'mouseleave',//隐藏提示框事件类型
       showDelay : 200, //显示延迟时间\ms
       hideDelay : 200,//隐藏延迟时间\ms

       onShow : function (e) {}, // 显示时触发
       onHide : function (e){},//隐藏时触发
       onUpdate : function (content) {}, //在提示框内容更新时触发，与update方法结合使用
       //首次显示提示框时会触动一次
       onPosition : function (left,top) {},//在提示框位置改变时触发，
       onDestroy : function () {}//在提示框被销毁时触发，与方法destroy结合使用
});
     /*
    * 方法 options 返回属性对象 show隐藏  hide显示 tip返回tip元素对象，show之后执行； arrow返回箭头元素对象
    * update更新提示框内容   reposition重置提示框位置 destroy销毁提示框
    * */
    //提示框组件
    $('.nrts2').linkbutton({
       // id : ''
        disable : false,
        toggle : true,     //是否允许切换效果为 是否选择 的效果，实现checkbox效果
        selected : true,   //定义按钮的初始选择状态
       // group : "sex" ,   //指定相同组名的按钮为同一组，同一组按钮同时只能选择一个，实现radio
        plain : false,    //是否显示简洁效果，没有按钮浮雕等
       // text : '',       //按钮文本
        iconCls : null,  //设置按钮图标的css类ID(16x16),在css中通过background定义
        iconAlign : 'left' // 按钮图标位置 left|right
 });
    /*
    * 方法 options disable enable select选择状态 unselect取消选择状态
    * */
    //按钮组件，独立组件

    $('.jdt').progressbar({
        width : 400,
        height : 20,
        value : 60,
        text : '{value}%',
        onChange : function (newValue,oldValue) {}
    });
    /*
    * 方法 options resize 设置进度条长度 setValue getValue
    * */
    //进度条，独立组件
}); //js end