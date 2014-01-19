$(document).ready(function()
 {
	window.localStorage["user"]="";
	$("#submit").click(function()
		{
			if($("#user").val()=="" || $("#pass").val()=="")
			{
				alert("Please enter username and password");
				return false;
			}
			else
			{
				var uname = $("#user").val();
				var pass = $("#pass").val();
				var type = $("#type").val();
				
					$.get("http://gmatrix.webege.com/login.php",{username:uname,password:pass,type:type},function(json)
					{
						if(json=="success Teacher" &&type =="employee")
					    {
							window.localStorage["user"]=uname;
                        	window.open("employee/teacherhp.html","_self");
					    }
						else if(json=="success HOD" &&type =="employee")
						{
							window.localStorage["user"]=uname;
	                        window.open("employee/HODhp.html","_self");
						}
						else if(json=="success Administrative" &&type =="employee")
					    {
							window.localStorage["user"]=uname;
                        	window.open("employee/employeehp.html","_self");
					    }
						else if(json=="success" && type =="students")
						{
							window.localStorage["user"]=uname;
							window.open("student/studenthp.html","_self");
						}
						else if(json=="success" &&type =="admin")
						    {
							window.localStorage["user"]=uname;
	                        window.open("adminhp.html","_self");
						    }
						else if(json=="error")
						    {
						    alert("Wrong Username and Password!!");
						    }
						else
						    alert("Some problem encountered. Please try again!!");
					});
				return false;
			}
		}
	);
});
