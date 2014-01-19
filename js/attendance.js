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
		$("#enter").attr("href", "enter_attendance.html?cid="+strUser);
		$("#reports").attr("href", "view_attendance_reports.html?cid="+strUser);
	});
});  