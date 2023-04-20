function pieOption1() {
  const option = {
    backgroundColor: "#051f44",
    title: [
      {
        text: "198",
        x: "22%",
        y: "40%",
        textStyle: {
          color: "#02f4f1",
          fontSize: "32",
          textShadowColor: "#02f4f1",
          textShadowBlur: 20,
        },
      },
      {
        text: "总数",
        x: "25%",
        y: "56%",
        textStyle: {
          color: "#ffffff",
          fontSize: "16",
        },
      },
    ],
    legend: {
      orient: "vertical",
      right: "10%",
      top: "center",
      textStyle: {
        color: "#ffffff",
        fontSize: 14,
      },
    },
    series: [
      {
        // 数据
        type: "pie",
        zlevel: 1,
        radius: ["38%", "70%"],
        center: ["30%", "center"],
        itemStyle: {
          borderColor: "#051f44",
          borderWidth: 8,
        },
        label: {
          show: true,
          fontSize: 20,
        },
        data: [
          {
            name: "已佩戴安全帽",
            value: 147,
            label: {
              color: "#54d9f2",
              formatter(params) {
                return params.data.value;
              },
            },
            itemStyle: {
              color: "#54d9f2",
            },
          },
          {
            name: "未佩戴安全帽",
            value: 45,
            label: {
              color: "#ff6685",
              formatter(params) {
                return params.data.value;
              },
            },
            itemStyle: {
              color: "#ff6685",
            },
          },
        ],
      },

      {
        type: "pie",
        radius: ["40.5%", "60%"],
        center: ["30%", "center"],
        silent: true,
        tooltip: {
          show: false,
        },
        itemStyle: {
          color: "#011e438f",
        },
        zlevel: 2,
        labelLine: {
          show: false,
        },
        data: [100],
      },
    ],
  };

  return option;
}
