$(function(){
function fixPosition(ClassName) {
	//$(ClassName).css("padding-top","100px");
	
	$(ClassName).addClass("animated animatedFadeInUp fadeInUp");
	
}


$(".description-block").click(function () {
	fixPosition("#about-me");
	});
$(".recent-works").click(function () {fixPosition("#recent")});
$(".services-block").click(function () {fixPosition("#services")});
	
});