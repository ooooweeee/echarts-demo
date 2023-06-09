function mapOption() {
  return {
    geo: [
      {
        map: "simp-china",
        aspectScale: 1.2,
        layoutCenter: ["50%", "50%"],
        layoutSize: "120%",
        emphasis: {
          label: {
            show: false,
          },
        },
        itemStyle: {
          borderColor: "#ffffff",
          borderWidth: 1,
          areaColor: "#1ebfff",
          shadowColor: "rgba(29, 122, 248, 1)",
          shadowOffsetY: 10,
          opacity: 0.5,
        },
      },
    ],
    series: [
      {
        type: "effectScatter",
        coordinateSystem: "geo",
        data: [
          {
            name: "合肥",
            value: [116.5, 33.5],
          },
        ],
        symbolSize: 10,
        rippleEffect: {
          brushType: "stroke",
        },
        itemStyle: {
          color: "#fcff00",
        },
      },
      {
        type: "effectScatter",
        coordinateSystem: "geo",
        data: [
          {
            name: "上海",
            value: [121, 30.5],
          },
        ],
        symbolSize: 10,
        rippleEffect: {
          brushType: "stroke",
        },
        itemStyle: {
          color: "#ff0000",
        },
      },
      {
        type: "lines",
        lineStyle: {
          color: "#00c7ff",
          width: 3,
          curveness: 0.5,
          type: "dashed",
        },
        data: [
          {
            coords: [
              [116.5, 33.5],
              [121, 30.5],
            ],
          },
        ],
      },
    ],
  };
}
