$.get('http://gmatrix.webege.com/view_exams.php?user_id='+window.localStorage["user"], function(json) {
         if (!json) {
                       
                        $('#searchData').html('<p style="padding:5px;">There are no Exams created by you.</p>');
         } 
         else {
        	 var html="";
        		var mArray;
    		    mArray = jQuery.parseJSON(json);
    		    
    		    for(i=0;i<mArray.length;i++)
    		    {
    		    	html+="<li><a href='exam_grades.html?e_id="+mArray[i].e_id +"&c_id="+mArray[i].course_id+"&total="+mArray[i].total_marks+"' data-transition='none' data-rel='dialog' rel='external'>"+mArray[i].course_name+" - " + mArray[i].e_name+"</a></li>";
    		    }
    		    $('#searchData').html(html);
                $('#searchData').listview( "refresh" );
                $('#searchData').trigger( "updatelayout" );
         }
      });