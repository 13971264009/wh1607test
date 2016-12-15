$(function(){
	//top导航
	$(".j-nav-item").hover(function(){
				$(this).find(".j-nav-dropdown").css("display", "block");
			}, function(){
				$(this).find(".j-nav-dropdown").css("display", "none");
			})
	//悬浮菜单
	$(document).scroll( function() { 
		
		if($(document).scrollTop()>150){
			
			$("#js-funcTab").addClass("m-funcTab-fixed");
		}
		if($(document).scrollTop()<150){
			
			$("#js-funcTab").removeClass("m-funcTab-fixed");
		}
	} );
	//回顶部隐藏出现
	$(document).scroll( function() { 
		
		if($(document).scrollTop()>300){
			
			$(".goTop").css("display","block");
		}
		if($(document).scrollTop()<=300){
			
			$(".goTop").css("display","none");
		}
	} );
	//点击回顶部
	$(".goTop").click(function(){		
		//console.log($(document).scrollTop())
		$("html,body").animate({"scrollTop":0+"px"},1000);
	})		
	
	
	//导航图轮播	

			
			$(function(){
				var $li= $(".f-imgCenterBanner");
				var $d2Li= $(".slick-dots li");
				var $d1= $(".slick-track");				
				var k=0;
				//自动播放
				var timer= setInterval(fn1,1000);
				

				//移入缩略图
				$d2Li.hover(function(){
					
					clearInterval(timer);
					//主要工作：获取当前缩略图的下标
					k=$(this).index();
					plays(k);					
//					timer= setInterval(fn1,2000);
				},function(){					
					timer= setInterval(fn1,1000);
				})
				//划入划出事件
				$d1.hover(function(){
					clearInterval(timer);
				},function(){					
					timer= setInterval(fn1,1000);
				});				
				//以下是公共函数
				//秘书函数
				function fn1(){
					k++;
					if(k==$li.size()){
						k=0;
					}
					plays(k);
				}
				//科员函数
				function plays(k){
					//修改第k张的透明度=1，其他张=0;
					$li.eq(k).stop().animate({opacity:1},500).siblings().stop().animate({opacity:0},500);
					$d2Li.eq(k).addClass("slick-active").siblings().removeClass("slick-active");
				}
			});			
			
			
	//底部JSON创建添加
	$.get("./date/json.json",function(str){
				//console.log(str.js1.li1.img)
				for(var key in str.nav1){
					$("<li class='item'><a class='nav-subCate'><img class='w-icon-44' src='./img/"+str.nav1[key].img+"' ><p class='text'>"+str.nav1[key].txt+"</p></a></li>").appendTo($(".topnav1"))};
					for(var key in str.nav2){
					$("<li class='item'><a class='nav-subCate'><img class='w-icon-44' src='./img/"+str.nav2[key].img+"' ><p class='text'>"+str.nav2[key].txt+"</p></a></li>").appendTo($(".topnav2"))};
					for(var key in str.nav3){
					$("<li class='item'><a class='nav-subCate'><img class='w-icon-44' src='./img/"+str.nav3[key].img+"' ><p class='text'>"+str.nav3[key].txt+"</p></a></li>").appendTo($(".topnav3"))};
					for(var key in str.nav4){
					$("<li class='item'><a class='nav-subCate'><img class='w-icon-44' src='./img/"+str.nav4[key].img+"' ><p class='text'>"+str.nav4[key].txt+"</p></a></li>").appendTo($(".topnav4"))};
					for(var key in str.nav5){
					$("<li class='item'><a class='nav-subCate'><img class='w-icon-44' src='./img/"+str.nav5[key].img+"' ><p class='text'>"+str.nav5[key].txt+"</p></a></li>").appendTo($(".topnav5"))};
					for(var key in str.nav6){
					$("<li class='item'><a class='nav-subCate'><img class='w-icon-44' src='./img/"+str.nav6[key].img+"' ><p class='text'>"+str.nav6[key].txt+"</p></a></li>").appendTo($(".topnav6"))};
					for(var key in str.nav7){
					$("<li class='item'><a class='nav-subCate'><img class='w-icon-44' src='./img/"+str.nav7[key].img+"' ><p class='text'>"+str.nav7[key].txt+"</p></a></li>").appendTo($(".topnav7"))};
					for(var key in str.nav8){
					$("<li class='item'><a class='nav-subCate'><img class='w-icon-44' src='./img/"+str.nav8[key].img+"' ><p class='text'>"+str.nav8[key].txt+"</p></a></li>").appendTo($(".topnav8"))};
					for(var key in str.nav9){
					$("<li class='item'><a class='nav-subCate'><img class='w-icon-44' src='./img/"+str.nav9[key].img+"' ><p class='text'>"+str.nav9[key].txt+"</p></a></li>").appendTo($(".topnav9"))};
					
				for(var key in str.js1){
					$("<li class='item slick-slide slick-current slick-active' role='option' style='width:265px;'><div class='m-product'><div class='hd'><a><img class='img' src='./img/"+str.js1[key].img+"' style='opacity: 1;'></a></div><div class='bd bd_comment'><div class='m-comment'><div class='bd _top'><span class='pname'>"+str.js1[key].pname+"</span><span class='price'>"+str.js1[key].price+"</span></div><div class='comment-content'><p>"+str.js1[key].p+"</p><s class='more' style='display: inline;'></s></div><div class='bd _bottom '><span class='frontname'>"+str.js1[key].frontname+"</span><span>"+str.js1[key].span+" </span></div></div></div></div></li>").appendTo($("#botli"));				
				};
				
				for(var key in str.js2){
					$("<li class='item'><div class='m-product '><div class='hd'><a ><img class='img j-lazyload' src='./img/"+str.js2[key].img+"' style='display: inline;'><p class='newTag '>"+str.js2[key].newtag+"</p></a></div><div class='bd '><h4 class='name '><a class='name'>"+str.js2[key].name+"</a></h4><p class='price '><span>"+str.js2[key].price+"</span></p><hr><p class='desc ' >"+str.js2[key].desc+"</p></div></div></li>").appendTo($(".botli2"));											
				};
				for(var key in str.js3){
				$("<li class='item'><div class='m-product '><div class='hd '><a><img class='img j-lazyload ' src='./img/"+str.js3[key].img+"' style='display: inline; '></a></div><div class='bd '><h4 class='name '><a class='name'>"+str.js3[key].name+"</a></h4><p class='price '><span>"+str.js3[key].price+"</span></p><hr><p class='desc'>"+str.js3[key].desc+"</p></div></div></li>").appendTo($(".botli3"));
				};
				for(var key in str.js4){
				$("<li class='item'><div class='m-product '><div class='hd '><a><img class='img j-lazyload ' src='./img/"+str.js4[key].img+"' style='display: inline; '></a></div><div class='bd '><h4 class='name '><a class='name'>"+str.js4[key].name+"</a></h4><p class='price '><span>"+str.js4[key].price+"</span></p><hr><p class='desc'>"+str.js4[key].desc+"</p></div></div></li>").appendTo($(".botli4"));
				};
				for(var key in str.js5){
					$("<li class='item'><div class='m-product '><div class='hd'><a ><img class='img j-lazyload' src='./img/"+str.js5[key].img+"' style='display: inline;'><p class='newTag '>"+str.js5[key].newtag+"</p></a></div><div class='bd '><h4 class='name '><a class='name'>"+str.js5[key].name+"</a></h4><p class='price '><span>"+str.js5[key].price+"</span></p><hr><p class='desc ' >"+str.js5[key].desc+"</p></div></div></li>").appendTo($(".botli5"));											
				};
				for(var key in str.js6){
				$("<li class='item'><div class='m-product '><div class='hd '><a><img class='img j-lazyload ' src='./img/"+str.js6[key].img+"' style='display: inline; '></a></div><div class='bd '><h4 class='name '><a class='name'>"+str.js6[key].name+"</a></h4><p class='price '><span>"+str.js6[key].price+"</span></p><hr><p class='desc'>"+str.js6[key].desc+"</p></div></div></li>").appendTo($(".botli6"));
				};
				for(var key in str.js7){
				$("<li class='item'><div class='m-product '><div class='hd '><a><img class='img j-lazyload ' src='./img/"+str.js7[key].img+"' style='display: inline; '></a></div><div class='bd '><h4 class='name '><a class='name'>"+str.js7[key].name+"</a></h4><p class='price '><span>"+str.js7[key].price+"</span></p><hr><p class='desc'>"+str.js7[key].desc+"</p></div></div></li>").appendTo($(".botli7"));
				};
				for(var key in str.js8){
					$("<li class='item'><div class='m-product '><div class='hd'><a ><img class='img j-lazyload' src='./img/"+str.js8[key].img+"' style='display: inline;'><p class='newTag '>"+str.js8[key].newtag+"</p></a></div><div class='bd '><h4 class='name '><a class='name'>"+str.js8[key].name+"</a></h4><p class='price '><span>"+str.js8[key].price+"</span></p><hr><p class='desc ' >"+str.js8[key].desc+"</p></div></div></li>").appendTo($(".botli8"));											
				};
				for(var key in str.js9){
					$("<li class='item'><div class='m-product '><div class='hd'><a ><img class='img j-lazyload' src='./img/"+str.js9[key].img+"' style='display: inline;'><p class='newTag '>"+str.js9[key].newtag+"</p></a></div><div class='bd '><h4 class='name '><a class='name'>"+str.js9[key].name+"</a></h4><p class='price '><span>"+str.js9[key].price+"</span></p><hr><p class='desc'>"+str.js9[key].desc+"</p></div></div></li>").appendTo($(".botli9"));											
				};
				for(var key in str.js10){
					$("<li class='item'><div class='m-product '><div class='hd'><a ><img class='img j-lazyload' src='./img/"+str.js10[key].img+"' style='display: inline;'><p class='newTag '>"+str.js10[key].newtag+"</p></a></div><div class='bd '><h4 class='name '><a class='name'>"+str.js10[key].name+"</a></h4><p class='price '><span>"+str.js10[key].price+"</span></p><hr><p class='desc ' >"+str.js10[key].desc+"</p></div></div></li>").appendTo($(".botli10"));											
				};
				for(var key in str.new1){
					$("<a class='manufacturer'><div class='mask '></div><div class='name '>"+str.new1[key].name+"</div><div class='price'>"+str.new1[key].price+"</div><img class='img' src='./img/"+str.new1[key].img+"'></a>").appendTo($(".manufacturerList"));
				};
				$(".manufacturer").eq(0).addClass("first");
				for(var key in str.new2){
					//alert(str.new2[key].price)
				$("<li class='item'><div class='m-product'><div class='hd '><a><img class='img j-lazyload' src='./img/"+str.new2[key].img+"' style='display: inline;'></a></div><div class='bd'><h4 class='name'><a class='name'>"+str.new2[key].name+"</a></h4><p class='price'><span>"+str.new2[key].price+"</span></p></div></div></li>").appendTo($(".js-newItemslick"));
				};
				//列表页加载
				for(var key in str.list){
					//alert(str.new2[key].price)
				$("<li class='item'><div class='m-product product-s j-product'><div class='hd'><a href='gooditem.html'><img class='img j-lazyload'  src='./img/"+str.list[key].img+"' style='display: inline;'></a></div><div class='bd'><h4 class='name'><a class='name' >"+str.list[key].name+"</a></h4><p class='price'><span>"+str.list[key].price+"</span></p><hr><p class='desc'>"+str.list[key].desc+"</p></div></div></li>").appendTo($(".list1"));
				$("<li class='item'><div class='m-product product-s j-product'><div class='hd'><a><img class='img j-lazyload'  src='./img/"+str.list[key].img+"' style='display: inline;'></a></div><div class='bd'><h4 class='name'><a class='name' >"+str.list[key].name+"</a></h4><p class='price'><span>"+str.list[key].price+"</span></p><hr><p class='desc'>"+str.list[key].desc+"</p></div></div></li>").appendTo($(".list2"));
				$("<li class='item'><div class='m-product product-s j-product'><div class='hd'><a><img class='img j-lazyload'  src='./img/"+str.list[key].img+"' style='display: inline;'></a></div><div class='bd'><h4 class='name'><a class='name' >"+str.list[key].name+"</a></h4><p class='price'><span>"+str.list[key].price+"</span></p><hr><p class='desc'>"+str.list[key].desc+"</p></div></div></li>").appendTo($(".list3"));
				$("<li class='item'><div class='m-product product-s j-product'><div class='hd'><a><img class='img j-lazyload'  src='./img/"+str.list[key].img+"' style='display: inline;'></a></div><div class='bd'><h4 class='name'><a class='name' >"+str.list[key].name+"</a></h4><p class='price'><span>"+str.list[key].price+"</span></p><hr><p class='desc'>"+str.list[key].desc+"</p></div></div></li>").appendTo($(".list4"));
				$("<li class='item'><div class='m-product product-s j-product'><div class='hd'><a><img class='img j-lazyload'  src='./img/"+str.list[key].img+"' style='display: inline;'></a></div><div class='bd'><h4 class='name'><a class='name' >"+str.list[key].name+"</a></h4><p class='price'><span>"+str.list[key].price+"</span></p><hr><p class='desc'>"+str.list[key].desc+"</p></div></div></li>").appendTo($(".list5"));
				$("<li class='item'><div class='m-product product-s j-product'><div class='hd'><a><img class='img j-lazyload'  src='./img/"+str.list[key].img+"' style='display: inline;'></a></div><div class='bd'><h4 class='name'><a class='name' >"+str.list[key].name+"</a></h4><p class='price'><span>"+str.list[key].price+"</span></p><hr><p class='desc'>"+str.list[key].desc+"</p></div></div></li>").appendTo($(".list6"));
				$("<li class='item'><div class='m-product product-s j-product'><div class='hd'><a><img class='img j-lazyload'  src='./img/"+str.list[key].img+"' style='display: inline;'></a></div><div class='bd'><h4 class='name'><a class='name' >"+str.list[key].name+"</a></h4><p class='price'><span>"+str.list[key].price+"</span></p><hr><p class='desc'>"+str.list[key].desc+"</p></div></div></li>").appendTo($(".list7"));
				$("<li class='item'><div class='m-product product-s j-product'><div class='hd'><a><img class='img j-lazyload'  src='./img/"+str.list[key].img+"' style='display: inline;'></a></div><div class='bd'><h4 class='name'><a class='name' >"+str.list[key].name+"</a></h4><p class='price'><span>"+str.list[key].price+"</span></p><hr><p class='desc'>"+str.list[key].desc+"</p></div></div></li>").appendTo($(".list8"));
				
							
};
});
	//alert($(".js-img").length);
//	setInterval(function(){
//		if($("#bbaner").find($("img")).eq(0).css("display")==;)
//		$("#bbaner").find($("img")).eq(0).css("display","block");
//		$("#bbaner").find($("img")).eq(1).css("display","none");
//	},2000)
	
	
	
	
	
	//列表详情页
		for(var i=0;i<$(".j-sthumbs li").length;i++){
		
		$(".j-sthumbs li").eq(i).hover(function(){
			$(this).attr("class","z-active").siblings().attr("class","");			
			$(".j-thumb").attr("src","./img/good"+$(this).index()+".png");
			$(".bigImgShow img").attr("src","./img/good"+$(this).index()+".png");
		})
		};
		//放大镜
		$(".view").hover(function(){
	$(".shadow").css({"display":"block"});
	$(".bigImgShow").css({"display":"block"});
},function(){
	$(".shadow").css({"display":"none"});
	$(".bigImgShow").css({"display":"none"})
});
$(".view").mousemove(
	function(evt){
		var mx=evt.clientX;
		var my=evt.clientY;
		var scale=$(".bigImgShow").height()/$(".shadow").height();
		//console.log(mx+" "+my);
		var vl=$(".view").offset().left;
		var vt=$(".view").offset().top;
		//console.log(vl+" "+vt);
		
		var x = (mx - vl -$(".shadow").width()/2)+$(document).scrollLeft();
		var y = (my - vt+ $(".shadow").height()/2)-100+$(document).scrollTop();
		//console.log(x+" "+y);
		if(x<=0){
		x = 0;
		}
		if(x>=$(".view").width()-$(".shadow").width()){
			x = $(".view").width()-$(".shadow").width()
		}
		if(y<=0){
			y=0;
		}
		if(y>=$(".view").height()-$(".shadow").height()){
			y = $(".view").height()-$(".shadow").height()
		}
		//console.log(x+" "+y);
		$(".shadow").css({"left":x+"px","top":y+"px"});
		var bigX = -(x*scale)
		var bigY = -(y*scale);
		$(".bigImgShow img").css({"left":bigX,"top":bigY});
	}
)
//选择规格
 $(".m-tabs li").click(function(){  
 	$(this).addClass("tab-sel").siblings().removeClass("tab-sel");
 }).eq(0).click(function(){	
 	$(".j-retail-price").html("3.00");
 });
 
 $(".m-tabs li").eq(1).click(function(){
 	$(".j-retail-price").html("2.00");
 });
 
 //点击增加
 var buyAmount = 1;
$(".jia1").click(function(){
//console.log($(".j-input").size())
//console.log($(this).index())
	var html = $(".aprice1").val()*1;
	html++;
	buyAmount = html;
	$(".aprice1").val(html);
});
$(".jian1").click(function(){
	
	var html = $(".aprice1").val()*1;
	html--;
	if(html<=1){
		$(".aprice1").val(1);
		buyAmount = 1;
	}else{
		$(".aprice1").val(html);
		buyAmount = html;
	}
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

//点击收藏
$(".zone-1 .top-1").click(function(){

	$(this).css("display","none");
	$(".zone-2 .bottom-1").css("display","none");
	$(".zone-1 .top-2").css("display","block");
	$(".zone-2 .bottom-2").css("display","block")});

$(".zone-1 .top-2").click(function(){
	
	$(this).css("display","none");
	$(".zone-2 .bottom-1").css("display","block");
	$(".zone-2 .bottom-2").css("display","none")
	$(".zone-1 .top-1").css("display","block")});
	//加入购物车 点击事件
	$(".j-btn-addcart").click(function(){

		var goodsrc=$(".j-sthumbs li").eq(0).find("img").attr("src");		
		var goodname=$(".intro .name").html();
		var goodprice=$(".j-retail-price").html();
		var goodnum=$(".j-input").val()*1;
		if(goodnum==0){goodnum=1;};		
		var goodsize=$(".tab-sel span").html();
		var goodInfo = {"src":goodsrc,"name":goodname,"price":goodprice,"num":goodnum,"size":goodsize};
		//console.log(goodInfo.num);
		var goodif=JSON.stringify(goodInfo);
		localStorage.setItem("Aproduct_"+goodname,goodif);
		console.log(localStorage)	
		
		var Tnum=$(".j-cart-num").html()*1;
			Tnum+=goodnum;
			$(".j-cart-num").html(Tnum);
	})

//console.log(localStorage)

//购物车JS


































})