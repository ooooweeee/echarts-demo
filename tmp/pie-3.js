const option = {
  backgroundColor: "#0F141B",
  polar: {},
  angleAxis: {
    show: false,
  },
  radiusAxis: {
    show: false,
  },
  series: [
    {
      type: "pie",
      radius: "40%",
      animation: false,
      labelLine: {
        show: false,
      },
      itemStyle: {
        color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
          {
            offset: 1,
            color: "rgba(50,171,241, 0)",
          },
          {
            offset: 0.5,
            color: "rgba(50,171,241, .4)",
          },
          {
            offset: 0,
            color: "rgba(55,70,130, 0)",
          },
        ]),
        shadowBlur: 60,
      },
      data: [100],
    },
  ],
};
