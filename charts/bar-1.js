function barOption1() {
  const option = {
    grid: {
      top: "12%",
      right: "10%",
      left: "3%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        color: "#ffffff",
      },
      splitLine: {
        lineStyle: { type: "dashed", color: "#23a3c3" },
      },
    },
    yAxis: [
      {
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#ffffff",
        },
        data: ["五分公司", "四分公司", "三分公司", "二分公司", "一分公司"],
      },
      {
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#65dbcd",
        },
        data: [79, 80, 82, 98, 98],
      },
    ],
    series: [
      {
        type: "bar",
        barWidth: "80%",
        showBackground: true,
        data: [79, 80, 82, 98, 98],
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
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
    ],
  };

  return option;
}
