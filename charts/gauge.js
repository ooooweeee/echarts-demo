function gaugeOption(data) {
  function renderOut() {
    return [
      {
        type: "bar",
        data: [30],
        coordinateSystem: "polar",
        barMaxWidth: 10,
        z: 2,
        roundCap: true,
        barGap: "-100%",
        color: {
          type: "linear",
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#f8c425",
            },
            {
              offset: 1,
              color: "#ec7545",
            },
          ],
        },
      },
      {
        type: "bar",
        data: [100],
        z: 1,
        silent: true,
        coordinateSystem: "polar",
        barMaxWidth: 10,
        roundCap: true,
        barGap: "-100%",
        color: "#133479",
      },
    ];
  }
  const center = ["50%", "70%"];
  const baseSeriesOption = {
    type: "gauge",
    center,
    startAngle: 180,
    endAngle: 0,
    clockwise: true,
    axisLabel: {
      show: false,
    },
    pointer: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    detail: {
      show: false,
    },
  };

  return {
    backgroundColor: "#051f44",
    angleAxis: {
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      min: 0,
      max: (100 * 360) / 176,
      startAngle: 178,
    },
    radiusAxis: {
      type: "category",
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      z: 10,
    },
    polar: {
      radius: "220%",
      center,
    },

    series: [
      ...renderOut(),
      {
        ...baseSeriesOption,
        radius: "100%",
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [
                80 / 100,
                {
                  x: 1,
                  y: 1,
                  x1: 0,
                  y1: 0,
                  colorStops: [
                    {
                      offset: 1,
                      color: "#4663ff",
                    },
                    {
                      offset: 0,
                      color: "#0ecbff",
                    },
                  ],
                },
              ],
              [1, "#133479"],
            ],
          },
        },
        axisTick: {
          show: true,
          splitNumber: 3,
          distance: -20,
          lineStyle: {
            color: "#001b3e",
            width: 3,
          },
          length: 20,
        },
      },
      {
        ...baseSeriesOption,

        radius: "78%",
        z: 99,
        splitNumber: 5,
        axisLine: {
          lineStyle: {
            width: 24,
            color: [
              [
                40 / 100,
                {
                  x: 1,
                  y: 1,
                  x1: 0,
                  y1: 0,
                  colorStops: [
                    {
                      offset: 1,
                      color: "#96e060",
                    },
                    {
                      offset: 0,
                      color: "#13e3a8",
                    },
                  ],
                },
              ],
              [1, "#133479"],
            ],
          },
        },
        pointer: {
          show: true,
          width: 5,
          itemStyle: {
            color: "#fe6b78",
          },
        },
        axisLabel: {
          distance: 15,
          color: "#ffffff",
          fontSize: 10,
        },
        detail: {
          formatter(v) {
            return `${v}%`;
          },
          textStyle: {
            color: "#ffffff",
            fontSize: 22,
          },
          offsetCenter: [0, "40%"],
        },
        data: [40],
      },
    ],
  };
}
