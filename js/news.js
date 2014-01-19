$(document).ready(function()
 {
	$.get("http://gmatrix.webege.com/news.php",{},function(json)
	{
		var mArray;
	    mArray = jQuery.parseJSON(json);
	    html="";
	    for(i=0;i<mArray.length;i++)
	    {
	    //	mArray[i].id mArray[i].title mArray[i].content mArray[i].author mArray[i].timestamp
	    	html+=	"<li><a href='view_news.html?id="+mArray[i].id+"' data-rel='dialog' rel='external'>"+
	    			//"<img src='../_assets/img/album-bb.jpg'>"+
	    			"<h2>"+mArray[i].title+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posted : "+mArray[i].timestamp+"</h2>"+
	    			"<p>"+mArray[i].content+"</p></a></li>";
	    }
	    
	    $('#list').html(html);
	    $('#list').listview( "refresh" );
        $('#list').trigger( "updatelayout" );
	});
	
 });