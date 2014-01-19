 $(document).ready(function() {
      $("#search").click(function() // onclick event fired
     {
	 
	var value= $("#data").val();
	
	if(value) {
	  $.get('http://gmatrix.webege.com/search_students.php?searchData='+value, function(returnData) {
		  
         if (returnData=="") {
                      
                       alert("Search term entered does not return any data.");
         } 
         else {
        	 			$('#searchData').html("<br>"+returnData);
                        $('#searchData').listview( "refresh" );
                        $('#searchData').trigger( "updatelayout" );
         }
      });
      }
      else {
    	  		alert("Please enter the search term");
                $('#searchData').html("");
                $('#searchData').listview( "refresh" );
                $('#searchData').trigger( "updatelayout" );
  
    
     } 
    
	 
	 
	 
  });
  
    });