function barOption3() {
  const option = {
    legend: {
      right: "5%",
      textStyle: {
        color: "#ffffff",
        fontSize: 14,
      },
    },
    grid: {
      top: "22%",
      right: "10%",
      left: "3%",
      bottom: "3%",
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
        axisLabel: {
          color: "#ffffff",
        },
        splitLine: {
          lineStyle: { type: "dashed", color: "#23a3c3" },
        },
      },
      {
        name: "单位：%",
        axisLabel: {
          color: "#ffffff",
        },
        splitLine: {
          lineStyle: { type: "dashed", color: "#23a3c3" },
        },
      },
    ],
    series: [
      {
        name: "计划",
        type: "bar",
        showBackground: true,
        data: [320, 302, 301, 334, 390],
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
        data: [120, 132, 101, 134, 90],
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
        color: ["#2088f2"],
        data: [120, 132, 101, 134, 90],
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
      },
    ],
  };
  return option;
}
