function showDetail(){
	console.log("gggg"); 
}
var config = {
	type: "line",
	data : {
		labels : ["17/07/29","17/07/30","17/07/31","17/08/01","17/08/02","17/08/03"],
		datasets : [{
			label: "dataset",
			data : [11,32,12,43,5,23],
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			fill: false,
			pointRadius: 15,
			pointHoverRadius: 10,
		}],
	},
	options: {
		responsive: true,
		legend: {//图例样式！！！！！没找到！！！
			position: 'bottom',
			labels: {
				fontColor: "red"
			}
		},
		hover: {//全局hover，需要单点的hover状态
			onHover: showDetail
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: "Date"
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: "Number"
				}
			}]
		},
		title: {
			display: true,
			text: "Chart"
		}
	}
}
	
/*
//定义图表的参数   
var options = {    
    scaleStartValue :null,     // Y 轴的起始值
    scaleLineColor : "rgba(0,0,0,.1)",    // Y/X轴的颜色
    scaleLineWidth : 1,        // X,Y轴的宽度
    scaleShowLabels : true,    // 刻度是否显示标签, 即Y轴上是否显示文字   
    scaleLabel : "<%=value%>", // Y轴上的刻度,即文字  
    scaleFontFamily : "'Arial'",  // 字体  
    scaleFontSize : 20,        // 文字大小 
    scaleFontStyle : "normal",  // 文字样式  
    scaleFontColor : "#666",    // 文字颜色  
    scaleShowGridLines : false,   // 是否显示网格  
    scaleGridLineColor : "rgba(0,0,0,.05)",   // 网格颜色
    scaleGridLineWidth : 2,      // 网格宽度  
    bezierCurve : false,         // 是否使用贝塞尔曲线? 即:线条是否弯曲     
    pointDot : true,             // 是否显示点数  
    pointDotRadius : 8,          // 圆点的大小  
    pointDotStrokeWidth : 1,     // 圆点的笔触宽度, 即:圆点外层边框大小 
    datasetStroke : true,        // 数据集行程
    datasetStrokeWidth : 2,      // 线条的宽度, 即:数据集
    datasetFill : false,         // 是否填充数据集 
    animation : true,            // 是否执行动画  
    animationSteps : 60,          // 动画的时间   
    animationEasing : "easeOutQuart",    // 动画的特效   
    onAnimationComplete : null    // 动画完成时的执行函数   
}*/
var ctx = document.getElementById("myChart").getContext("2d");
window.myline = new Chart(ctx,config);