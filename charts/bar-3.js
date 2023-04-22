function barOption3() {
  const data1 = [320, 302, 301, 334, 390];
  const data2 = [120, 132, 101, 134, 90];
  const data3 = [120, 132, 101, 134, 90];

  const intervalY1 = Math.ceil(Math.max(...data1) / 6) || 1;
  const intervalY2 = Math.ceil(Math.max(...data3) / 6) || 1;

  const option = {
    tooltip: {},
    legend: {
      top: 10,
      right: 20,
      textStyle: {
        color: "#ffffff",
        fontSize: 14,
      },
    },
    grid: {
      top: 65,
      right: 30,
      left: 30,
      bottom: 30,
      containLabel: true,
    },
    xAxis: {
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#ffffff",
      },
      data: ["一分公司", "二分公司", "三分公司", "四分公司", "五分公司"],
    },
    yAxis: [
      {
        name: "单位：单",
        nameTextStyle: {
          color: "#ffffff",
        },
        axisLabel: {
          color: "#ffffff",
        },
        splitLine: {
          lineStyle: { type: "dashed", color: "#23a3c3" },
        },

        min: 0,
        max: intervalY1 * 6,
        splitNumber: 6,
        interval: intervalY1,
      },
      {
        name: "单位：%",
        nameTextStyle: {
          color: "#ffffff",
        },
        axisLabel: {
          color: "#ffffff",
        },
        splitLine: {
          lineStyle: { type: "dashed", color: "#23a3c3" },
        },

        min: 0,
        max: intervalY2 * 6,
        splitNumber: 6,
        interval: intervalY2,
      },
    ],
    series: [
      {
        name: "计划",
        type: "bar",
        showBackground: true,
        data: data1,
        tooltip: {
          show: false,
        },
        color: {
          type: "linear",
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#219dfe",
            },
            {
              offset: 1,
              color: "#68dfcf",
            },
          ],
        },
      },
      {
        name: "非计划",
        type: "bar",
        showBackground: true,
        data: data2,
        tooltip: {
          show: false,
        },
        color: {
          type: "linear",
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#f3d232",
            },
            {
              offset: 1,
              color: "#f2ef47",
            },
          ],
        },
      },
      {
        name: "完成率",
        type: "line",
        smooth: true,
        yAxisIndex: 1,
        color: ["#2088f2"],
        data: data3,
        tooltip: {
          trigger: "item",
          backgroundColor: "#228cf9",
          borderWidth: 0,
          textStyle: {
            color: "#ffffff",
            fontSize: 18,
          },
          formatter(params) {
            return `${params.data.toString()}%`;
          },
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 166, 255, 1)",
              },
              {
                offset: 1,
                color: "rgba(0, 166, 255, .4)",
              },
            ],
            false
          ),
        },
        symbolSize: 14,
      },
    ],
  };
  return option;
}
