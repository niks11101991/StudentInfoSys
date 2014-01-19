function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
var c_id=getURLParameter('c_id');


$.get("http://gmatrix.webege.com/course_specific_students.php",{course_id:c_id},function(json)
	     {
				var mArray = jQuery.parseJSON(json);
				var html="";
				for(i=0;i<mArray.length;i++)
				{
					html += "<li><a data-rel='dialog' rel='external' href = marks.html?student_id=" +mArray[i].student_id +"&c_id=" + c_id + ">"+mArray[i].lname +" " + mArray[i].fname + " " + mArray[i].mname +"</a></li>"
				}
		   
			   $('#toappend').html(html);
	           $('#toappend').listview( "refresh" );
	           $('#toappend').trigger( "updatelayout" );	           

	     });
