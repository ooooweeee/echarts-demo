function barOption3({ xValue, yLabels = [], yValues = [] } = {}) {
  function createyAxis(options) {
    function formatyValue(data, num = 5) {
      const interval = Math.ceil(Math.max(...data) / num) || 1;
      return {
        min: 0,
        max: interval * num,
        splitNumber: num,
        interval: interval,
      };
    }

    const tmp = {
      name: options.name,
      nameTextStyle: {
        color: "#ffffff",
      },
      axisLabel: {
        color: "#ffffff",
      },
      splitLine: {
        lineStyle: { type: "dashed", color: "#23a3c3" },
      },
      ...formatyValue(options.fusion.item, options.num),
    };

    return tmp;
  }

  function createSeries(type, options) {
    function createBar(options) {
      const [topColor, bottomColor] = options.color || [];
      return {
        type: "bar",
        stack: options.group,
        silent: true,
        color: bottomColor
          ? {
              type: "linear",
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: topColor,
                },
                {
                  offset: 1,
                  color: bottomColor,
                },
              ],
            }
          : topColor,
      };
    }

    function createLine(options) {
      return {
        type: "line",
        smooth: true,
        symbolSize: 10,
        color: options.color && options.color[0],

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
      };
    }

    const index = options.yLabels.findIndex((i) => i.key === options.labelKey);

    return {
      name: options.labelName,
      yAxisIndex: index === -1 ? 0 : index,
      data: options.data,
      showBackground: true,
      tooltip: {
        show: !!options.tip,
        trigger: "item",
        backgroundColor: "#228cf9",
        borderWidth: 0,
        textStyle: {
          color: "#ffffff",
          fontSize: 18,
        },
        formatter(params) {
          return `${params.data.toString()}%`;
        },
      },
      ...(() => {
        switch (type) {
          case "line":
            return createLine(options);
          default:
            return createBar(options);
        }
      })(),
    };
  }

  function formatData(datas) {
    return datas.reduce((result, current, index) => {
      const {
        group = "un-" + Date.now().toString() + index,
        data = [],
        labelKey,
      } = current;

      const { max = 0, item = [] } = result[group] || {};

      const tmpItem = new Array(Math.max(item.length, data.length))
        .fill(0)
        .reduce((r, _, i) => {
          return [...r, (item[i] || 0) + (data[i] || 0)];
        }, []);

      result[group] = {
        max: Math.max(max, Math.max(...tmpItem)),
        item: tmpItem,
        labelKey,
      };

      return result;
    }, {});
  }

  const data = formatData(yValues);

  const option = {
    tooltip: {},
    legend: {
      top: 10,
      right: 20,
      textStyle: {
        color: "#ffffff",
      },
    },
    grid: {
      top: 65,
      right: 15,
      left: 15,
      bottom: 30,
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        color: "#ffffff",
        fontSize: 10,
      },
      axisTick: {
        show: false,
      },
      data: xValue,
    },
    yAxis: yLabels.map((item) => {
      return createyAxis({
        ...item,
        fusion:
          Object.values(data).find((i) => i.labelKey === item.key) ||
          data[Object.keys(data).find((item) => /^un/.test(item))],
      });
    }),
    series: yValues.map((item) => {
      return createSeries(item.type, { ...item, yLabels });
    }),
  };
  return option;
}
