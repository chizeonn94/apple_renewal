$(function(){
		/*###############기능1:돋보기 버튼 클릭시 검색바 나타나기###############*/
		
		/*초기화:검색바 일단 숨겨놓기*/
		$(".search_area1").hide();
		/*초기화:full 숨겨놓기*/
		$("#full").hide();

		/*돋보기 클릭시 검색바만 나타나고 다른 메뉴들 다 숨기기*/
		$("#info_menu .magnifier").click(function(){
			$("#logo, #info_menu, #gnb").hide(200);
			$(".search_area1").show(200);
			$("#full").css({"backgroundColor":"rgba(0,0,0,0.5)"});
			$("#full").show();
		});
		/*닫기 버튼 클릭시 숨겨진 메뉴들 나타나고 검색바는 다시 숨기기*/
		$("#close_button").click(function(){
			$("#logo, #info_menu, #gnb").show(200);
			$(".search_area1").hide(200);
			$("#full").hide();
		});
		
		/*계정버튼 클릭시 하위메뉴 나타나게 하기*/
		var clickedAcc = 0;
		$("#info_menu .account").click(function(){
			if(clickedAcc == 0){
				$("#accMenu").css({"display":"block"});
				clickedAcc = 1;
			}else{
				$("#accMenu").css({"display":"none"});
				clickedAcc = 0;
			}
		});
	
		//모바일용 햄버거메뉴버튼클릭시 메뉴나타나게 하기
		
		var clickedMob = 0;
		

		$("#btn_mob_menu").click(function(){
			if(clickedMob == 0){
				$("#gnb2").css({"height":"100vh"});
				clickedMob = 1;
			}else{
				$("#gnb2").css({"height":"0"});
				clickedMob = 0;
			}
			
		});

		//footer 
	
		$("#footer_nav_menues .learn_more, #footer_nav_menues .nav_menu").click(function(){
			
			
			
			if($(this).children("ul").hasClass('slide_down')){
				$(this).children("ul").removeClass('slide_down');
				
			}else{
				$(this).children("ul").addClass('slide_down');
				
			}
			
			return false;
		});

});