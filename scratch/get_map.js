const https = require('https');

https.get('https://www.google.com/maps/place/Alpesh+Yoga/@32.2471649,76.3312988,15z/data=!4m6!3m5!1s0x391b53dfdcd15d49:0xe1c028ea7c55cb85!8m2!3d32.2471649!4d76.3312988!16s%2Fg%2F11dyqsmr39?entry=ttu', res => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const match = data.match(/pb=!1m[a-zA-Z0-9!.-]+/);
    console.log(match ? match[0] : "No match found");
  });
});
