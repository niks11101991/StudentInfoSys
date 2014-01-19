 $(document).ready(function() {
      $("#search").click(function() // onclick event fired
     {
		
		var admsndate=$("#admsndate").val();
		var course=$("#course").val();
		var dob=$("#dob").val();
		var gender=$("#gender").val();
		var bgrp=$("#bgrp").val();
		var nat=$("#nat").val();
		var catgry=$("#catgry").val();
		
		if(admsndate=="Select admission year")
		{admsndate="";}
		if(bgrp=="Select blood group")
		{bgrp="";}
		if(course=="Select a course")
		{course="";}
		if(dob=="Select birth year")
		{dob="";}
		if(catgry=="Select category")
		{catgry="";}
		if(gender=="All")
		{gender="";}
		
                $('#searchData').html("");
                $('#searchData').listview( "refresh" );
                $('#searchData').trigger( "updatelayout" );

		
		$.get('http://gmatrix.webege.com/adv_search-data.php?admsndate='+admsndate+'&bgrp='+bgrp+'&course='+course+'&dob='+dob+'&catgry='+catgry+'&nat='+nat+'&gender='+gender, function(returnData) {
         if (!returnData) {
                       
                        $('#searchData').html('<p style="padding:5px;">Search term entered does not return any data.</p>');
                        $.mobile.silentScroll(1000);
         } 
         else {
                        $('#searchData').html("<br>"+returnData);
                        $('#searchData').listview( "refresh" );
                        $('#searchData').trigger( "updatelayout" );
                        $.mobile.silentScroll(1000);
         }
      });
	});
  
    });