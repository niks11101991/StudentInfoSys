 $.get("http://gmatrix.webege.com/courses_taught.php",{user:window.localStorage["user"]},function(json)
                 {
	 				var mArray = jQuery.parseJSON(json);
	 				var html="";
	 				
	 				for(i=0;i<mArray.length;i++)
	 				{
	 					html+="<option id = "+mArray[i].course_id+" value="+mArray[i].course_id+">"+mArray[i].course_name+"</option>";
	 				}	
	 				
	 				$('#courses').append(html);
                 });
 
$(document).ready(function()
{
	
	$( "#courses" ).change(function() {
		var e = document.getElementById("courses");
		var strUser = e.options[e.selectedIndex].value;
		var c_name = e.options[e.selectedIndex].text;
		$("#ind").attr("href", "individual_marks.html?c_id="+strUser+"&c_name="+c_name);
		$("#stats").attr("href", "course_stats.html?c_id="+strUser+"&c_name="+c_name);
	});
});  