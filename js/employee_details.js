$(document).ready(function()
 {
	$.get("http://gmatrix.webege.com/employee_details.php",{user:window.localStorage["user"]},function(json)
	{
		var mArray;
	    mArray = jQuery.parseJSON(json);
	    
	    $("#name").text(mArray.f_name+" " + mArray.l_name);
        $("#email").text(mArray.email);
        $("#dept").text(mArray.dept);
        $("#pos").text(mArray.position);

	});
	
 });