export const UserData2 = [
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
      y: 2610
    },
    {
      x: 3,
      y: 2500
    },
    {
      x: 4,
      y: 2380
    },
    {
      x: 5,
      y: 2250
    },
    {
      x: 6,
      y: 2100
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
  
  //let u_time = Date.now;
  const current = new Date();
  const myDate2 = `${current.getHours() - 2}:${current.getMinutes()}:${current.getSeconds()} ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  export default myDate2;
  