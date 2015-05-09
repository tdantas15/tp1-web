var chart = AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "theme": "light",
  "path": "amcharts",
  "dataProvider": [ {
    "ano": "2010",
    "projetos": 120
  }, {
    "ano": "2011",
    "projetos": 135
  }, {
    "ano": "2012",
    "projetos": 30
  }, {
    "ano": "2013",
    "projetos": 80
  }, {
    "ano": "2014",
    "projetos": 45
  }, {
    "ano": "2015",
    "projetos": 10
  }],
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "projetos"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "ano",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  },
  "export": {
    "enabled": true
  }

} );
