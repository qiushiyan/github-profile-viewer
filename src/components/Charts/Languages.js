import React from 'react';
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";
// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);



const Languages = ({ data }) => {
  const chartConfigs = {
    type: 'pie2d',
    width: "100%",
    height: 350,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: "Most Used Languages",
        captionFontColor: "#102a42",
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: "Roboto",
        baseFont: "Open Sans",
        baseFontSize: 16,
        baseFontColor: "#617d98",
        smartLineColor: "#617d98",
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
        bgColor: "#FFFFFF",
        showBorder: 0,
        decimals: 0,
        pieRadius: "45%",
        "toolTipBorderColor": "#666666",
        "toolTipBgColor": "#efefef",
        "toolTipBgAlpha": "80",
        plotToolText: "<div id='divTable'><table id='dataTable'><tr class=''><th>Language</th><td>$label</td></tr><tr><th>Counts</th><td>$value</td></tr></table></div>"
      },
      data
    }
  };
  return (
    <ReactFC {...chartConfigs} />
  )
};

export default Languages;
