var chinaDatas = [
  [
    {
      name: "黑龙江",
      value: 500,
    },
  ],
  // [
  //   {
  //     name: '内蒙古',
  //     value: 300,
  //   },
  // ],
  // [
  //   {
  //     name: '北京市',
  //     value: 200,
  //   },
  // ],
  [
    {
      name: "吉林",
      value: 300,
    },
  ],
  [
    {
      name: "辽宁",
      value: 500,
    },
  ],
  // [
  //   {
  //     name: '河北',
  //     value: 600,
  //   },
  // ],
  [
    {
      name: "天津",
      value: 500,
    },
  ],
  [
    {
      name: "山西",
      value: 700,
    },
  ],
  [
    {
      name: "陕西",
      value: 600,
    },
  ],
  [
    {
      name: "甘肃",
      value: 500,
    },
  ],
  [
    {
      name: "宁夏",
      value: 500,
    },
  ],
  [
    {
      name: "青海",
      value: 700,
    },
  ],
  // [
  //   {
  //     name: '新疆',
  //     value: 300,
  //   },
  // ],
  [
    {
      name: "西藏",
      value: 300,
    },
  ],
  [
    {
      name: "四川",
      value: 1000,
    },
  ],
  [
    {
      name: "重庆",
      value: 900,
    },
  ],
  [
    {
      name: "广东",
      value: 300,
    },
  ],
  [
    {
      name: "山东",
      value: 600,
    },
  ],
  [
    {
      name: "河南",
      value: 1800,
    },
  ],
  // [
  //   {
  //     name: '江苏',
  //     value: 1000,
  //   },
  // ],
  [
    {
      name: "安徽",
      value: 900,
    },
  ],
  // [
  //   {
  //     name: '湖北',
  //     value: 3200,
  //   },
  // ],
  [
    {
      name: "浙江",
      value: 1600,
    },
  ],
  // [
  //   {
  //     name: '福建',
  //     value:900,
  //   },
  // ],

  [
    {
      name: "湖南",
      value: 2400,
    },
  ],
  [
    {
      name: "贵州",
      value: 800,
    },
  ],
  [
    {
      name: "广西",
      value: 700,
    },
  ],
  [
    {
      name: "海南",
      value: 700,
    },
  ],

  [
    {
      name: "江西",
      value: 170,
    },
  ],
  [
    {
      name: "云南",
      value: 500,
    },
  ],
];
var chinaGeoCoordMap = {
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891],
};
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var fromCoord = [121.4648, 31.2891]; //被攻击的点
    var toCoord = [
      [87.9236, 43.5883],
      [110.3467, 41.4899],
      [116.4551, 40.2539],
      [114.3896, 30.6628],
      [119.4543, 25.9222],
    ]; //出发点
    if (fromCoord && toCoord[i]) {
      res.push([
        {
          coord: toCoord[i],
        },
        {
          coord: fromCoord,
          value: dataItem[0].value,
          visualMap: true,
        },
      ]);
    }
  }
  return res;
};
function mapOption() {
  return {
    tooltip: {
      backgroundColor: "rgba(0,49,85,1)",
      borderColor: "rgba(0,151,251,1)",
      textStyle: {
        color: "#BCE9FC",
        fontSize: 14,
      },
      formatter: function (e) {
        // console.log(e);
        return e.name + "详情内容";
      },
    },
    geo: [
      {
        map: "simp-china",
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ["52%", "45%"],
        layoutSize: "235%",
        show: true,
        roam: false,
        label: {
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            borderColor: "skyblue",
            borderWidth: 2,
            shadowColor: "skyblue",
            shadowOffsetY: 10,
            shadowBlur: 120,
            areaColor: "transparent",
          },
        },
      },
      // 重影
      {
        type: "map",
        map: "simp-china",
        zlevel: -1,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ["52%", "46%"],
        layoutSize: "235%",
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderWidth: 1,
            // borderColor:"rgba(17, 149, 216,0.6)",
            borderColor: "#2193f3",
            shadowColor: "#2193f3",
            shadowOffsetY: 5,
            shadowBlur: 15,
            areaColor: "#1a77fa",
          },
        },
      },
      {
        type: "map",
        map: "simp-china",
        zlevel: -2,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ["52%", "47%"],
        layoutSize: "235%",
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderWidth: 1,
            // borderColor: "rgba(57, 132, 188,0.4)",
            borderColor: "rgba(58,149,253,0.6)",
            shadowColor: "rgba(65, 214, 255,1)",
            shadowOffsetY: 5,
            shadowBlur: 15,
            areaColor: "#0557f1",
          },
        },
      },
      {
        type: "map",
        map: "simp-china",
        zlevel: -3,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ["52%", "48%"],
        layoutSize: "235%",
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderWidth: 1,
            // borderColor: "rgba(11, 43, 97,0.8)",
            borderColor: "rgba(58,149,253,0.4)",
            shadowColor: "rgba(58,149,253,1)",
            shadowOffsetY: 15,
            shadowBlur: 10,
            areaColor: "transpercent",
          },
        },
      },
      {
        type: "map",
        map: "simp-china",
        zlevel: -4,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ["52%", "49%"],
        layoutSize: "235%",
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderWidth: 5,
            // borderColor: "rgba(11, 43, 97,0.8)",
            borderColor: "#1173f6",
            shadowColor: "#1173f6",
            shadowOffsetY: 15,
            shadowBlur: 10,
            areaColor: "rgba(5,21,35,0.1)",
          },
        },
      },
    ],

    series: [
      {
        //飞线动画
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 6, // 箭头指向速度，值越小速度越快
          trailLength: 0.4, // 特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: "pin", // 箭头图标
          symbolSize: 9, // 图标大小
        },
        lineStyle: {
          normal: {
            color: "#1DE9B6",
            width: 2, // 线条宽度
            opacity: 0.1, // 尾迹线条透明度
            curveness: 0.3, // 尾迹线条曲直度
          },
        },

        data: convertData(chinaDatas),
      },
      {
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          //涟漪特效
          period: 4, //动画时间，值越小速度越快
          brushType: "stroke", //波纹绘制方式 stroke, fill
          scale: 4, //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [-20, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 14,
            color: "#fff",
          },
          emphasis: {
            show: true,
          },
        },
        symbol: "circle",
        symbolSize: function (val) {
          return 3 + (val[2] / 100) * 1; //圆环大小
        },
        itemStyle: {
          normal: {
            show: false,
            color: "#FFA54F",
          },
        },
        data: chinaDatas.map(function (dataItem) {
          return {
            name: dataItem[0].name,
            value: chinaGeoCoordMap[dataItem[0].name].concat([
              dataItem[0].value,
            ]),
          };
        }),
        symbolSize: 0,
        rippleEffect: {
          brushType: "stroke",
        },
        itemStyle: {
          color: "#fcff00",
        },
      },
      {
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 20,
            color: "#469fd3",
            fontWeight: 800,
          },
        },
        type: "effectScatter",
        coordinateSystem: "geo",
        data: [
          {
            name: "上海",
            value: [121, 30.5],
          },
        ],
        symbolSize: 15,
        rippleEffect: {
          brushType: "stroke",
        },
        itemStyle: {
          color: "#ff0000",
        },
      },

      // 攻击点
      {
        type: "effectScatter",
        coordinateSystem: "geo",
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 14,
            // color:'#000'
          },
        },
        data: [
          {
            name: "新疆",
            value: [87.9236, 43.5883],
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
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 14,
            // color:'#000'
          },
        },
        data: [
          {
            name: "内蒙古",
            value: [110.3467, 41.4899],
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
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 14,
            // color:'#000'
          },
        },
        data: [
          {
            name: "北京",
            value: [116.4551, 40.2539],
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
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 14,
            // color:'#000'
          },
        },
        data: [
          {
            name: "湖北",
            value: [114.3896, 30.6628],
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
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 14,
            // color:'#000'
          },
        },
        data: [
          {
            name: "福建",
            value: [119.4543, 25.9222],
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
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 14,
            // color:'#000'
          },
        },
        data: [
          {
            name: "安徽",
            value: [117.29, 32.0581],
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
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 14,
            // color:'#000'
          },
        },
        data: [
          {
            name: "江苏",
            value: [118.8062, 31.9208],
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
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name;
            },
            fontSize: 14,
            // color:'#000'
          },
        },
        data: [
          {
            name: "河北",
            value: [114.4995, 38.1006],
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
    ],
  };
}
