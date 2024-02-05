// const express = require('express')
// const app = express()
// const port = 3000

// app.post('/conversations', function (req, res) {
//     console.log(req.headers["authorization"])
//   res.send({
//     msg: "2+2=4"
//   })
// })
// app.get("/route-handler",function(req,res) {//hitting server form phone although from phone.
    
//     res.json({
//         name:"hitik",
//         age:20
//     })
// })
// app.listen(port, function() {
//   console.log(`Example app listening on port ${port}`)
// })


// const express = require('express')
// const bodyParser = require('body-parser');
// const app=express()
// const port = 3000
// app.use(bodyParser.json());
// app.post('/', (req, res) => {
//     const message = req.query.message;// jab ? karke url me kuch likha hota hai wo backend me message jata hai.
//     console.log(message);
//     console.log(req.body);
//   res.status(401).send('Hello World!')//sending status code
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// query parameters se backend me message bhejna

// const express = require("express");

// const app =express();
// const port=3000;

// function CalculateSum(n) {
//   let ans=0;
//   for(let i=0;i<=n;i++) {
//     ans+=i;
//   }
//   return ans;
// }

// app.get("/",function (req,res) {//request and response
//   const n = req.query.n;//yaha input hum query se pass kar rahe hai browser se n =30
//   const l = CalculateSum(n);
//   res.send(l.toString());

// })

// app.listen(3000);


//creating pure backend with databse as array,we have reated in memory database like in variables it is getting updated.

const express= require ("express");
const port =3000;
const app =express();

const users = [{///nesting creating array of objects
  name:"John",
  kidneys : [{
    healthy: false
  }]
}];

app.use(express.json());

//put is used for replace
app.get("/",function(req,res) {//input type in get is query parameters
  let johnKidneys =users[0].kidneys;
  //console.log(johnKidneys);//will print on termianl as logged here,
  let numberofKidneys = johnKidneys.length;
  let numberofhealthyKidneys =0;
  for(let i =0;i<johnKidneys.length;i++) {
    if(johnKidneys[i].healthy) {
      numberofhealthyKidneys++;
    }
  }
  const numberofUnhealthyKidneys = numberofKidneys-numberofhealthyKidneys;
  res.json({// to send in json format
    numberofKidneys,
    numberofhealthyKidneys,
    numberofUnhealthyKidneys
  })
})

app.post("/",function (req,res) {//for sending post input will be body
   let isHealthy = req.body.isHealthy;
   users[0].kidneys.push({
    healthy:isHealthy

   })

res.json({
  msg:"Done"//put something onserver so if don't output anythign that is also fine.
})
})


app.put("/",function (req,res) {
  for(let i =0;i<users[0].kidneys.length;i++) {
    if(users[0].kidneys[i].healthy==false) {//replaced
      users[0].kidneys[i].healthy=true;
    } 
  }

  res.json({});//bhale hi message na bheje per res.json to likhna padega 
})
//the updated 10 kidneys will not show as you restarted the server so the array gets reset ,that is why inmemory you should not use.

//user will delete unhealthy kidneys.

app.delete("/",function(req,res) {
  let newKidneys =[];
  for(let i =0;i<users[0].kidneys.length;i++) {
    if(users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy:true
      })
    }
  }
  users[0].kidneys=newKidneys;//replacing the array with new one so that we get updated things in old array itself.

  res.json({msg:"done"})
})



app.listen(3000);




// :fileName when you have to catch any file in browser.
//ans use const name = req.params.fileName
//remotely getting any file you can view on phone by creating server.