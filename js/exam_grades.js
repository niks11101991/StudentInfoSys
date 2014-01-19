function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
var e_id=getURLParameter('e_id');
var c_id=getURLParameter('c_id');
var total=getURLParameter('total');
$('#total').text("Total : " + total + " marks");

$.get("http://gmatrix.webege.com/course_specific_students.php",{course_id:c_id},function(json)
	     {
				var mArray = jQuery.parseJSON(json);
				var html="<tr><th>Student Name</th><th>Marks Obtained</th><th>Percentage</th><th>Grade</th>";
				for(i=0;i<mArray.length;i++)
				{
					html += "<tr><td>"+mArray[i].lname+" " + mArray[i].fname + " " + mArray[i].mname+"</td><td><input type='number' name='exam_grades' id='" + mArray[i].student_id + "' onKeyUp = 'func(this);'></td><td><span id='"+mArray[i].student_id+"_percent'></span></td><td><center><span id='"+mArray[i].student_id+"_grade'></span></center></td><tr>";
				}
				$('#toappend').html(html);
 			   	$("#toappend").trigger( "create" );
	     });	
	    		 
function func(ele)
{	
	var id = ele.id;
	var marks = ele.value;
	if(parseInt(marks)>parseInt(total))
	{
		alert("Marks cannot be greater than Total Marks of Exam");
		ele.value="";
		$("#"+id+"_percent").text("");
		$("#"+id+"_grade").text("");

	}
	else
	{
		var percent=marks*100/total;
		$("#"+id+"_percent").text(percent + " %");
		if(percent>=90)
		{
			$("#"+id+"_grade").text("A+");
		}
		else if(percent>=80)
		{
			$("#"+id+"_grade").text("A");
		}
		else if(percent>=75)
		{
			$("#"+id+"_grade").text("A-");
		}
		else if(percent>=70)
		{
			$("#"+id+"_grade").text("B+");
		}
		else if(percent>=65)
		{
			$("#"+id+"_grade").text("B");
		}
		else if(percent>=60)
		{
			$("#"+id+"_grade").text("B-");
		}
		else if(percent>=55)
		{
			$("#"+id+"_grade").text("C+");
		}
		else if(percent>=50)
		{
			$("#"+id+"_grade").text("C");
		}
		else if(percent>=45)
		{
			$("#"+id+"_grade").text("C-");
		}
		else
		{
			$("#"+id+"_grade").text("F");
		}
		
	}
}

$(document).ready(function() {	
	$("#update").click(function(){
		var selected = new Array();
		$("input:[name='exam_grades']").each(function()
				{
				    // add $(this).val() to your array
			 		selected.push($(this).attr('id') + " " + $(this).val());
				});
		 var jsonS = JSON.stringify(selected);
		 alert(jsonS);
		 $.get("http://gmatrix.webege.com/update_grades.php",{jsonS:jsonS,e_id:e_id},function(json)
		 {
			 alert(json);
			 window.open("enter_grades.html","_self");
		 });
	});
});
