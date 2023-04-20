function barOption2() {
  const option = {
    legend: {
      right: "5%",
      textStyle: {
        color: "#ffffff",
        fontSize: 14,
      },
    },
    grid: {
      top: "12%",
      right: "5%",
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
      },
    ],
    series: [
      {
        name: "工人数",
        type: "bar",
        stack: "total",
        barWidth: "80%",
        showBackground: true,
        label: {
          show: true,
        },
        data: [320, 302, 301, 334, 390],
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
      {
        name: "用工工时",
        type: "bar",
        stack: "total",
        barWidth: "80%",
        showBackground: true,
        label: {
          show: true,
        },
        data: [120, 132, 101, 134, 90],
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
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
        name: "工作负荷",
        type: "bar",
        stack: "total",
        barWidth: "80%",
        showBackground: true,
        label: {
          show: true,
        },
        data: [220, 182, 191, 234, 290],
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#fc5491",
            },
            {
              offset: 1,
              color: "#f86e66",
            },
          ],
        },
      },
    ],
  };
  return option;
}
