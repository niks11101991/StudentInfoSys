function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
var c_id=getURLParameter('c_id');
var student_id=getURLParameter('student_id');


$.get("http://gmatrix.webege.com/individual_marks.php",{c_id:c_id,student_id:student_id},function(json)
{
	 var mArray = jQuery.parseJSON(json);
	 var html="";
	 html = "<h3>Name : " + mArray[0].lname + " " + mArray[0].fname + " " + mArray[0].mname + "</h3><br><table cellpadding=5 width=100%><tr><th>Exam</th><th>Marks</th><th>Total</th></tr>";				
	 for(i=0;i<mArray.length;i++)
	 {
	 	html+="<tr><td><center>"+mArray[i].e_name+"</center></td><td><center>"+mArray[i].marks_obtained+"</center></td><td><center>"+mArray[i].total_marks+"</center></td></tr>";
	 }	
	 html+="</table>";
	 alert(html);
	 $('#toappend').append(html);
	 $('#toappend').trigger("create");
	 
});