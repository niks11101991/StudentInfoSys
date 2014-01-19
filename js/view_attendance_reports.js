	function getURLParameter(name) {
  	  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
	}
	var cid=getURLParameter('cid');
	$.get("http://gmatrix.webege.com/view_attendance_report.php",{course_id:cid},function(json)
     {
		var temp = json.split("&&");
		$("#lecno").text(temp[0]);
		$("#lecno").trigger( "create" );

			var mArray = jQuery.parseJSON(temp[1]);
			var html="";
			for(i=0;i<mArray.length;i++)
			{
			var percent = mArray[i].count1*100/temp[0];
				html += "<div class=ui-block-a style='height:25px;'><center> "+mArray[i].lname + " " + mArray[i].fname + " " + mArray[i].mname+"</center></div>" +
			     "<div class=ui-block-b style='height:25px'><center>"+mArray[i].count1+"</center></div>" +
			     "<div class=ui-block-c style='height:25px'><center>"+percent+" %</center></div><hr>";
			}

	    $("#attendance").append (html);
	//    $("#attendance").trigger( "create" );
     });
		   