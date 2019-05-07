(function($){
   $.fn.extend({
       tab:function(options){
           var opt = $.extend({
               'tabLink':'',   //点击触发事件样式
               'toggle':'',    //切换关联点
               'tabSwitch':'',  //切换tabcontent样式
               'activeClass':'',//tabhead选中的样式
               'callback':function(){
                 //只触发一次，切换成功后出发的回掉事件
               }
           },options);
           return this.each(function(){
               
               var $this = $(this),
                   $head = $('.'+opt.tabLink), //选获取到tab切换的两个必要head数组对象
                   $body = $('.'+opt.tabSwitch),//获取tab切换的两个必要body数组对象
                   switchFlag = '',
                   tabBody = null;
                                  
               $this.on('touchstart','.'+opt.tabLink,function(){
                    //先是操作选中状态tab switch 的head 选中状态
                    var _this = $(this);  //点击事件对象
                     
                    $head.removeClass(opt.activeClass);  // 移除选中状态
                    _this.addClass(opt.activeClass);   //当前对象附加选中状态
                    //添加是否点击过标记 点击过为真，未点击则为0
                     if(_this.attr('data-click') || parseInt(_this.attr('data-click')) == 1){
                         _this.attr('data-click','0');
                     }else{
                        _this.attr('data-click','1');
                     }
                    //获取切换的的关联字符串
                    switchFlag = _this.attr(opt.toggle)?_this.attr(opt.toggle):''; //是否存在toggle切换标记

                    //对显示和隐藏的部分进行遍历操作
                    
                    $body.each(function(index,elem){
                        if($(elem).attr(opt.toggle) == switchFlag){
                           tabBody = $(elem); 
                           $(elem).removeClass('none');
                        }else{
                           $(elem).addClass('none');
                        }
                    });
                    if(_this.attr('data-click') && parseInt(_this.attr('data-click')) === 1 && opt.callback && typeof opt.callback == 'function'){
                         opt.callback(_this,tabBody);
                    }
               });
               
           })
       }
   });
})(jQuery);