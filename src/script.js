$(document).ready(function() {
      $('select').niceSelect();
});

var flag = true;
$(".filter__rollUp").click(function(){
	if(flag == true){
		$(".filter__settings").css('display','none');
        $(".filter__rollUp").html('Развернуть');
		flag =! flag;
	}else{
		$(".filter__settings").css('display','flex');
        $(".filter__rollUp").html('Свернуть');
		flag =! flag;
	}
});

$(".filter__clear").click(function(){
    console.log($(".list").find(".selected"));
    $(".list").find(".selected").removeClass("selected");
	$(".list li:first-of-type").addClass("selected");
    $(".current").html("Все");
});
