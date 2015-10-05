
$(document).ready(function() {

	var images= ["images/nyc.jpg","images/sf.jpg","images/la.jpg","images/austin.jpg","images/sydney.jpg"]
	var input = ["New York","Austin","LA","SanFran","Sydney"]
 	
 	$("#submit-btn").click(function(e) {
        e.preventDefault();
		var textinput = $("#city-type").val();
        $("body").css("background-image","url('" + images[0] + "')")

		if (textinput==="New York") {
			$("body").css("background","url('" + images[0] + "')");
		} else if (textinput==="San Francisco"){
			$("body").css("background","url('" + images[1] + "')");
		} else if (textinput=="Los Angeles"){
			$("body").css("background","url('" + images[2] + "')");
		} else if (textinput=="Austin"){
			$("body").css("background","url('" + images[3] + "')");
		} else if (textinput=="Sydney"){
			$("body").css("background","url('" + images[4] + "')");
		}
    });

 	
 	console.log($("#city-type").val())
//enter the input to the form  

})
  


