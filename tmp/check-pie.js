var colorList = ["#099D58", "#00C9FF", "#F87F01", "#FFFA12", "#ff5c7a"];

const optionCheckPie = {
  backgroundColor: "#051f44",
  series: [
    {
      // 波浪求
      type: "liquidFill",
      radius: "38%",
      data: [
        0.6,
        {
          value: 0.6,
          direction: "left", //波浪方向
        },
      ], // data个数代表波浪数
      backgroundStyle: {
        color: "transparent", // 球体本景色
      },
      amplitude: "6%", //波浪的振幅
      color: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: "#6CDEFC",
            },
            {
              offset: 0,
              color: "#429BF7",
            },
          ],
          globalCoord: false,
        },
      ],
      label: {
        formatter: "60%",
        fontSize: 20,
        color: "#fff",
      },
      outline: {
        show: false,
      },
    },
    {
      // 波浪求border
      type: "pie",
      radius: ["38%", "36%"],
      data: [100],
      silent: true,
      label: {
        show: false,
      },
      itemStyle: {
        color: "#38D2FF",
      },
    },
    {
      // 波浪求底色
      type: "pie",
      radius: "36%",
      silent: true,
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
    // 数据层
    {
      type: "pie",
      silent: true,
      radius: ["40%", "50%"],
      itemStyle: {
        opacity: 0.5,
        color: function (params) {
          return colorList[params.dataIndex];
        },
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
    {
      type: "pie",
      radius: ["50%", "55%"],
      itemStyle: {
        color: function (params) {
          return colorList[params.dataIndex];
        },
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
