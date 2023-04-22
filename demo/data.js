function random(min, max, dec = 5) {
  return Number((Math.random() * (max - min) + min).toFixed(dec));
}

const data = {
  x: [
    "01月",
    "02月",
    "03月",
    "04月",
    "05月",
    "06月",
    "07月",
    "08月",
    "09月",
    "10月",
    "11月",
    "12月",
  ],
  y: [
    {
      name: "电器故障",
      type: "bar",
      data: [320, 332, 301, 334],
    },
    {
      name: "机械故障",
      type: "bar",
      data: [120, 132, 101, 134],
    },
    {
      name: "液压故障",
      type: "bar",
      data: [220, 182, 330, 310, 50],
    },
    {
      name: "其他",
      type: "bar",
      data: [150, 232, 190, 330],
    },
  ],
};

const data2 = {
  x: ["结烧", "高线主线", "棒材一线"],
  y: [
    {
      name: "电器故障",
      type: "bar",
      data: [320, 332, 301],
    },
    {
      name: "机械故障",
      type: "bar",
      data: [120, 132, 101, 134],
    },
    {
      name: "液压故障",
      type: "bar",
      data: [220, 182, 330, 310, 50],
    },
    {
      name: "其他",
      type: "bar",
      data: [150, 232, 190, 330],
    },
  ],
};

function selectDataByMonth(data) {
  Object.keys(data).reduce((result, current) => {
    console.log(
      Object.keys(data[current]).reduce((r, c) => {
        Object.keys(data[current][c]).forEach((typeKey) => {
          const old = r[typeKey] || 0;
          r[typeKey] = old + data[current][c][typeKey];
        });
        return r;
      }, {})
    );
    return result;
  }, {});
  return [Object.keys(data)];
}

const ORIGIN = [
  "结烧",
  "高线主线",
  "棒材一线",
  "棒材二线",
  "特带主线",
  "中棒主线",
  "小棒主线",
  "辅助产线",
];
const TYPES = ["电器故障", "机械故障", "液压故障", "其他"];

function createTypeData() {
  return TYPES.reduce((result, current) => {
    return {
      ...result,
      [current]: random(1, 10),
    };
  }, {});
}

function createOriginData() {
  return ORIGIN.reduce((result, current) => {
    return {
      ...result,
      [current]: createTypeData(),
    };
  }, {});
}

function createData() {
  return new Array(12).fill(0).reduce((result, _, index) => {
    return {
      ...result,
      [`${(index + 1).toString().padStart(2, "0")}月`]: createOriginData(),
    };
  }, {});
}
