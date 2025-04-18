// af147f11a0bdb42f9a8efd152f7bbbf2
// api.openweathermap.org/data/2.5/weather?id=2172797
//api.openweathermap.org/data/2.5/forecast?id=524901
(function checkMobileDevice() {
	var mobileKeyWords = ['Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson'];
	for (var i in mobileKeyWords) {
			if (navigator.userAgent.match(mobileKeyWords[i]) != null) {
					$(".wrap").css({"background":"none"});
					$(".tabs").css({
						 "position":"static",
							"top":0, 
							"left":0, 
							"width":"100%"
					});
					$(".wrap > div").css({
						"position":"relative",
						"width":"100%",
						"top":0,  
						"height":"calc(100% - 3rem)", 
						"left":0
					});
			}
			else {
				$(".wrap").css({
					"background":"url(imges/bdook/iphone.png) no-repeat", 
					"background-size":"auto 100%"
				});
				$(".tabs").css({
					"position":"absolute",
					"top":"11.2%", 
					"left":"7.13%", 
					"width":"86%"
				});
				$(".wrap > div").css({
					"position":"absolute",
					"width":"86%",
					"top":"calc(11.2% + 3rem)",  
					"height":"calc(77.4% - 3rem)", 
					"left":"7.13%"
				});
			}
	}
	return false;
});

var log = console.log;
var urlBase = "https://api.openweathermap.org/data/2.5/";

$(".tabs > li").click(function(){
	var n = $(this).index();
	$(".tabs > li").css({
		"background-color":"#f8f8f8",
		"border-bottom":"none",
		"color":"#333",
		"font-weight":"normal"
	});
	$(this).css({
		"background-color":"#f60",
		"border-bottom":"3px solid #390",
		"color":"#fff",
		"font-weight":"bold"
	});
	$(".conts").hide(0);
	$(".conts").eq(n).show(0, function(){
		if(n == 0) url = urlBase + "weather";
		else url = urlBase + "forecast";
		$.ajax({
			url: url,
			type: "get",
			dataType: "json",
			//https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=02efdd64bdc14b279bc91d9247db4722&units=metric    	//daily
			//https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=02efdd64bdc14b279bc91d9247db4722&units=metric 		//weekly
			data: {
				id: "1835848",
				appid: "02efdd64bdc14b279bc91d9247db4722",
				units: "metric"
			},
			success: function(data){
				if(n == 0) dailyFn(data);
				else weeklyFn(data);
			},
			error: function(xhr){
				log(xhr);
			}
		});
	});
});
$(".tabs > li").eq(0).trigger("click");

function dailyFn(data) {
	console.log(data);
	$("#wt_icon").attr("src", "imges/bdook/icon/"+data.weather[0].icon+".png");
	$("#wt_main").html(data.weather[0].main+" / "+data.weather[0].description);
	$("#wt_temp").html(data.main.temp+"("+data.main.temp_max+"/"+data.main.temp_min+")");
	$("#wt_wind").html(data.wind.speed+"/ms ("+data.wind.deg+"deg)");
	$("#wt_coord").html("위도: "+data.coord.lat+" / 경도: "+data.coord.lon);
}

function weeklyFn(data) {
	var html = '';
	var v = '';
	$(".weekly").empty();
	for(var i in data.list) {
		v = data.list[i];
		html = `
		<ul class="clear">
			<li><img src="imges/bdook/icon/${v.weather[0].icon}.png" class="img"></li>
			<li class="wk_time"><span>${v.dt_txt}</span></li>
			<li class="wk_main">
				<span>날씨:</span> ${v.weather[0].main}(${v.weather[0].description}) 
			</li>
			<li class="wk_temp">
				<span>온도:</span> ${v.main.temp}도 (${v.main.temp_min} / ${v.main.temp_max})</li>
			<li class="wk_wind"><span>바람:</span> ${v.wind.speed}ms(${v.wind.deg}deg)</li>
		</ul>
		`;
		$(".weekly").append(html);
	}
}

$(window).resize(function(){
	var wid = $(this).height() * 0.495;
	$(".wrap").css({"max-width":wid+"px"});
}).trigger("resize");
