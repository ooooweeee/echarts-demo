function barOption1(data) {
  const option = {
    grid: {
      top: "12%",
      right: "3%",
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
        data: data.map((item) => item.label),
      },
      {
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#65dbcd",
        },
        data: data.map((item) => item.value),
      },
    ],
    series: [
      {
        type: "bar",
        barWidth: "80%",
        showBackground: true,
        data: data.map((item) => item.value),
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
