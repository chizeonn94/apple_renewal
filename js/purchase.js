
window.onload=function(){
	//(기능1) 컬러 선택시 html text 바꾸기 
	var lis = document.querySelectorAll('.color');
	
	lis.forEach(function(el) {
	  el.addEventListener('click', changeColorBoth, false);
	})
	lis.forEach(function(el) {
	  el.addEventListener('mouseover', changeColor, false);
	})
	lis.forEach(function(el) {
	  el.addEventListener('mouseleave', keepColor, false);
	})
	var colorsName = ["Ivory", "Moss", "Spring Yellow", "Glassier Blue"]
	function changeColorBoth(e){
		var li = e.currentTarget;
		var hidden = li.querySelector('input');
		
		document.getElementById("chosenColor0").innerHTML = hidden.title;
		document.getElementById("chosenColor1").innerHTML = hidden.title;
	}
	function changeColor(e){
		var li = e.currentTarget;
		var hidden = li.querySelector('input');
		document.getElementById("chosenColor1").innerHTML = hidden.title;
	}
	function keepColor(e){
		document.getElementById("chosenColor1").innerHTML = document.getElementById("chosenColor0").innerText;
	}

	//(기능2) 컬러 클릭하면 이미지 바뀌기
	$(".color").click(function(){
		var nameOfImage = $(this).find("input").attr("id");
		
		$("#mainImage").find("img").attr("src","img/acc/download/"+nameOfImage+".jpg");
		$("#img0").find("img").attr("src","img/acc/download/"+nameOfImage+"_AV1.jpg");
		$("#img1").find("img").attr("src","img/acc/download/"+nameOfImage+"_AV2.jpg");
		$("#img2").find("img").attr("src","img/acc/download/"+nameOfImage+"_AV3.jpg");
		$("#img3").find("img").attr("src","img/acc/download/"+nameOfImage+"_AV4.jpg");
		$("#img4").find("img").attr("src","img/acc/download/"+nameOfImage+"_AV5.jpg");
		$("#img5").find("img").attr("src","img/acc/download/"+nameOfImage+"_AV6.jpg");
		
	});

	//(기능3) 작은 이미지 클릭하면 메인이미지 바뀌기
	$(".pic_small").click(function(){
		var nameOfImage1 = $(this).find("img").attr("src").substring(17,26);
		console.log(nameOfImage1);
		$("#mainImage").find("img").attr("src","img/acc/download/"+nameOfImage1+".jpg");
	});

	
	//(기능4) 컬러 클릭하면 이미지 바뀌기
	$(".bar").css({"left":0});
	var xOffset=$(".pic_small:eq(1)").width()+12;
	$(".pic_small:eq(0)").click(function(){
		
		console.log(xOffset);
		$(".bar").animate({"left":xOffset*0},300);
	});
	$(".pic_small:eq(1)").click(function(){
		
		console.log(xOffset);
		$(".bar").animate({"left":xOffset*1},300);
	});
	$(".pic_small:eq(2)").click(function(){
		
		console.log(xOffset);
		$(".bar").animate({"left":xOffset*2},300);
	});
	$(".pic_small:eq(3)").click(function(){
	
		console.log(xOffset);
		$(".bar").animate({"left":xOffset*3},300);
	});
	$(".pic_small:eq(4)").click(function(){
		
		console.log(xOffset);
		$(".bar").animate({"left":xOffset*4},300);
	});

	//기능) checked된 색상


	
	var clickedRowsTile0=0;
	var clickedRowsTile1=0;

	$("#productDescription ul .explanation").slideUp();
	$("#productDescription ul .bigSectionOfDesc:eq(0) .rowsTitle").click(function(){
		if(clickedRowsTile0==0){
			$(this).siblings(".explanation").slideDown(300);
			clickedRowsTile0=1;
		}else{
			//$(this).siblings(".explanation").animate({"maxHeight":"0"},300);
			$(this).siblings(".explanation").slideUp(300);
			clickedRowsTile0=0;
			//console.log(clickedRowsTile);
		}
	});

	$("#productDescription ul .bigSectionOfDesc:eq(1) .rowsTitle").click(function(){
		
		if(clickedRowsTile1==0){
			$(this).siblings(".explanation").slideDown(300);
			clickedRowsTile1=1;
			
		}else{
			$(this).siblings(".explanation").slideUp(300);
			clickedRowsTile1=0;
			//console.log(clickedRowsTile);
		}
	});
	
	
	//기능)tab누르면 tab에 해당하는  content나오게 하기
	
	$("#productDescription .tabContents .tabContent:not(:first)").hide();

	$("#productDescription .tabNav").find("a").bind("click focus", function(){
		
		$("#productDescription .tabContent").hide();
		
		$($(this).attr("href")).show();
		return false;
	});
	
	

	//기능)tab누르면 bar가 해당하는 tab밑에 생기게 하기

	//초기화 : bar너비 첫번째 tabnav의 너비로 설정
	$("#productDescription .bar").css({"width":$("#productDescription .tabNavs .tabNav:eq(0) a").width(),"left":"0"});
	var xOffset2=$("#productDescription .tabNavs .tabNav").width();

	$("#productDescription .tabNavs .tabNav:eq(0) a").bind("click focus",function(){
		var width=$(this).width();
		$("#productDescription .bar").animate({"left":xOffset2*0,"width":width},300);
		return false;
	});
		$("#productDescription .tabNavs .tabNav:eq(1) a").bind("click focus",function(){
		var width=$(this).width();
		$("#productDescription .bar").animate({"left":xOffset2*1+50,"width":width},300);
		return false;
	});


	
	//Add to bag 버튼 클릭시 팝업창 나오게 하기
	
	$(".addBtn").click(function(){
		//alert();
		$("#popUp").css({"height":"100vh"});
		return false;
	});
	/*$(window).scroll(function(){
		//현재 스크롤의 위치값 확인하기
		var nowScroll= $(document).scrollTop();
		$("#popUp").css({"top":nowScroll});
		
	});*/
	
	//초기화 첫번째 li제외한 모든 li들 숨겨놓기
	$("#popUp ul li:not(:eq(0))").addClass("none");
	//more버튼 클릭하면 다음 li나타나게 하기
	$(this).parent().parent().next("li").removeClass("none");
	$("#popUp .btnMore").click(function(){
		$(this).parent().parent().next("li").removeClass("none");
	});
	//기능) x버튼 클릭하면 popUp나타나게 하기
	$("#popUp .btnPopup").click(function(){
		$("#popUp").css({"height":"0"});
		return false;
	});

	//기능) delete버튼 클릭하면 해당 li사라지게 하기
	

	
	//기능) delete버튼 클릭하면 해당 li사라지게 하기
	//$(".selectColor .colorOption").hide();
	var clickedColor = 0;
	var arrows = document.querySelectorAll(".buttonArrow");

	//기능) recommended 슬라이딩윈도우, dot 색깔 바뀌게 하기

	//슬라이딩윈도우 초기화: 1200px만큼 앞으로 빼놓기, 뒤에거 앞으로 나와있게 하기
	$("#recommended .recoItemsWrap").css({"marginLeft":"-100%"});
	$("#recommended .recoItemsWrap").prepend($("#recommended .recoItems:last"));
	
	//점 초기화: 첫번째 점 까맣게 배경색설정
	var n = 0;
	var m = 0;
	$(".dots .dot:eq("+m+")").addClass("selectedDot");
	// next버튼 클릭시
	$("#recommended .btns .next").click(function(){
		$("#recommended .recoItemsWrap").animate({"marginLeft":"-=100%"},300,function(){
			$("#recommended .recoItemsWrap").append($("#recommended .recoItems:eq(0)"));
			$("#recommended .recoItemsWrap").css({"marginLeft":"-100%"});

			
		});
		n+=1;
		m=n%4;
		$(".dots .dot").removeClass("selectedDot");
		$(".dots .dot:eq("+m+")").addClass("selectedDot");
		
		console.log(m);
		
		
	});

	$("#recommended .btns .prev").click(function(){
		$("#recommended .recoItemsWrap").animate({"marginLeft":"+=100%"},300,function(){
			$("#recommended .recoItemsWrap").prepend($("#recommended .recoItems:last"));
			$("#recommended .recoItemsWrap").css({"marginLeft":"-100%"});
		});
		n-=1;
		m=n%4;
		$(".dots .dot").removeClass("selectedDot");
		$(".dots .dot:eq("+m+")").addClass("selectedDot");
		
	});
	


	function changeByColor(num){
		alert();
		$("#mainImage").find("img").attr("src","img/acc/download/"+num+".jpg");
		$("#img0").find("img").attr("src","img/acc/download/"+num+"_AV1.jpg");
		$("#img1").find("img").attr("src","img/acc/download/"+num+"_AV2.jpg");
		$("#img2").find("img").attr("src","img/acc/download/"+num+"_AV3.jpg");
		$("#img3").find("img").attr("src","img/acc/download/"+num+"_AV4.jpg");
		$("#img4").find("img").attr("src","img/acc/download/"+num+"_AV5.jpg");
		$("#img5").find("img").attr("src","img/acc/download/"+num+"_AV6.jpg");
	}

	$("#popUp .selectColor .buttonArrow").click(function(){
		
		if($(this).next().hasClass('slideDown')){
			$(this).next().removeClass('slideDown');
			$(this).html("<i class='fas fa-caret-square-down fa-2x'></i>");
		}else{
			$(this).next().addClass('slideDown');
			$(this).html("<i class='fas fa-caret-square-up fa-2x'></i>");
		}
		
		return false;
	});

	/**/
	var productName = document.querySelectorAll(".productName");
	for(var i=0;i<productName.length;i++){
		productName[i].innerHTML=document.getElementById("nameProduct").innerText;
	}
	
	// 
}

//기능) delete버튼 클릭하면 해당 li사라지게 하기

//var price = parseFloat(document.getElementById("price").innerHTML);
//var quantity = Math.round(parseInt(document.querySelectorAll(".quantity")[num].value),2);
//totalPrice.value=price*quantity;


function deletes(num){
	var product = document.querySelectorAll(".product");
	product[num].classList.add("none");
	
	var quantity = document.querySelectorAll(".quantity");
	quantity[num].value=0;
	calc(num);
	changeImg(num,'MV722','Ivory');
}


function calc(num){
	//qty수만큼 색상별 총합 변화
	var totalPrice = document.querySelectorAll(".totalPrice")[num];
	var price = parseFloat(document.getElementById("price").innerHTML);
	var quantity = Math.round(parseInt(document.querySelectorAll(".quantity")[num].value),2);
	totalPrice.value=price*quantity;

	//공통) priceAll(총합계) 변화

	var priceAll = document.getElementById("priceAll");
	var totalPrices = document.querySelectorAll(".totalPrice");
	var a = 0;
	for(var i=0;i<totalPrices.length;i++){
		a+=Number(totalPrices[i].value);
	}
	console.log(typeof a);
	priceAll.value=a;
	console.log(typeof totalPrices[0].value);
}


function subtract(num){
	
	document.querySelectorAll(".quantity")[num].value=0;	
	document.getElementById("priceAll").value=parseInt(document.getElementById("priceAll").value)-parseInt(document.querySelectorAll(".totalPrice")[num].value);
	
	document.querySelectorAll(".productImg")[num].querySelector("img").src="img/acc/download/MV712.jpg";
	document.querySelectorAll(".totalPrice")[num].value=0;
}


function changeImg(num,colorNum,colorName){
	
	var productImg = document.querySelectorAll(".productImg")[num].querySelector("img");
	productImg.src="img/acc/download/"+colorNum+".jpg";
	document.querySelectorAll(".colorName")[num].value = colorName
}



