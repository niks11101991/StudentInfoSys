$.get("http://gmatrix.webege.com/individual_attendance.php",{student_id:window.localStorage["user"]},function(json)
        {
			var mArray = jQuery.parseJSON(json);
			
			var courses = [];
			var days_present = [];
			var days_absent = [];
			for(i=0;i<mArray.length;i++)
			{
				courses.push(mArray[i].course_name);
				days_present.push(parseInt(mArray[i].count1));
				days_absent.push(parseInt(mArray[i].total_lectures)-parseInt(mArray[i].count1));
			}

			$(function () {
		        $('#container').highcharts({
		            chart: {
		                type: 'bar'
		            },
		            title: {
		                text: 'My Attendance'
		            },
		            xAxis: {
		                categories: courses
		            },
		            yAxis: {
		                min: 0,
		                title: {
		                    text: 'Total Lectures'
		                }
		            },
		            legend: {
		                backgroundColor: '#FFFFFF',
		                reversed: true
		            },
		            plotOptions: {
		                series: {
		                    stacking: 'normal'
		                }
		            },
		                series: [{
		                name: 'Number of days present',
		                data: days_present
		            }, {
		                name: 'Number of days absent',
		                data: days_absent
		            }]
		        });
		    });
});