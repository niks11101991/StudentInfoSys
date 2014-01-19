$(document).ready(function()
 {
	$("#submit").click(function()
	{
		$.get("http://gmatrix.webege.com/add_news.php",{title:$("#title").val(),content:$("#content").val(),author:window.localStorage["user"]},function(json)
		{
			alert("News Successfully Added");
			window.open("add_news.html");
		});
	});
 });