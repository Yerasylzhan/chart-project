const UserData = [
  {
  x: 0,
  y: 3000
  },
  {
    x: 1,
    y: 2890
  },
  {
    x: 2,
    y: 2760
  },
  {
    x: 3,
    y: 2610
  },
  {
    x: 4,
    y: 2440
  },
  {
    x: 5,
    y: 2250
  },
  {
    x: 6,
    y: 2000
  },
  {
    x: 7,
    y: 1700
  },
  {
    x: 8,
    y: 1300
  },
  {
    x: 9,
    y: 800
  },
  {
    x: 10,
    y: 0
  },
  
];


const UserData2 = [
  {
  x: 0,
  y: 2600
  },
  {
    x: 1,
    y: 2510
  },
  {
    x: 2,
    y: 2410
  },
  {
    x: 3,
    y: 2300
  },
  {
    x: 4,
    y: 2180
  },
  {
    x: 5,
    y: 2050
  },
  {
    x: 6,
    y: 1910
  },
  {
    x: 7,
    y: 1760
  },
  {
    x: 8,
    y: 1600
  },
  {
    x: 9,
    y: 1430
  },
  {
    x: 10,
    y: 1250
  },
  {
    x: 11,
    y: 1060
  },
  {
    x: 12,
    y: 860
  },
  {
    x: 13,
    y: 660
  },
  {
    x: 14,
    y: 450
  },
  {
    x: 15,
    y: 230
  },
  {
    x: 16,
    y: 0
  },
  
];

// можно было бы сделать двухмерный массив, чтобы опшнс циклом взять

//let u_time = Date.now;
const current2 = new Date();
const myDate2 = `${current2.getHours() - 2}:${current2.getMinutes()}:${current2.getSeconds()} ${current2.getDate()}/${current2.getMonth()+1}/${current2.getFullYear()}`;

//let u_time = Date.now;
const current = new Date();
const myDate = `${current.getHours() }:${current.getMinutes()}:${current.getSeconds()} ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

export {myDate, myDate2, UserData, UserData2};



