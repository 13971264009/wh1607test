$(function(){
	$(".yanzhen").blur(function(){
	checkYzm();
	})
		$(".submit").click(function(){
			if(checkYzm()){
				var phone = $(".inputlog").val();
				var pwd = $(".llinputlog").val();
				var info = JSON.parse(localStorage.getItem(phone));
				if(info){
					if(pwd == info.pwd){
						alert(
							"验证通过"
						)
						window.location="index.html";
						
					}else{
						$(".llinputlog").val("");
						alert("密码错误！请重新输入");
					}
				}else{
					alert("用户名不存在！请核对后重新输入");
				}
			}
		})
		
	$(".clearint").click(function(){
	$(this).prev().val("");
	
})	
		console.log(localStorage);
		//手机号的验证
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
	
})