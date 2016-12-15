//判断商品是否存入了本地信息

if(localStorage.length>=1){
	$(".uuuu").hide();
	$("uuuum").show();	
}else{
	$(".uuuu").show();
	$("uuuum").hide();
};

      

getCarData();
function getCarData(){
	var html ="";
	for(var i=0;i<localStorage.length;i++){
		//alert(localStorage.key(i));
		var key = localStorage.key(i);
		
		if(key.indexOf("Aproduct_")!=-1){
			var info = JSON.parse(localStorage.getItem(key));
			html = $("<div class='cart-item f-cb' ><div class='item w7' ><div class='ck' ><div class='w-chkbox' ><input type='checkbox' class='cinput' checked='' ></div></div></div><div class='item w8' ><div class='pic' ><a><img src="+info.src+"></a></div><div class='nameCon f-word-break f-text-overflow'><a class='pname f-word-break f-text-overflow' >"+info.name+"</a><div class='spec'><a href='javascript:void(0);' class='f-text-overflow'><span>"+info.size+"</span></a><i class='w-icon-normal icon-normal-downtriangle-cart'></i></div></div><div class='selectSkuCon' ></div></div><div class='item item-1 w3'><p class='price oprice'></p><p class='price aprice'><span >¥</span><span class='oneprice'>"+info.price+"</span></p></div><div class='item item-2 w4' ><div ><div class='u-selnum u-selnum-cart'><span class='j-reduce less z-dis jian'><i class='hx'></i></span><input class='j-input aprice' type='text' value='"+info.num+"'><span class='j-add more jia'><i class='hx'></i><i class='sx'></i></span></div></div></div><div class='item item-3 w5'><p class='price sprice'><span>¥</span><span class='factprice'>"+(info.price)*1*(info.num)+"</span></p></div><div class='item item-4 item-left w6 f-pr'><div class='activity'></div><a class='del' href='javascript:void(0);'><i class='w-icon-normal icon-normal-cart-close'></i></a></div><div class='hr'></div><div class='hr hr-1'></div></div>")
			$(".cart-group").append(html);	
			
		}
	}
	
}
//console.log(localStorage)
$(".clearcar").click(function(){
	//debugger
	for(var i=0;i<=localStorage.length;i++){
		i = i == localStorage.length? i-1 : i;
		var buyKey = localStorage.key(i);
		if(buyKey && buyKey.indexOf("Aproduct_") != -1){
			localStorage.removeItem(buyKey);
		}
		i = 0;
	}
	$(".uuuu").show();
	$("uuuum").hide();
	$(".cart-item").remove();
	getAmount();
})


function minum(){
		var minum=0;
		for(var i=0;i<$(".j-input").length;i++){
			minum+=$(".j-input").eq(i).val()*1;
		}
		$(".j-cart-num").html(minum);
}
//alert($(".factprice").size())
function factprice(){
	
		var factp=0;
		for(var i=0;i<$(".factprice").length;i++){
//		console.log($(".factprice").size());
			factp+=$(".factprice").eq(i).html()*1;
		}
		
		$(".sumprice").html(factp);
}

//点击增加 减少 对应的span单价总价变化而变化
var buyAmount0 = 1;
$(".jia").click(function(){
//console.log($(".j-input").size())
//console.log($(this).index())
    //console.log($(this).prev())
	var html = $(this).prev().val()*1;
	html++;
	buyAmount0 = html;
	minum();
	var ffprice=html*$(this).parent().parent().parent().prev().find(".oneprice").html()*1;
	$(this).parent().parent().parent().next().find(".factprice").html(ffprice)
	$(this).prev().val(html);	
	factprice();
});
$(".jian").click(function(){	
	var html = $(this).next().val()*1;
	html--;
	if(html<=1){
		$(this).next().val(1);
		buyAmount0 = 1;
		var ffprice=html*$(this).parent().parent().parent().prev().find(".oneprice").html()*1;
	$(this).parent().parent().parent().next().find(".factprice").html(ffprice)
	$(this).prev().val(html);
	minum();
	}else{
		$(this).next().val(html);
		buyAmount0 = html;
		minum();
		var ffprice=html*$(this).parent().parent().parent().prev().find(".oneprice").html()*1;
	$(this).parent().parent().parent().next().find(".factprice").html(ffprice)
	$(this).prev().val(html);			
	}
	factprice();
});  
//全选v
//console.log($(".j-input").eq(1).val());
//$(".j-cart-num").html
//单个删除
$(".del").click(function(){
	var pname=$(this).parent().parent().find(".pname").html();
	$(this).parent().parent().remove();
	localStorage.removeItem("Aproduct_"+pname);
})


$(".m-cart .tt .w-chkbox input").click(function(){//全选事件
	//localStorage.clear();
	if($(this).prop("checked")){
		$(".cinput").prop("checked",true);
	}else{
		$(".cinput").prop("checked",false);
	}
	//getTotal();
});
//function getTotal(){
//	var num = 0 ;
//	var total = 0;
//	$(".cinput").each(function(){
//		if($(this).prop("checked")){
//			num += $(this).parent().parent().find("td").eq(2).find("span").html()*1;
//			total += $(this).parent().parent().find("td").eq(3).find(".totalPrice").html()*1;
//		}
//	})
//	$("#buyNum").html(num);
//	$(".totalNum").html(total.toFixed(2));
//}
for(var i=0;i<$(".cinput").length;i++){
	var k=0;
	if($(".cinput").eq(i).prop("checked")==true){
		$(".bbinput").prop("checked",true);
		k++
	}
	$(".snum").html(k);
}
$(".bbinput").click(function(){//全选事件
	//localStorage.clear();
	if($(this).prop("checked")){
		$(".cinput").prop("checked",false);
	}else{
		$(".cinput").prop("checked",true);
	}
	//getTotal();
});



































