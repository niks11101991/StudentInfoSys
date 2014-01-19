	$.get("http://gmatrix.webege.com/get_role.php",{user_id:window.localStorage["user"]},function(json)
	{
	alert(json);
		var mArray = jQuery.parseJSON(json);
		if(mArray.role === 'Teacher')
		{
		window.open("teacherhp.html","_self");
		}
		if(mArray.role === 'Administrative')
		{
		window.open("employeehp.html","_self");
		}
	});	