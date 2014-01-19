$(document).ready(function()
 {
	$("#submit").click(function()
	        {
	    	 $.get("http://gmatrix.webege.com/add_details.php",{admsnno:$("#admsnno").val(),pass:$("#pass").val(),admsndate:$("#admsndate").val(),fname:$("#fname").val(),mname:$("#mname").val(),lname:$("#lname").val(),course:$("#course").val(),dob:$("#dob").val(),gender:$("#gender").val(),bgrp:$("#bgrp").val(),bplace:$("#bplace").val(),nat:$("#nat").val(),catgry:$("#catgry").val(),relgn:$("#relgn").val(),addr:$("#addr").val(),city:$("#city").val(),state:$("#state").val(),pin:$("#pin").val(),country:$("#country").val(),mob:$("#mob").val(),email:$("#email").val()},function(json)
                 {
    		 alert(json);
    		 		alert("Successfully Added");
                    window.open("/employee/add.html");
                 });
        }
        
    );
 });