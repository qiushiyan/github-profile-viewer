import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
ReactFC.fcRoot(FusionCharts, Chart);

const StarredRepos = ({ data }) => {
  const chartConfigs = {
    type: 'column2d', // The chart type
    width: '100%', // Width of the chart
    height: '350', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Most Starred Repos',
        yAxisName: 'Stars',
        yAxisNameFontSize: 16,
        xAxisName: null,
        xAxisNameFontSize: 16,
        showCanvasBorder: 0,
        showAlternateHGridColor: 0,
        usePlotGradientColor: 0,
        valueFontSize: 16,
        placeValuesInside: 0,
        divLineColor: "#102a42",
        divLineAlpha: 15,
        captionFontColor: "#102a42",
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: "Roboto",
        baseFont: "Open Sans",
        baseFontSize: 12,
        baseFontColor: "#617d98",
        smartLineColor: "#617d98",
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        bgColor: "#FFFFFF",
        showBorder: 0,
        "toolTipBorderColor": "#666666",
        "toolTipBgColor": "#efefef",
        "toolTipBgAlpha": "80",
        plotToolText: "<div id='divTable'><table id='dataTable'><tr class=''><th>Name</th><td>$label</td></tr><tr><th>Forks</th><td>$value</td></tr>  </table></div>"
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default StarredRepos;