const { Client, Intents } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const readline = require('readline-sync');
const m = require("moment-duration-format");
const exp = require('express'); 
const s = exp();

const client = new Client({
  checkUpdate: false
});

s.all('/', (req, res) => { 
  res.send("Ready Dek") 
 })

s.listen(4020, () => { 
  console.log("Port : 4020") 
 })

client.on('ready', async () => {

        if (global.dataWeather && global.dataWeather.current_weather) {
          global.temp = global.dataWeather.current_weather.temperature;
          global.wind = global.dataWeather.current_weather.windspeed

        } else {
          global.temp = 25
          global.wind = 3.5
        }

 const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
        const operator = Math.random() < 0.3 ? '+' : '-';

  setInterval(() => {
    const moment = require('moment');
    const created = moment().format('YYYY-MM-DD HH:mm:ss ');
    const change = ['https://cdn.discordapp.com/attachments/1227927155732774995/1237055048962412585/IMG_0629.jpg?ex=66402f8b&is=663ede0b&hm=be5eb337157d37a268e75937400eeacf8d34dc96c329f553d4c4b6bc5c23b554&']; //รูปใหญ่
     //const poop = ['https://cdn.discordapp.com/emojis/1152953111778967613.webp?size=96&quality=lossless']; // รูปเล็ก
     //const change2 = ['']; // ชื่อสลับ
    const yyyt = ['⪩ kungYuna']; // ชื่อ button2
    const ddds = ['https://www.instagram.com/yoojiwuw_/?igsh=bHljdTAzMDd1ZzQ1&utm_source=qr']; // ลิ้ง button1

   const iooi = ['Join server ᩍ']; // ชื่อ button 1
   const iiio = ['https://discord.com/invite/jzpRQEb3GY']; // ลิ้ง button 2
   const tyyy = yyyt[Math.floor(Math.random()*yyyt.length)]; // ชื่อ button 2
   const sddd = ddds[Math.floor(Math.random()*ddds.length)]; // ลิ้ง button 2
   const oooi = 
iiio[Math.floor(Math.random()*iiio.length)]; // button 1 ใส่ลิ้ง
    const ioii =
iooi[Math.floor(Math.random()*iooi.length)]; // button 1 ใส่ชื่อ
   //  const popp =
 // poop[Math.floor(Math.random()*poop.length)]; // รูปเล็ก
    const ssss = 
change[Math.floor(Math.random()*change.length)]; // รูปใหญ่
    //const dwada = change2[Math.floor(Math.random()*change2.length)]; // ชื่อสลับคำ
    const r = new Discord.RichPresence()
      .setApplicationId('1112701450150232085')
      .setType('STREAMING')
      .setURL('https://www.youtube.com/watch?v=xRzbLQ_WKPs')
      .setState(`🎮`)
      .setName(`Youtube`)
      .setDetails(`꒰𝗣𝗹𝗮𝘆 𝗴𝗮𝗺𝗲 𝗱𝗺 𝗺𝗲꒱ 𝟮𝟱/𝟳`)
      // .setAssetsSmallImage(`${popp}`) 
.setAssetsLargeImage(`${ssss}`)
.setAssetsLargeText(`꒰ ${getTime()} ꒱ ${moment().format('• ꒰ DD/MM/YYYY ꒱')}`)
.setAssetsSmallText(`ping : ${Math.round(client.ws.ping)}`)
.addButton(`${ioii}`,`${oooi}`)  

      .addButton(`${tyyy}`,`${sddd}`)
//.setStartTimestamp("1672545600" || Date.now())
//.setEndTimestamp("1704077999" || Date.now())
    client.user.setActivity(r);
  }, 8*1000); // อัพเดท ทุกๆ 7 วินาที
  console.log(`${client.user.username} Is Ready!`)
});


client.login(process.env.token)



   let endTime = new Date().setHours(24 + 6, 0, 0, 0), //nextMidnight
  today = new Date().setHours(0, 0, 0, 0), //lastMidnight
  dayCount = Math.floor( 
    (today - new Date(2023, 0).getTime()) / (24 * 60 * 60 * 1000) 
  )

var date = new Date().getDate() + "/"+ (new Date().getMonth()+1)  + "/" + new Date().getFullYear();
    var time = new Date().getHours() + ":"+ new Date().getMinutes();

let options = {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  };

  function getDate() {
    return (new Date()).toLocaleString([], options).split(" ")[0].replaceAll(",", "");
  }
  function getTime() {
    return (new Date()).toLocaleString([], options).split(" ")[1].replaceAll(",", "");
          }
