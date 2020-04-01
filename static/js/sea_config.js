//seajs配置
seajs.config({
	base: '../static/js/',
	//别名
	alias: {
		'jquery':'jquery-1.11.3.min',
		'bootstrap':'bootstrap.min',
		'vue':'vue.min',
		'element-ui':'element-ui',
		'layer':'layer/layer'
	},
	map: [
		[ /^(.*\.(?:css|js))(.*)$/i, '$1?v=1' ]
	]

})
//导航展开 收起 开始
define('navCtrl',function(require, exports, module){
	$('.sub-menu').click(function(event){
		event.stopPropagation();
	})
	var li = $('.cl-vnavigation>li');
	
	$(document).on('click','.cl-vnavigation>li',function(){
		console.log(112)
		$(this).siblings().children('ul').slideUp();
		$(this).children('ul').slideToggle();
	})
	$(document).on('click','.cl-toggle',function(e){
		var ul = $(".cl-vnavigation");
		ul.slideToggle(300, 'swing', function () {
		});

		e.preventDefault();
	});
	$('body').animate({opacity:'1'},"fast");
})
//导航展开 收起结束
var banner = {
		 quality:{
			    i:0
			 },
		 start:function(name,time){
			 var sole = document.querySelector(name);
		    if(sole){
				var index = sole.querySelectorAll('.banner');
				var span = sole.getElementsByTagName('span');
				if(index.length==span.length){
					this.cartoon(sole,time,index,span);
					this.pagination(sole,index,span);
					}else{
						console.log("span或者div少了")
						}
				}else{
					console.log("请创建"+name)
					}
			
		  },
		 cartoon:function(sole,time,index,span){
			 var _this =this;
	    setInterval(function(){
				  /*设置默认样式*/
				  for(j=0;j<index.length;j++){
					  /*console.log('j='+j)*/
						index[j].style.zIndex=-1;
					    span[j].style.color='#333';
					  }
				  _this.quality.i<index.length?_this.quality.i<3?_this.quality.i++:_this.quality.i=0:'';
				  index[_this.quality.i].style.zIndex=0;
				  span[_this.quality.i].style.color='#fff';
		       },time)	
			 },
		pagination:function(sole,index,span){
			var _this = this;
			for(i=0;i<span.length;i++){
			(function(j){
				span[j].onclick=function(){
					_this.quality.i= j;	
					 /*设置默认样式*/
					for(t=0;t<span.length;t++){
						span[t].style.color='#333';
						index[t].style.zIndex=-1;
					 }
					span[_this.quality.i].style.color='#fff'
				    index[_this.quality.i].style.zIndex=0;
				 }
				})(i)	
				}
			}
		 }