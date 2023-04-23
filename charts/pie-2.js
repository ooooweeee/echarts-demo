function pieOption2() {
  const option = {
    backgroundColor: "#051f44",
    title: {
      text: "总数",
      x: "31%",
      y: "46%",
      textStyle: {
        color: "#ffffff",
        fontSize: "18",
      },
    },
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
        center: ["35%", "center"],
        itemStyle: {
          borderColor: "#051f44",
          borderWidth: 8,
        },
        label: {
          show: true,
          fontSize: 20,
          icon: "rect",
        },
        data: [
          {
            name: "在途",
            value: 147,
            label: {
              formatter(params) {
                return params.data.value;
              },
            },
          },
          {
            name: "在用",
            value: 89,
            label: {
              formatter(params) {
                return params.data.value;
              },
            },
          },
          {
            name: "闲置",
            value: 90,
            label: {
              formatter(params) {
                return params.data.value;
              },
            },
          },
        ],
      },
    ],
  };

  return option;
}
