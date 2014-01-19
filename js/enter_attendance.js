	function getURLParameter(name) {
  	  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
	}
	var cid=getURLParameter('cid');
	$( '#home' ).live( 'pagebeforecreate',function(event){
		$('#course').text(cid);
	$.get("http://gmatrix.webege.com/course_specific_students.php",{course_id:cid},function(json)
     {
			var mArray = jQuery.parseJSON(json);
			var html="";
			html += "<div data-role=controlgroup>";
			for(i=0;i<mArray.length;i++)
			{
				html += "<input type='checkbox' name='"+mArray[i].student_id+"' id='"+mArray[i].student_id+"' value='"+mArray[i].student_id+"'class=custom />" +
						"<label for='"+mArray[i].student_id+"'>"+mArray[i].lname+" "+mArray[i].fname+" "+mArray[i].mname+" </label>";
			}
			html+="</div>";
	   
	    $("#toappend").append (html);
	    $("#toappend").trigger( "create" );
     });
	});
$(document).ready(function() {	
	$("#update").click(function() // onclick event fired
	{
	var selected = new Array();
	$("input:checkbox:checked").each(function()
			{
			    // add $(this).val() to your array
		 		selected.push($(this).val());
			});
	var d = $('#date').val().split("/");
	var new_date = d[2]+"-"+d[1]+"-"+d[0];
	 var jsonS = JSON.stringify(selected);
	 $.get("http://gmatrix.webege.com/update_attendance.php",{jsonS:jsonS,date:new_date,cid:cid},function(json)
	{
		 if(json === "exists")
		 {
			alert("Data was entered previously for this date and course. Please select different date"); 
		 }
		 else
		 {
			 alert("Data is successfully updated");
		 }
		
	});
	}); 
});		   