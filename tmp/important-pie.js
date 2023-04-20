function optionImportantPie() {
  var trafficWay = [
    {
      color: "yellow",
      name: "不符合Ⅰ",
      value: 20,
    },
    {
      color: "green",
      name: "不符合Ⅱ",
      value: 40,
    },
    {
      color: "blue",
      name: "不符合Ⅲ",
      value: 60,
    },
  ];

  var data = [];
  var color = ["#f5e941", "#04c673", "#0ea4ff"];
  for (var i = 0; i < trafficWay.length; i++) {
    data.push(
      {
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
          borderWidth: 5,
          shadowBlur: 20,
          borderColor: color[i],
          shadowColor: color[i],
        },
      },
      {
        value: 2,
        name: "",
        itemStyle: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
        },
      }
    );
  }
  const optionImportantPie = {
    backgroundColor: "#051f44",
    color: color,
    title: [
      {
        text: "4",
        top: "50%",
        left: "50%",
        padding: [-15, 0, 0, -15],
        textStyle: {
          color: "#fff",
          fontSize: 30,
          fontWeight: "bold",
        },
      },
      {
        text: "总计",
        top: "50%",
        left: "50%",
        padding: [15, 0, 0, -20],
        textStyle: {
          color: "#fff",
          fontSize: 18,
          fontWeight: "400",
        },
      },
    ],
    legend: {
      icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
      right: "20%",
      top: "45%",
      width: "20%",
      itemWidth: 10,
      orient: "horizontal",
      textStyle: {
        color: "#D8DDE3",
        rich: {
          name: {
            fontSize: 14,
            color: "#D8DDE3",
          },
          yellow: {
            padding: [0, 0, 0, 10],
            color: "#fff573",
            fontSize: 16,
            fontWeight: "bold",
          },
          green: {
            padding: [0, 0, 0, 10],
            color: "#04c673",
            fontSize: 16,
            fontWeight: "bold",
          },
          blue: {
            padding: [0, 0, 0, 10],
            color: "#0faeff",
            fontSize: 16,
            fontWeight: "bold",
          },
        },
      },
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: [105, 109],
        data: data,
        label: {
          show: false,
        },
      },
    ],
  };

  return optionImportantPie;
}
