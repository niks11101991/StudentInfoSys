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
	 var strUser="";
	 $( "#courses" ).change(function() {
			var e = document.getElementById("courses");
			strUser = e.options[e.selectedIndex].value;
	 });
	$("#submit").click(function()
	{
		$.get("http://gmatrix.webege.com/create_exam.php",{e_name:$("#e_name").val(),e_marks:$("#e_marks").val(),cid:strUser},function(json)
		{
			alert("Exam Successfully Created");
			window.open("create.html");
		});
	});
 });