const option = {
  backgroundColor: "#031a40",
  series: [
    {
      type: "liquidFill",
      radius: "70%",
      data: [
        0.6,
        {
          value: 0.6,
          direction: "left", //波浪方向
        },
      ], // data个数代表波浪数
      backgroundStyle: {
        color: "#429BF7", // 球体本景色
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
        textStyle: {
          fontSize: 100,
          color: "#fff",
        },
      },
      outline: {
        show: false,
      },
    },
  ],
};
