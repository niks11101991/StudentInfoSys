function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
var id=getURLParameter('id');
$.get("http://gmatrix.webege.com/view_news.php",{id:id},function(json)
		{
			var mArray;
		    mArray = jQuery.parseJSON(json);
		    
		    $('#title').text(mArray[0].title);
		    $('#author').text(mArray[0].author);
		    $('#time').text(mArray[0].timestamp);
		    $('#content1').text(mArray[0].content);
		    
		    
		    
		});
		