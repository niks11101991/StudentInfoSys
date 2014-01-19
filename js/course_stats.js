function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
var c_id=getURLParameter('c_id');
var c_name=getURLParameter('c_name');


$.get("http://gmatrix.webege.com/course_stats.php",{c_id:c_id},function(json)
        {
			var mArray = jQuery.parseJSON(json);

			var exams = [];
			var max1 = [];
			var min1 = [];
			var avg1 = [];
			var percent = [];
			alert(mArray[0].min1);
			for(i=0;i<mArray.length;i++)
			{
				exams.push(mArray[i].e_name +"<br>"+ mArray[i].total_marks);
				max1.push(parseInt(mArray[i].max1));
				min1.push(parseInt(mArray[i].min1));
				avg1.push(parseInt(mArray[i].avg1));
				percent.push(parseInt(mArray[i].max1)*100/parseInt(mArray[i].total_marks));
			}

$(function () {
    $('#container').highcharts({
        title: {
            text: c_name+' Exams Report',
            x: -20 //center
        },
        subtitle: {
            text: 'Course ID : ' + c_id,
            x: -20
        },
        xAxis: {
        	categories: exams
            
        },
        yAxis: {
          
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Maximum',
            data: max1
        }, {
            name: 'Average',
            data: avg1
        }, {
            name: 'Minimum',
            data: min1
        }, {
            name: 'Topper`s %',
            data: percent
        }]
    });
    });
});