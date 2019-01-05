$(document).ready(function(){
	$("#Museum1Info").hide();
	$("#Museum2Info").hide();
	$("#Museum3Info").hide();
	$("#Museum4Info").hide();
	$("#Museum5Info").hide();
				
	$("#btn1").click(function(){
		$("#frontPage").hide(1000);
		$("#Museum1Info").show(1000);
    });
    
    $("#btn2").click(function(){
		$("#frontPage").hide(1000);
		$("#Museum2Info").show(1000);
    });
    
	$("#btn3").click(function(){
		$("#frontPage").hide(1000);
		$("#Museum3Info").show(1000);
	});
                
    $("#btn4").click(function(){
		$("#frontPage").hide(1000);
		$("#Museum4Info").show(1000);
	});
                
    $("#btn5").click(function(){
		$("#frontPage").hide(1000);
		$("#Museum5Info").show(1000);
	});

	$("#backToFrontPage1").click(function(){
		$("#frontPage").show(1000);
		$("#Museum1Info").hide(1000);
    });
    
	$("#backToFrontPage2").click(function(){
		$("#frontPage").show(1000);
		$("#Museum2Info").hide(1000);
    });
    
	$("#backToFrontPage3").click(function(){
		$("#frontPage").show(1000);
        $("#Museum3Info").hide(1000);
	});
                
    $("#backToFrontPage4").click(function(){
		$("#frontPage").show(1000);
		$("#Museum4Info").hide(1000);
    });
                
    $("#backToFrontPage5").click(function(){
		$("#frontPage").show(1000);
		$("#Museum5Info").hide(1000);
	});
});