function pieOption3() {
  const center = ["30%", "55%"];

  const option = {
    backgroundColor: "#051f44",
    tooltip: {
      show: true,
      trigger: "item",
      position: ["54%", "27%"],
      backgroundColor: "#0c2f68",
      borderWidth: 0,
      textStyle: {
        color: "#ffffff",
        fontSize: 18,
      },
      formatter({ data }) {
        return `
          <div style="font-size: 14px">
            ${data.name}
            <div style="height: 2px; background-color: #ffffff; margin: 5px 0;"></div>
            <div style="display: flex; width: 160px">
              <div style="width: 100px">计划总数：</div><div style="flex: 1; text-align: right; color: #1db4de">100</div>
            </div>
            <div style="display: flex;">
              <div style="width: 100px">已完成：</div><div style="flex: 1; text-align: right; color: #1db4de">40</div>
            </div>
            <div style="display: flex;">
              <div style="width: 100px">未完成：</div><div style="flex: 1; text-align: right; color: #1db4de">60</div>
            </div>
            <div style="display: flex;">
              <div style="width: 100px">执行率：</div><div style="flex: 1; text-align: right; color: #1db4de">40%</div>
            </div>
          </div>
        `;
      },
    },
    legend: [
      {
        top: "0",
        right: "5%",
        textStyle: {
          color: "#ffffff",
          fontSize: 14,
        },
        data: ["一分公司", "二分公司", "三分公司", "四分公司"],
      },
      {
        top: "10%",
        right: "5%",
        textStyle: {
          color: "#ffffff",
          fontSize: 14,
        },
        data: ["五分公司"],
      },
    ],
    series: [
      {
        // 波浪求
        type: "liquidFill",
        radius: "38%",
        center,
        silent: true,
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
        // 波浪求底色
        type: "pie",
        radius: "38%",
        center,
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
      {
        // 波浪求border
        type: "pie",
        radius: ["42%", "45%"],
        center,
        data: [100],
        silent: true,
        label: {
          show: false,
        },
        itemStyle: {
          color: "#38D2FF",
        },
      },
      // 数据层
      {
        type: "pie",
        radius: ["50%", "60%"],
        center,
        itemStyle: {
          borderColor: "#051f44",
          borderWidth: 3,
        },
        label: {
          show: false,
        },
        data: [
          { value: 1048, name: "一分公司", color: "#099D58" },
          { value: 735, name: "二分公司", color: "#00C9FF" },
          { value: 580, name: "三分公司", color: "#F87F01" },
          { value: 484, name: "四分公司", color: "#FFFA12" },
          { value: 300, name: "五分公司", color: "#ff5c7a" },
        ],
      },
    ],
  };

  return option;
}
