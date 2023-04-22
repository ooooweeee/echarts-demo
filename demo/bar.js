function createyAxis(options) {
  // function formatyValue(data, num = 6) {
  //   const interval = Math.ceil(Math.max(...data) / num) || 1;
  //   return {
  //     min: 0,
  //     max: interval * num,
  //     splitNumber: num,
  //     interval: interval,
  //   };
  // }

  // console.log(options.fusion);

  // const yValue =
  //   options.yValues.find((item) => item.labelKey === options.key) || {};
  // const unValue = options.yValues.find((item) => !item.labelKey);

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
    // ...formatyValue(yValue.data || unValue.data, options.num),
  };

  return tmp;
}

function createSeries(type, options) {
  function createBar(options) {
    return {
      type: "bar",
      stack: options.group,
    };
  }

  function createLine(options) {
    return {
      type: "line",
      smooth: true,
      symbolSize: 14,
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
      labelKey = "un-" + Date.now().toString() + index,
      data = [],
      group,
    } = current;

    console.log(current);
    const { max = 0, item = [], merge } = result[labelKey] || {};

    const tmpItem = new Array(Math.max(item.length, data.length))
      .fill(0)
      .reduce((r, _, i) => {
        return [...r, (item[i] || 0) + (data[i] || 0)];
      }, []);

    // result[labelKey] = {
    //   max: Math.max(max, Math.max(...tmpItem)),
    //   item: tmpItem,
    //   labelKey,
    // };

    return result;
  }, {});
}

function barOption({ xValue, yLabels = [], yValues = [] } = {}) {
  const data = formatData(yValues);

  // console.log(data);

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
      right: 30,
      left: 30,
      bottom: 30,
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        color: "#ffffff",
      },
      axisTick: {
        show: false,
      },
      data: xValue,
    },
    yAxis: yLabels.map((item) => {
      return createyAxis({
        ...item,
        // fusion:
        //   data[item.key] ||
        //   data[Object.keys(data).find((item) => /^un/.test(item))],
      });
    }),
    series: yValues.map((item) => {
      return createSeries(item.type, { ...item, yLabels });
    }),
  };
  return option;
}
