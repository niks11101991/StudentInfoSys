 $.get("http://gmatrix.webege.com/courses_taken.php",{user:'pkadam'},function(json)
                 {
	 				var mArray = jQuery.parseJSON(json);
	 				var html="";
	 				
	 				for(i=0;i<mArray.length;i++)
	 				{
	 					html+="<option id = "+mArray[i].course_id+" value="+mArray[i].course_id+">"+mArray[i].course_name+"</option>";
	 				}	
	 				
	 				$('#courses').append(html);
                 });
 $(document).ready(function()
		 {
		 	
		 	$( "#courses" ).change(function() {
		 		var e = document.getElementById("courses");
		 		var strUser = e.options[e.selectedIndex].value;
		 		var course_name = e.options[e.selectedIndex].text;
		 		
		 		alert(strUser);
		 		$.get("http://gmatrix.webege.com/view_my_marks.php",{user:'pkadam',course_id:strUser},function(json)
		                 {
			 				var mArray = jQuery.parseJSON(json);
			 				alert(json);
			 				var e_name = [];
			 				var marks_obtained = [];
			 				
			 				for(i=0;i<mArray.length;i++)
			 				{
			 					e_name.push(mArray[i].e_name + "<br>" + mArray[i].total_marks);
			 					marks_obtained.push(parseInt(mArray[i].marks_obtained));
			 				
			 				}
			 				
			 				$(function () {
			 			        $('#container').highcharts({
			 			            chart: {
			 			                type: 'bar'
			 			            },
			 			            title: {
			 			                text: 'My ' +course_name + ' Marks'
			 			            },
			 			            xAxis: {
			 			                categories: e_name,
			 			                title: {
			 			                    text: null
			 			                }
			 			            },
			 			            yAxis: {
			 			                min: 0,
			 			                title: {
			 			                    text: 'Marks',
			 			                    align: 'high'
			 			                },
			 			                labels: {
			 			                    overflow: 'center'
			 			                }
			 			            },
			 			            plotOptions: {
			 			                bar: {
			 			                    dataLabels: {
			 			                        enabled: true
			 			                    }
			 			                }
			 			            },
			 			            legend: {
			 			                layout: 'vertical',
			 			                align: 'right',
			 			                verticalAlign: 'top',
			 			                x: -40,
			 			                y: 100,
			 			                floating: true,
			 			                borderWidth: 1,
			 			                backgroundColor: '#FFFFFF',
			 			                shadow: true
			 			            },
			 			            credits: {
			 			                enabled: false
			 			            },
			 			            series: [{ name: 'Marks Obtained',
			 			                		data: marks_obtained
			 			            		}]
			 			        });
			 			    });
			 			    



			 				
		                 });
		 		
		 	});
		 });  