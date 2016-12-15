$(".inputlog").blur(function(){
	checkPhoneNum();
})
//密码验证
$(".llinputlog").blur(function(){
	checkPwd();
});
//再次输入密码的验证
$(".rellinputlog").blur(function(){
	checkSurePwd();
});


//验证码验证
$(".yanzhen").blur(function(){
	checkYzm();
});
//注册协议及交易条款 复选框
//$(".agree").click(function(){
//	if(!$("input[type='checkbox']").prop("checked")){
//		$(".submit").css({"background-color":"#ccc"}).prop("disabled",true);
//	}else{
//		$(".submit").css({"background-color":"#e83917"}).prop("disabled",false);	
//	}		
//});
$(".clearint").click(function(){
	$(this).prev().val("");
	
})

$(".submit").click(function(){
	var phone = $(".inputlog").val();
	var pwd = $(".llinputlog").val();
	var info = {"phone":phone,"pwd":pwd};
	if(checkPhoneNum()&&checkPwd()&&checkSurePwd()&&checkYzm()){
			localStorage.setItem(phone,JSON.stringify(info));
			location="login.html"+"?account="+phone;
	}else{
		alert("信息输入有误，请重新检查！");
	}
})


function checkPhoneNum(){

	if($(".inputlog").val()==""){
		alert("请输入手机号");
		return false;
	}else{
		var rule = /^(1[3,5,8,7]\d{9})$/;
		if(localStorage.getItem($(".inputlog").val())){
			alert("用户名已存在");
		}else{
			if(rule.test($(".inputlog").val())){
				alert("可以使用");
				return true;
			}else{
				alert("手机号格式错误");
				return false;
			}
		}
	}
}
//密码的验证
function checkPwd(){
	if($(".llinputlog").val()==""){
		alert("请输入密码");
		return false;
	}else{
		if($(".llinputlog").val().length<6 || $(".llinputlog").val().length>20){
			alert("密码长度必须为6-20");
			return false;
		}else{
			
			return true;
		}
	}
}
//密码再次验证
function checkSurePwd(){
	if($(".rellinputlog").val()==""){
		alert("请再次输入密码");
		return false;
	}else{
		if($(".llinputlog").val() != $(".rellinputlog").val()){
			alert.html("两次输入密码不一致，请重新输入");
			return false;
		}else{
			
			return true;
		}
	}
}
//验证码校验
function checkYzm(){
	if($(".yanzhen").val()==""){
		alert("请输入验证码")
	}else{
		if($(".yanzhen").val() != $(".changeyzm").html()){
			alert("验证码输入错误，请重新输入");
			$(".changeyzm").html(getCheckCode(4));
			$(".yzmCheck").addClass("yzmFalse");
			return false;
		}else{
			
			$(".yzmCheck").removeClass("yzmFalse").addClass("yzmTrue");
			return true;
		}
	}
}





//获取验证码
var list = [];
for(var i=0;i<=9;i++){
	list.push(i);
}
for(var i=97;i<=122;i++){
	list.push(String.fromCharCode(i));
}
for(var i=65;i<=90;i++){
	list.push(String.fromCharCode(i));
}
$(".changeyzm").html(getCheckCode(4));
$(".changeyzm").click(function(){
	$(".changeyzm").html(getCheckCode(4));
})
function getCheckCode(len){
	var resultCode = "";
	for(var i=0;i<len;i++){
		var maxIndex = list.length-1;
		var randomIndex = Math.round(Math.random()*maxIndex);
		resultCode += list[randomIndex];	
	}
	return resultCode;
}
	
