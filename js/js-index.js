//window.alert('Fatma Mohamed'); 

//scrollفي تغير اللون مع ال navbarده جزء ال
//scrollمع جزء السهم اللي بيظهر في الجنب اليمين لم ينزل ب ال
let aboutOffsetTop = $("#About").offset().top;//Aboutده كده بيجيب المسافه م بين المتصفح وال 

$(window).scroll(function(){
	
	let wScroll = $ (window).scrollTop();
		
		if(wScroll > aboutOffsetTop -100){
			$(".navbar").css("backgroundColor","rgba(0,0,0,0.7)")//اعمل اللون ده Aboutانا كده بقول اقول م تنزل عند ال
			$("#btnUp").fadeIn(500);//انا كده بظهر السهم 
			$(".navbar").css("padding", "0px 70px");//padding ينزل ل تحت يعمل ال navbarده علشان لم ال
			
		}
		else{
			$(".navbar").css("backgroundColor","transparent")//رجع اللون شفاف تاني navbarانا كده بقول لم يرجع ال 
			$("#btnUp").fadeOut(500);//انا كده بخفي السهم 
			$(".navbar").css("padding", "0px 0px");//padding يطلع تاني ل فوق يرجع ال navbarده علشان لم ال
			
		}
})
$("#btnUp").click(function(){//ده علشان لم اضغط علي السهم يطلع ل فوق 
	
	$("html,body").animate({scrollTop:0} , 3000);//ده كده هيطلع ل فوق 0 في 3 ثواني 
})

//==================================================================================================================================
let aboutOffsetTopLeft = $("#Contact").offset().top;//Aboutده كده بيجيب المسافه م بين المتصفح وال 

$(window).scroll(function(){
	
	let wScroll = $ (window).scrollTop();
		
		if(wScroll > aboutOffsetTopLeft){
			$("#btnUpLeft").fadeOut(500);//انا كده بظهر السهم 
		}
		else{
			$("#btnUpLeft").fadeIn(500);//انا كده بخفي السهم  
		}
})

//ده علشان لم انزل ل تحت واضغط علي السهم اللي علي الشمال يطلع ل فوق 
$("#btnUpLeft").click(function () {
	$("html,body").animate({scrollTop:10000} , 5000);
})

//==================================================================================================================================
//يتحرك بشكل جميل navbarده علشان لم اضغط علي اي لينك في ال

 $("a[href^='#']").click(function(){//ده اللي هو اللينك aال
	//#اول علامه ال href انا كده بقول لم اضغط علي لينك في  
	
	let aHref = $ (this).attr("href");	//srcهيجيب ال Attributeانا كده بقول هات الattrولم بضغط بيقولي ضغط فين والaبتعود علي لينك ال thisال
				//setter علشان بعد كده هستخدم aHref وبعد كده حطها في getter ده هستخدم هنا $ (this).attr("href");
	
	
	//$("#about").offset().top;//aboutانا كده بقول هات ابعاد ال
	let sectionOffset = $(aHref).offset().top;//كده هيجيب ابعاد اللينكات كلها
						//setter ده هستخدم هنا aHref 
	
	$("html,body").animate({scrollTop:sectionOffset} , 1000);
});
 
 
//==================================================================================================================================
//ده علشان بوكس الالوان
$("#sideBarToggle").click(function(){
	
	let colorBoxWidth = $ ("#colorBox").innerWidth();//colorBoxWidth واحطها في colorBoxانا كده بجيب عرض ال innerWidth
	
	if($('#sideBar').css("left")=="0px")//البوكس كده بره
	{
		$("#sideBar").animate({left:`-${colorBoxWidth}`}, 2000);//left ب السالب ل colorBoxWidthكده لم اضغط علي الاعدادت داخل ال
	}
	else
	{
		$('#sideBar').animate({left:`0px`}, 2000);//ده كده يبقي بره	0 = left ب sideBar انا كده بقول لو البوكس
	}

})

 //تغير اللون في البوكس 
 for(let i =0; i< $(".color-item").length; i++)
 {
	let red = Math.round(Math.random()*255);	//ده بطلع رقم عشوائي Math.round
	let green = Math.round(Math.random()*255);
	let blue = Math.round(Math.random()*255);
	//بطلع ارقام عشواقي من 0 لحد 1 وانا ضرب في 255 يبقي هطلع ارقام من 0 لحد255 Math.random
	//علشان يطلع ارقام صحيحهMath.roundجوه ال Math.randomوانا حطط ال
	
	$(".color-item").eq(i).css("backgroundColor" , `rgb(${red} ,${green} ,${blue} )`);
 }
 
//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
$(".color-item").click(function(){
	let bkgColor = $ (this).css("backgroundColor");
	$("#About, #Team, #Services, #Works, #Pricing, #Contact").css("backgroundColor" , bkgColor)//Colorاو ال backgroundColor ده تغير من 
})

//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
$(".color-item").click(function(){
	let bColor = $ (this).css("backgroundColor");
	$(".animated").css("color" , bColor)//Colorاو ال backgroundColor ده تغير من 
})

//==================================================================================================================================
// ده علشان لم الموقع يحمل يطلع شكل اعقبال م يحمل 
$(document).ready(function(){//في الاول jsالمفروض ده ططلع فوق في ملف ال $(document).ready(function(){

	$("#loading").fadeOut(2000 , function(){
		$("body").css("overflow-y" , "auto")//يشتغل تانيscrollكده بعد م الموقع يتحمل هيرجع ال
	});
});

//==================================================================================================================================
//ده علشان الموقع يكتب اتوماتك
	var typed = new Typed('.element', {
  // Waits 1000ms after typing "First"
  strings: ["apps", "apps","websites", "softwares"],typeSpeed: 90,loop :true,
});