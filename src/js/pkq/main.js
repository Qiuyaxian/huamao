(function(win,id,factory){
    "use strict"; //使用严格模式
    //进行模块化打发，封装模块
    if (typeof (module) !== 'undefined' && module.exports) {        // CommonJS
        module.exports = factory(id, win);
    } else if (typeof (define) === 'function' && define.amd ) {     // AMD
        define(function () {
            return factory(id, win);
        });
    } else {                                                        // <script>
        win[id] = factory(id, win);
    }

})(window,'app',function(id, window){
    "use strict";
     
    function appFn(){
        var that = this;
        that.data = [
               {
                   "flight":'HU',
                   "cargoType":'普货',
                   'route':'CAN-CKG-ABJ',
                   "priceValidity":'2017/6/2 0:00:00 - 当前有效',
                   "price":'34.50',
                   "model":'客机',
                   "detail":{
                      "currencyType":'CNY',
                      "security":'0',
                      "ground":'0',
                      "remarks":'无',
                      "intermodal":'1',

                      "fuel":'0',
                      "area":'中国',
                      "product":'未知',
                   },
                   "info":{
                      "title":'一程航班：CAN-CKG',
                      "table":[
                         {
                           "flight":'HU7655',
                           "etd":'09:25:00',
                           "eta":'12:00:00 ',
                           "schedule":'1,3,5,7',
                           "type":'客机',
                           "modelType":'大'
                         }
                      ]
                   }
               },{
                   "flight":'HU',
                   "cargoType":'普货',
                   'route':'CAN-CKG-ABJ',
                   "priceValidity":'2017/6/2 0:00:00 - 当前有效',
                   "price":'34.50',
                   "model":'客机',
                   "detail":{
                      "currencyType":'CNY',
                      "security":'0',
                      "ground":'0',
                      "remarks":'无',
                      "intermodal":'1',

                      "fuel":'0',
                      "area":'中国',
                      "product":'未知',
                   },
                   "info":{
                      "title":'一程航班：CAN-CKG',
                      "table":[
                         {
                           "flight":'HU7655',
                           "etd":'09:25:00',
                           "eta":'12:00:00 ',
                           "schedule":'1,3,5,7',
                           "type":'客机',
                           "modelType":'大'
                         }
                      ]
                   }
               },{
                   "flight":'HU',
                   "cargoType":'普货',
                   'route':'CAN-CKG-ABJ',
                   "priceValidity":'2017/6/2 0:00:00 - 当前有效',
                   "price":'34.50',
                   "model":'客机',
                   "detail":{
                      "currencyType":'CNY',
                      "security":'0',
                      "ground":'0',
                      "remarks":'无',
                      "intermodal":'1',

                      "fuel":'0',
                      "area":'中国',
                      "product":'未知',
                   },
                   "info":{
                      "title":'一程航班：CAN-CKG',
                      "table":[
                         {
                           "flight":'HU7655',
                           "etd":'09:25:00',
                           "eta":'12:00:00 ',
                           "schedule":'1,3,5,7',
                           "type":'客机',
                           "modelType":'大'
                         }
                      ]
                   }
               },{
                   "flight":'HU',
                   "cargoType":'普货',
                   'route':'CAN-CKG-ABJ',
                   "priceValidity":'2017/6/2 0:00:00 - 当前有效',
                   "price":'34.50',
                   "model":'客机',
                   "detail":{
                      "currencyType":'CNY',
                      "security":'0',
                      "ground":'0',
                      "remarks":'无',
                      "intermodal":'1',

                      "fuel":'0',
                      "area":'中国',
                      "product":'未知',
                   },
                   "info":{
                      "title":'一程航班：CAN-CKG',
                      "table":[
                         {
                           "flight":'HU7655',
                           "etd":'09:25:00',
                           "eta":'12:00:00 ',
                           "schedule":'1,3,5,7',
                           "type":'客机',
                           "modelType":'大'
                         }
                      ]
                   }
               },{
                   "flight":'HU',
                   "cargoType":'普货',
                   'route':'CAN-CKG-ABJ',
                   "priceValidity":'2017/6/2 0:00:00 - 当前有效',
                   "price":'34.50',
                   "model":'客机',
                   "detail":{
                      "currencyType":'CNY',
                      "security":'0',
                      "ground":'0',
                      "remarks":'无',
                      "intermodal":'1',

                      "fuel":'0',
                      "area":'中国',
                      "product":'未知',
                   },
                   "info":{
                      "title":'一程航班：CAN-CKG',
                      "table":[
                         {
                           "flight":'HU7655',
                           "etd":'09:25:00',
                           "eta":'12:00:00 ',
                           "schedule":'1,3,5,7',
                           "type":'客机',
                           "modelType":'大'
                         }
                      ]
                   }
               },{
                   "flight":'HU',
                   "cargoType":'普货',
                   'route':'CAN-CKG-ABJ',
                   "priceValidity":'2017/6/2 0:00:00 - 当前有效',
                   "price":'34.50',
                   "model":'客机',
                   "detail":{
                      "currencyType":'CNY',
                      "security":'0',
                      "ground":'0',
                      "remarks":'无',
                      "intermodal":'1',

                      "fuel":'0',
                      "area":'中国',
                      "product":'未知',
                   },
                   "info":{
                      "title":'一程航班：CAN-CKG',
                      "table":[
                         {
                           "flight":'HU7655',
                           "etd":'09:25:00',
                           "eta":'12:00:00 ',
                           "schedule":'1,3,5,7',
                           "type":'客机',
                           "modelType":'大'
                         }
                      ]
                   }
               }
        ];
        that.loading = false;        //滚动加载控制器
        that.scrollTimer = null;     //滚动加载时间控制器
        that.listDetail = false;     //查看详情操作
        that.templateId = null;      //模板
        that.container = null;       //存放数据的容器
        that.type = null;            //用于ajax提交数据
        that.pageNumber = 0;         //用于加载数据
        that.pageSize = 5;           //用加载条数
        that.scrollContainer = null; //滚动容器
        that.trigger = null;         //获取各种属性的样式属性
        //异步请求的url地址
        that.ajaxUrl = 'http://192.168.100.111:8088/data.json'; 
        that.id = 0;        
    };

    appFn.prototype = {
       constructor:'appFn',
       init:function(options){  //页面初始化
            var that = this,
                html = document.documentElement;
                html.style.fontSize = html.getBoundingClientRect().width / 16 + 'px';
     
            if(FastClick){
                FastClick.attach(document.body);
            };

            //默认基础配置
            var opt = $.extend({
               'trigger':'',                      //触发对象
               'callback':function(){             //回调函数
                                     
               }
            },options);
            //1.进入页面发送ajax请求数据
            that.getData({
               'trigger':opt.trigger,             //触发对象
               'callback':function(){            
                   that.scroll();                 //绑定事件
               }
            });

            //2.点击切换
            
                that.tab({
                    'tabLink':'tab-link',             //点击触发事件样式
                    'toggle':'data-toggle',           //切换关联点
                    'tabSwitch':'tab-item',           //切换tabcontent样式
                    'activeClass':'b-active',
                    'callback':function(tabLink,tabSwitch){
                        /*
                           tabLink    
                           tabSwitch
                         */
                        that.getData({
                           'trigger':tabLink,         //触发对象
                           'callback':function(){
                              that.scroll();          //滚动事件绑定
                           }
                        });
                    }
                });  
           
            return that;        // 以便进行链式操作                
       },  
       tab:function(options){   //tab切换
           //回调一个getData方法  
           //要求：需要兼容没有ajax请求的切换与有ajax请求的切换
           var opt = $.extend({
                  'tabLink':'tab-link',   //点击触发事件样式
                  'toggle':'data-toggle',    //切换关联点
                  'tabSwitch':'tab-item',  //切换tabcontent样式
                  'activeClass':'b-active',
                  'callback':function(tabLink,tabSwitch){
                      
                  } 
               },options);

           if($('#airTab') && $('#airTab').length > 0){

               $('.tab-head').tab({
                    'tabLink' : opt.tabLink,   //点击触发事件样式
                    'toggle' : opt.toggle,    //切换关联点
                    'tabSwitch' : opt.tabSwitch,  //切换tabcontent样式
                    'activeClass' : opt.activeClass,
                    'callback' : opt.callback
               });
           }
           
       },
       scroll:function(options){       //滚动加载  在数据请求成功作为回调函数
            var that = this;
            that.scrollContainer.infinite().on("infinite", function() {
                  var $this = $(this);
                  //滚动加载数据
                  console.log(that.scrollContainer)
                  if(that.loading) return;
                  that.loading = true;
                  //$.showLoading();
                  if(that.scrollTimer != null){
                       clearTimeout(that.scrollTimer);
                  }
                  that.scrollTimer = setTimeout(function() {
                        that.getData({
                            'trigger':that.trigger,
                            'callback':function(){
                                that.scroll();
                            }
                        });
                        that.loading = false;
                  }, 500);

            });
            return that;
       },
       detail:function(options){      //显示详细信息  在数据请求成功作为回调函数
            var that = this;
            if(that.container != null || that.container != ''){
                //列表点击操作
                var $container = $('#'+that.container); 
                $container.on('click','.list-item',function(){
                      var $this = $(this),
                          $listItem = $('.list-item',$container);
                      $this.index = $this.index();

                      if($listItem.length > 0){
                          //判断当前是否有none
                          $listItem.each(function(index,elem){
                               if(index == $this.index){
                                  if($('.detail',$(elem)).hasClass('none')){
                                      $('.detail',$(elem)).removeClass('none');
                                  }else{
                                      $('.detail',$(elem)).addClass('none');
                                  };
                               }else{
                                  $('.detail',$(elem)).addClass('none');
                               };
                          });  
                      }
                });
            };  
            return that;  
       },
       getData:function(options){
           
           var that = this;
           
           var opt = $.extend({
              'trigger':'',             //触发对象
              'callback':function(){    //回调函数

              }
           },options);  

           //以下数据均是从html节点中获取
           if(opt.trigger == '' || opt.trigger == null) return;
           if(typeof opt.trigger == 'string'){

               that.trigger = $('#'+opt.trigger);
               //需要获取模板id  string demo #demo
               that.template = that.trigger.attr('data-template')?that.trigger.attr('data-template'):null;  
               //需要插入的数据模板容器  string #demo
               that.container = that.trigger.attr('data-container')?that.trigger.attr('data-container'):null;
               // string #demo
               that.scrollContainer = $('#'+that.trigger.attr('data-scrollContainer'))?$('#'+that.trigger.attr('data-scrollContainer')):null;  
               // 需要页码数            1
               that.pageNumber = that.trigger.attr('data-pageNumber')?that.trigger.attr('data-pageNumber'):that.pageNumber; 
               // 需要页码的返回条数      2
               that.pageSize = that.trigger.attr('data-pageSize')?that.trigger.attr('data-pageSize'):that.pageSize; 
               // 请求数据类型
               that.type = that.trigger.attr('data-type')?that.trigger.attr('data-type'):that.type; 
               // 请求的异步请求url     
               that.ajaxUrl = that.trigger.attr('data-ajaxUrl')?that.trigger.attr('data-ajaxUrl'):that.ajaxUrl;

           }else if(typeof opt.trigger == 'object'){

               that.trigger = opt.trigger;
               //需要获取模板id  string demo #demo
               that.template =  that.trigger.attr('data-template')?that.trigger.attr('data-template'):null; 
               //需要插入的数据模板容器  string #demo
               that.container = that.trigger.attr('data-container')?that.trigger.attr('data-container'):null;
               //需要页码数  1
               that.scrollContainer = $('#'+that.trigger.attr('data-scrollContainer'))?$('#'+that.trigger.attr('data-scrollContainer')):''; 
               //需要页码的返回条数      2
               that.pageNumber = that.trigger.attr('data-pageNumber')?that.trigger.attr('data-pageNumber'):that.pageNumber; 
               //获取模板的页码数
               that.pageSize = that.trigger.attr('data-pageSize')?that.trigger.attr('data-pageSize'):that.pageSize; 
               //请求数据类型
               that.type = that.trigger.attr('data-type')?that.trigger.attr('data-type'):that.type;      
               // 请求的异步请求url     
               that.ajaxUrl = that.trigger.attr('data-ajaxUrl')?that.trigger.attr('data-ajaxUrl'):that.ajaxUrl;

           };
           that.templ({
                'templateId':that.template,  //模板id
                'container':that.container,  //输出容器,
                'data':that.data,
                'callback':opt.callback
           });
           /*
           that.pageNumber++;
           if(that.type == '' && that.ajaxUrl == '') return;
           if(that.type != null && that.ajaxUrl != null){
                that.ajax({
                  'url':that.ajaxUrl,
                  'type':'get',
                  'data':{
                      pageSize:that.pageNumber,
                      pageNumber:that.pageSize,
                      type:that.type,
                  },
                  'dataType':'text',
                  'contentType':'application/json',
                  'beforeSend':function(){
                      $.showLoading();
                  },
                  'success':function(data){
                     //对数据进行判断处理
                     //成功后需要对dom的操作
                     //1.滚动加载之后需要对页码数进行递增操作
                     //进行数据的判断
                     that.trigger.attr('data-pageNumber',that.pageNumber); 
                     that.templ({
                          'templateId':that.template,  //模板id
                          'container':that.container,  //输出容器,
                          'data':that.data,
                          'callback':opt.callback
                     });  
                     $.hideLoading();
                     if(data && typeof data == 'string'){    
                     //如果返回的数据是字符串类型
                         data = JSON.parse(data);      
                     }else if(data && typeof data == 'object'){ //如果返回的数据是字符串类型
                         
                     }else if(data && data != '' && typeof data == 'array'){
                         //设置当前页码数
                         that.trigger.attr('data-pageNumber',that.pageNumber); 
                         that.templ({
                              'templateId':that.template,  //模板id
                              'container':that.container,  //输出容器,
                              'data':that.data,
                              'callback':opt.callback
                         });
                     }else{
                         
                     }

                  },
                  'error':function(err){
                     $.toast("数据加载失败", "text");
                  },
                  'complete':function(){
                  }
                }); 
           }
            */ 
       },
       templ:function(options){        //模板方法
            var that = this;
            var opt = $.extend({
              'templateId':'',  //模板id
              'container':'',  //输出容器,
              'data':null,
              'callback':function(){}
            },options);  //由调用函数配置过来
            
            if(opt && opt.data != null && opt.templateId != '' && opt.container != ''){
                //遍历数组
                var $templateId = $('#'+opt.templateId),
                    $container = $('#'+opt.container);
                for(var i=0,len = opt.data.length;i<len;i++){
                    that.id++; 
                    opt.data[i].id=that.id;
                    var tmpl = $templateId.html(),           
                        compiledTemplate = Template7.compile(tmpl),
                         //把数据打包丢进模板
                        tempHtml = compiledTemplate(opt.data[i]);
                        //append数据
                        $container.append(tempHtml);
                };
                if(opt.data.length < that.pageSize){
                   $container.append('<p class="no-data">没有更多数据</p>')
                }

                that.detail();  //绑定事件

                if(opt.callback && typeof opt.callback == 'function'){
                    opt.callback();
                }
            };
            return that;   
       },
       history:function(id){
           $('#'+id).on('touchstart',function(){
               window.history.back();
           })
       }, 
       ajax:function(options){         //异步请求
         
            if(options.url && options.url != ''){
              
               $.ajax({
                  url:options.url || "",
                  type:options.type || "POST",
                  data:options.data || {},
                  dataType:options.dataType || "json",
                  async:options.async || true,
                  beforeSend:options.beforeSend || function(){},
                  success:options.success || function(){},
                  error:options.error || function(){},
                  complete:options.complete || function(){},
                  timeout:options.timeout || 5000,
                  cache:options.cache || false,
                  contents:options.contents || "",
                  contentType:options.contentType || "application/x-www-form-urlencoded; charset=UTF-8",
                  context:options.context || "",
                  headers:options.headers || "",
                  statusCode:options.statusCode || {},
               });
            };   
       },
       validates:function(options){

            var opt = $.extend({
               "form":null,      //form表单
               "rules":{},       //rules校验规则
               "messages":{}     //提示信息
            },options);
            opt.form.validate({
                rules: opt.rules,
                messages: opt.messages,
                onfocusout: false,                             //指定是否在获取焦点时验证
                onkeyup: false,                                //指定是否在敲击键盘时验证
                onclick: false,                                //指定是否在鼠标点击时验证
                focusInvalid: false,                           //提交表单后，未通过验证的表单（第一个或提交之前获得焦点的未通过验证的表单）会获得焦点
                errorContainer: ".errorContainer",             //错误信息容器
                errorLabelContainer: ".errorContainer ul",     //错误信息容器
                wrapper: "li",                                 //错误信息外部包裹层
                showErrors: function(errorMap, errorList) {
                    //显示错误提示信息
                    this.defaultShowErrors();

                    if ($(".errorContainer").css("display") == "block") {       //判断错误提示框状态
                        var width = $(".errorContainer").width() / 2;
                        var height = $(".errorContainer").height() / 2;
                        $(".errorContainer").css({
                            "margin-left": -width,
                            "margin-top": -height
                        });
                        $(".errorContainer ul li").hide();                      //隐藏所有提示信息
                        //只是显示第一条错误信息
                        $(".errorContainer ul li label[style='display: inline;']").eq(0).parent().show();
                        //隐藏台式提示信息框
                        
                        setTimeout('$(".errorContainer").fadeOut(500)', 2000);
                    }
                },
                errorPlacement: function(error, element) {
                    //错误信息提示插入
                    error.appendTo(element.next().next());  
                },
                submitHandler: function(form) { 
                    //此处为验证完后，表单提交方式，可以设置是异步还是同步
                    
                }
            });
       }

    };
    var app = null;
    
    if(this instanceof appFn){
         app = this;
    }else{
        return new appFn();
    }

    return app;

});


