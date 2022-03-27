window.onload=function(){
	window.addEventListener("scroll", function () {
		
		var windowHeight=window.innerHeight;
		/*############## light #############*/
		var light=document.getElementById("light");
		//var section1=document.getElementById("section1");
		//var light=document.getElementById("light");
		var lightYoffset=light.offsetTop;/*light섹션이 맨위에서부터 얼만큼 아래로 떨어져 있는지*/

		var dancing=document.getElementById("dancing");
		var dancingYoffset=dancing.offsetTop;//afterGuy섹션의 yoffset
		var scrollHeight0=windowHeight*2;
		var lightHeight=light.offsetHeight 
		var scorollRatio0 = window.pageYOffset/lightHeight;
		console.log("scorollRatio0: "+scorollRatio0);
		if(window.pageYOffset>=lightYoffset && window.pageYOffset<=dancingYoffset){
			var r = (window.pageYOffset-lightYoffset)/lightHeight*147;
			var rt = parseInt(r).toString().padStart(4,'0');
			$("#light .lightImg img").attr("src","img/airpods/sequence/light/"+rt+".jpg");
			$("#light .lightImg ").css({"zIndex":"1","opacity":"1"});
			//기능) 첫번째 text를 scorollRatio0가 0.5에서 0.6이 되는 동안 opacity를 0에서 1로 스크롤 비율만큼 변화시키기
			var textMoving0 =[0,1,{on:0.8, max:0.87, till:0.9, off:1}]
			var opacityRatio;
			console.log(scorollRatio0);
		

			/*opacity가 증가되는 범위 안에 있을때*/
			if(scorollRatio0>=textMoving0[2].on && scorollRatio0<= textMoving0[2].max){
				opacityRatio = (textMoving0[1]-textMoving0[0])*(scorollRatio0-textMoving0[2].on)/(textMoving0[2].max-textMoving0[2].on);
			}
			/*opacity가 1로 유지되는 범위 안에 있을때*/
			else if(scorollRatio0>textMoving0[2].max && scorollRatio0<= textMoving0[2].till){
				opacityRatio = textMoving0[1];
			}
			/*opacity가 감소되는 범위 안에 있을때*/
			else if(scorollRatio0>textMoving0[2].till && scorollRatio0<= textMoving0[2].off){
				opacityRatio = textMoving0[1]-((textMoving0[1]-textMoving0[0])*(scorollRatio0-textMoving0[2].till)/(textMoving0[2].off-textMoving0[2].till));
				
			}

			/*어떠한 범위에도 속해있지 않을때*/
			else{
				opacityRatio = textMoving0[0];
				
			}
			$("#light .textMovingA").css({"opacity":opacityRatio});

		}else{
			$("#light .lightImg ").css({"zIndex":"0","opacity":"0"});
			$("#light .textMovingA").css({"opacity":0});
			//$("#light .lightImg").css({"position":"static"});
			//$("#dancing .dancingGuy").css({"position":"absolute","bottom":"0"});
			//$("#dancing").css({"zIndex":"-1"});
		}
		/*############## dancing #############*/
		var dancing=document.getElementById("dancing");
		var section1=document.getElementById("section1");
		var light=document.getElementById("light");
		var dancingYoffset=dancing.offsetTop;/*dancing섹션의 yoffset*/

		var afterGuy=document.getElementById("afterGuy");
		var afterGuyYoffset=afterGuy.offsetTop;//afterGuy섹션의 yoffset

		var dancingHeight=dancing.offsetHeight 
		var scorollRatio0 = (window.pageYOffset-dancingYoffset)/dancingHeight;
		if(window.pageYOffset>=dancingYoffset && window.pageYOffset<=afterGuyYoffset){
			
			
			$("#dancing").css({"zIndex":"1"});
			$("#dancing .dancingGuy").css({"position":"fixed","top":"0"});
			var scrollHeight1=windowHeight*2;
			
			var ss = (window.pageYOffset-dancingYoffset)/dancingHeight*131;
			var sst = parseInt(ss).toString().padStart(4,'0');
			//var st =parseInt(window.pageYOffset/scrollHeight0*176).toString().padStart(4,'0');
			//console.log("ss: "+ss);
			//console.log("sst: "+sst);
			$("#dancing .dancingGuy img").attr("src","img/airpods/sequence/guy/"+sst+".jpg");
			//$("#afterGuy .afterGuyImg").css({"position":"absolute"});

			var textMoving0 =[0,1,{on:0.6, max:0.8, till:0.87, off:0.95},-20,-33,-40];
			var opacityRatio;
			var translateRatio;
			console.log("dfdfd: "+scorollRatio0);
		

			/*opacity가 증가되는 범위 안에 있을때*/
			if(scorollRatio0>=textMoving0[2].on && scorollRatio0<= textMoving0[2].max){
				
				opacityRatio = (textMoving0[1]-textMoving0[0])*(scorollRatio0-textMoving0[2].on)/(textMoving0[2].max-textMoving0[2].on);
				translateRatio = textMoving0[3]+(scorollRatio0-textMoving0[2].on)/(textMoving0[2].max-textMoving0[2].on)*(textMoving0[4]-textMoving0[3]);
				console.log("translateRatio: "+translateRatio);
			}
			/*opacity가 1로 유지되는 범위 안에 있을때*/
			else if(scorollRatio0>textMoving0[2].max && scorollRatio0<= textMoving0[2].till){
				opacityRatio = textMoving0[1];
				translateRatio = textMoving0[4];
			}
			/*opacity가 감소되는 범위 안에 있을때*/
			else if(scorollRatio0>textMoving0[2].till && scorollRatio0<= textMoving0[2].off){
				
				opacityRatio = textMoving0[1]-((textMoving0[1]-textMoving0[0])*(scorollRatio0-textMoving0[2].till)/(textMoving0[2].off-textMoving0[2].till));
				translateRatio = textMoving0[5]+(scorollRatio0-textMoving0[2].till)/(textMoving0[2].off-textMoving0[2].till)*(textMoving0[5]-textMoving0[4]);
			}

			/*어떠한 범위에도 속해있지 않을때*/
			else{
				opacityRatio = textMoving0[0];
				
			}
			$("#dancing .textMovingA").css({"opacity":opacityRatio,"transform": "translate(-50%,"+translateRatio+"%)"});
		}else{
			$("#dancing .dancingGuy").css({"position":"static"});
			//$("#dancing .dancingGuy").css({"position":"absolute","bottom":"0"});
			$("#dancing").css({"zIndex":"0"});
		}
		
		/*############## afterGuy #############*/
		var afterGuy=document.getElementById("afterGuy");
		
		//afterGuy섹션의 yoffset
		var afterGuyYoffset=afterGuy.offsetTop;
		
		//comfort섹션의 yoffset
		var separate=document.getElementById("separate");
		var separateYoffset=separate.offsetTop;
		var afterGuyHeight=afterGuy.offsetHeight;
		
		
		if(window.pageYOffset>=afterGuyYoffset && window.pageYOffset<=separateYoffset){
			
		
			var scrollHeight2=windowHeight*2;
			$("#afterGuy .afterGuyImg").css({"position":"fixed","top":"0","left":"0"});
			var sss = Number((window.pageYOffset-afterGuyYoffset)/afterGuyHeight*88);
			var ssst = parseInt(sss).toString().padStart(4,'0');
			
			console.log("sss: "+sss);
			console.log("ssst: "+ssst);
			$("#afterGuy .afterGuyImg").css({"zIndex":"1"});
			$("#afterGuy .afterGuyImg img").attr("src","img/airpods/sequence/afterguy/"+ssst+".jpg");

			
			if(sss>=35){
				//alert();
				
				$("#afterGuy .afterGuyImg").css({"width":"32.098765432%","left":"50%","top":"50%","transform":"translate(-50%,-43%)"});
			}else{
				$("#afterGuy .afterGuyImg").css({"width":"100%","left":"0","transform":"translatex(0)"});
			}

			$("#separate .separateImg").css({"opacity":"0"});
		}else{
			$("#afterGuy .afterGuyImg").css({"position":"static"});
			//afterGuy.style.opacity="0";
			//comfort.style.opacity="1";
		}

		/*############## separate #############*/
		var separate=document.getElementById("separate");
		
		//separate yoffset
		var separateYoffset=separate.offsetTop;
		var separateHeight=separate.offsetHeight 
		//fadeOut섹션의 yoffset
		var fadeOut=document.getElementById("fadeOut");
		var fadeOutYoffset=fadeOut.offsetTop;
		var scorollRatioS = (window.pageYOffset-separateYoffset)/separateHeight;
		//console.log("eee: "+scorollRatioS);
		console.log("aaaaaaaa: "+scorollRatioS+"separateHeights: "+separateHeight+"afterGuyHeight: "+afterGuyHeight);
		if(window.pageYOffset>=separateYoffset && window.pageYOffset<=fadeOutYoffset){
			
			$("fadeOut .fadeOutImg").css({"position":"fixed","top":"0"});
			var v = Number((window.pageYOffset-separateYoffset)/separateHeight*138);
			var vt = parseInt(v).toString().padStart(4,'0');
			
			console.log("vt: "+vt);
			$("#separate .separateImg").css({"position":"fixed","zIndex":"1"});
			$("#separate .separateImg img").attr("src","img/airpods/sequence/separate/"+vt+".jpg");
			$("#separate .separateImg").css({"opacity":"1"});
			
			
			var opacityRatioSA;
			var translateRatioSA;
			var textMovingSA =[0,1,{on:0.01, max:0.07, till:0.15, off:0.25},-20,-33,-40];
			
			/*opacity가 증가되는 범위 안에 있을때*/
			if(scorollRatioS>=textMovingSA[2].on && scorollRatioS<= textMovingSA[2].max){
				//alert();
				opacityRatioSA = (textMovingSA[1]-textMovingSA[0])*(scorollRatioS-textMovingSA[2].on)/(textMovingSA[2].max-textMovingSA[2].on);
				translateRatioSA = textMovingSA[3]+(scorollRatioS-textMovingSA[2].on)/(textMovingSA[2].max-textMovingSA[2].on)*(textMovingSA[4]-textMovingSA[3]);
				
			}
			/*opacity가 1로 유지되는 범위 안에 있을때*/

			else if(scorollRatioS>textMovingSA[2].max && scorollRatioS<= textMovingSA[2].till){
				//alert();

				opacityRatioSA = textMovingSA[1];
				translateRatioSA = textMovingSA[4];
			}
			/*opacity가 감소되는 범위 안에 있을때*/
			else if(scorollRatioS>textMovingSA[2].till && scorollRatioS<= textMovingSA[2].off){
				//alert();
				opacityRatioSA = textMovingSA[1]-((textMovingSA[1]-textMovingSA[0])*(scorollRatioS-textMovingSA[2].till)/(textMovingSA[2].off-textMovingSA[2].till));
				translateRatioSA = textMovingSA[4]+(scorollRatioS-textMovingSA[2].till)/(textMovingSA[2].off-textMovingSA[2].till)*(textMovingSA[5]-textMovingSA[4]);
				console.log("qqq: "+translateRatioSA);
			}

			/*어떠한 범위에도 속해있지 않을때*/
			else{
				opacityRatioSA = textMovingSA[0];
				//$("#separate .textMovingA").css({"position":"static"});
			}
			$("#separate .textMovingA").css({"opacity":opacityRatioSA,"transform": "translate(-50%,"+translateRatioSA+"%)"});
			
			/*########### textMovingB ###########*/
			var textMovingSB =[0,1,{on:0.5, max:0.6, till:0.68, off:0.75},250,200,150];
			var opacityRatioSB
			var translateRatioSB;
			/*opacity가 증가되는 범위 안에 있을때*/
			if(scorollRatioS>=textMovingSB[2].on && scorollRatioS<= textMovingSB[2].max){
				//alert();
				opacityRatioSB = (textMovingSB[1]-textMovingSB[0])*(scorollRatioS-textMovingSB[2].on)/(textMovingSB[2].max-textMovingSB[2].on);
				translateRatioSB = textMovingSB[3]+(scorollRatioS-textMovingSB[2].on)/(textMovingSB[2].max-textMovingSB[2].on)*(textMovingSB[4]-textMovingSB[3]);
				
			}
			/*opacity가 1로 유지되는 범위 안에 있을때*/
			else if(scorollRatioS>textMovingSB[2].max && scorollRatioS<= textMovingSB[2].till){
				opacityRatioSB = textMovingSB[1];
				translateRatioSB = textMovingSB[4];
			}
			/*opacity가 감소되는 범위 안에 있을때*/
			else if(scorollRatioS>textMovingSB[2].till && scorollRatioS<= textMovingSB[2].off){
				opacityRatioSB = textMovingSB[1]-((textMovingSB[1]-textMovingSB[0])*(scorollRatioS-textMovingSB[2].till)/(textMovingSB[2].off-textMovingSB[2].till));
				translateRatioSB = textMovingSB[4]+(scorollRatioS-textMovingSB[2].till)/(textMovingSB[2].off-textMovingSB[2].till)*(textMovingSB[5]-textMovingSB[4]);
			}

			/*어떠한 범위에도 속해있지 않을때*/
			else{
				opacityRatioSB = textMovingSB[0];
				
			}
			$("#separate .textMovingB").css({"opacity":opacityRatioSB,"transform": "translate(-50%,"+translateRatioSB+"%)"});
			

			
		}else{
			$("#separate .separateImg").css({"position":"absolute"});
			//$("#afterGuy .afterGuyImg").css({"position":"static"});
			//afterGuy.style.opacity="0";
			//comfort.style.opacity="1";
		}
		
		/*############## fadeOut #############*/
		var fadeOut=document.getElementById("fadeOut");
		
		//fadeOut yoffset
		var fadeOutYoffset=fadeOut.offsetTop;
		var fadeOutHeight=fadeOut.offsetHeight;
		//woman섹션의 yoffset
		var woman=document.getElementById("woman");
		var womanYoffset=woman.offsetTop;
		var scorollRatioF = (window.pageYOffset-fadeOutYoffset)/fadeOutHeight;
		console.log("jhjhj"+scorollRatioF);
		if(window.pageYOffset>=fadeOutYoffset && window.pageYOffset<=womanYoffset){
			//alert();
			console.log("!!!!!!!!!!!");
			$("#fadeOut .fadeOutImg").css({"position":"fixed","top":"50%","zIndex":"1"});
			var vv = Number((window.pageYOffset-fadeOutYoffset)/fadeOutHeight*138);
			var vvt = parseInt(vv).toString().padStart(4,'0');
			
			//console.log("vt: "+vvt);
			
			$("#fadeOut .fadeOutImg img").attr("src","img/airpods/sequence/fadeOut/"+vvt+".jpg");
			$("#fadeOut .fadeOutImg").css({"left":"50%","top":"50%","transform":"translate(-50%,-41%)"});
			$("#fadeOut .fadeOutImg").css({"opacity":"1"});
			
			/*########### fadeOut textMovingA ###########*/
			var opacityRatioFA;
			var translateRatioFA;
			var textMovingFA =[0,1,{on:0.01, max:0.12, till:0.15, off:0.2},-20,-33,-40];
			
			/*opacity가 증가되는 범위 안에 있을때*/
			if(scorollRatioF>=textMovingFA[2].on && scorollRatioF<= textMovingFA[2].max){
			
				opacityRatioFA = (textMovingFA[1]-textMovingFA[0])*(scorollRatioF-textMovingFA[2].on)/(textMovingFA[2].max-textMovingFA[2].on);
				translateRatioFA = textMovingFA[3]+(scorollRatioF-textMovingFA[2].on)/(textMovingFA[2].max-textMovingFA[2].on)*(textMovingFA[4]-textMovingFA[3]);
				
			}
			/*opacity가 1로 유지되는 범위 안에 있을때*/

			else if(scorollRatioF>textMovingFA[2].max && scorollRatioF<= textMovingFA[2].till){
				//alert();

				opacityRatioFA = textMovingFA[1];
				translateRatioFA = textMovingFA[4];
			}
			/*opacity가 감소되는 범위 안에 있을때*/
			else if(scorollRatioF>textMovingFA[2].till && scorollRatioF<= textMovingFA[2].off){
				//alert();
				opacityRatioFA = textMovingFA[1]-((textMovingFA[1]-textMovingFA[0])*(scorollRatioF-textMovingFA[2].till)/(textMovingFA[2].off-textMovingFA[2].till));
				translateRatioFA = textMovingFA[4]+(scorollRatioF-textMovingFA[2].till)/(textMovingFA[2].off-textMovingFA[2].till)*(textMovingFA[5]-textMovingFA[4]);
				console.log("qqq: "+textMovingFA);
			}

			/*어떠한 범위에도 속해있지 않을때*/
			else{
				opacityRatioFA = textMovingFA[0];
				$("#fadeOut .textMovingA").css({"position":"static","opacity":"0"});
			}
			$("#fadeOut .textMovingA").css({"opacity":opacityRatioFA,"transform": "translate(-50%,"+translateRatioFA+"%)"});

			/*########### fadeOut textMovingB ###########*/
			var opacityRatioFB;
			var translateRatioFB;
			var textMovingFB =[0,1,{on:0.23, max:0.3, till:0.33, off:0.4},-20,-33,-40];
			
			/*opacity가 증가되는 범위 안에 있을때*/
			if(scorollRatioF>=textMovingFB[2].on && scorollRatioF<= textMovingFB[2].max){
			
				opacityRatioFB = (textMovingFB[1]-textMovingFB[0])*(scorollRatioF-textMovingFB[2].on)/(textMovingFB[2].max-textMovingFB[2].on);
				translateRatioFB = textMovingFB[3]+(scorollRatioF-textMovingFB[2].on)/(textMovingFB[2].max-textMovingFB[2].on)*(textMovingFB[4]-textMovingFB[3]);
				
			}
			/*opacity가 1로 유지되는 범위 안에 있을때*/

			else if(scorollRatioF>textMovingFB[2].max && scorollRatioF<= textMovingFB[2].till){
				//alert();

				opacityRatioFB = textMovingFB[1];
				translateRatioFB = textMovingFB[4];
			}
			/*opacity가 감소되는 범위 안에 있을때*/
			else if(scorollRatioF>textMovingFB[2].till && scorollRatioF<= textMovingFB[2].off){
				//alert();
				opacityRatioFB = textMovingFB[1]-((textMovingFB[1]-textMovingFB[0])*(scorollRatioF-textMovingFB[2].till)/(textMovingFB[2].off-textMovingFB[2].till));
				translateRatioFB = textMovingFB[4]+(scorollRatioF-textMovingFB[2].till)/(textMovingFB[2].off-textMovingFB[2].till)*(textMovingFB[5]-textMovingFB[4]);
				console.log("qqq: "+textMovingFB);
			}

			/*어떠한 범위에도 속해있지 않을때*/
			else{
				opacityRatioFB = textMovingFB[0];
				
			}
			$("#fadeOut .textMovingB").css({"opacity":opacityRatioFB,"transform": "translate(-50%,"+translateRatioFB+"%)"});
		}else{
			$("#fadeOut .fadeOutImg").css({"position":"absolute","top":"50%"});
		}
		

		/*############## woman #############*/
	
		var woman=document.getElementById("woman");
		var whiteBg=document.getElementById("whiteBg");

		//woman영역의 yoffset
		var womanYoffset=woman.offsetTop;

		//woman다음의 yoffset
		var whiteBgoffset=whiteBg.offsetTop;
		

		var womanHeight=woman.offsetHeight;
		var scorollRatioW = (window.pageYOffset-womanYoffset)/womanHeight;
	
		if(window.pageYOffset>=womanYoffset && window.pageYOffset<=whiteBgoffset){
		
			var d = Number((window.pageYOffset-womanYoffset)/womanHeight*176);
			var dt = parseInt(d).toString().padStart(4,'0');
			
			console.log("d: "+d);
			console.log("dt: "+dt);
			$("#woman .imgWoman img").attr("src","img/airpods/sequence/woman/"+dt+".jpg");
			$("#woman .imgWoman").css({"position":"fixed","zIndex":"1"});

			/*########### woman textMovingA ###########*/
			var opacityRatioWA;
			var translateRatioWA;
			var textMovingWA =[0,1,{on:0.23, max:0.3, till:0.33, off:0.4},-20,-33,-40];
			
			/*opacity가 증가되는 범위 안에 있을때*/
			if(scorollRatioW>=textMovingFB[2].on && scorollRatioW<= textMovingFB[2].max){
			
				opacityRatioFB = (textMovingWA[1]-textMovingWA[0])*(scorollRatioF-textMovingWA[2].on)/(textMovingWA[2].max-textMovingWA[2].on);
				translateRatioFB = textMovingWA[3]+(scorollRatioF-textMovingWA[2].on)/(textMovingWA[2].max-textMovingWA[2].on)*(textMovingWA[4]-textMovingWA[3]);
				
			}
			/*opacity가 1로 유지되는 범위 안에 있을때*/

			else if(scorollRatioW>textMovingWA[2].max && scorollRatioW<= textMovingWA[2].till){
				//alert();

				opacityRatioFB = textMovingFB[1];
				translateRatioFB = textMovingFB[4];
			}
			/*opacity가 감소되는 범위 안에 있을때*/
			else if(scorollRatioW>textMovingFB[2].till && scorollRatioW<= textMovingFB[2].off){
				//alert();
				opacityRatioFB = textMovingWA[1]-((textMovingWA[1]-textMovingWA[0])*(scorollRatioF-textMovingWA[2].till)/(textMovingWA[2].off-textMovingWA[2].till));
				translateRatioFB = textMovingWA[4]+(scorollRatioF-textMovingWA[2].till)/(textMovingWA[2].off-textMovingWA[2].till)*(textMovingWA[5]-textMovingWA[4]);
				console.log("qqq: "+textMovingFB);
			}

			/*어떠한 범위에도 속해있지 않을때*/
			else{
				opacityRatioFB = textMovingWA[0];
				
			}
			$("#fadeOut .textMovingB").css({"opacity":opacityRatioFB,"transform": "translate(-50%,"+translateRatioFB+"%)"});
		}else{
			//scroll0.style.opacity="0";
			//section4.style.opacity="1";
			$("#woman .imgWoman").css({"position":"static","zIndex":"0"});
		}
		
		
		//console.log(inner);
		
		
		//var stt=st.toFixed(2);
		//console.log(st);

		//$("#scroll0 .imgWoman img").attr("src","img/airpods/sequence/woman/"+st+".jpg");
		/*num++;
		var nums=num.toString().padStart(4,'0');
		console.log(nums);
		$("p img").attr("src","img/airpods/sequence/woman/"+nums+".jpg");*/
	}, false);
}
  