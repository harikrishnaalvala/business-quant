const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const value = require("./modal/main.js");
const fs = require('fs');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
    console.log("db err")
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/business");
}

// Read the JSON file
const jsonFilePath = 'data.json';
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }
  const jsonData = JSON.parse(data);


  // Save the JSON 
  value.insertMany(jsonData)
    .then(() => {
      console.log('Data saved to MongoDB');
      //console.log(jsonData);                    
      mongoose.connection.close();

    })
    .catch((err) => {
      console.error('Error saving data to MongoDB:', err);
      mongoose.connection.close();
    });
});



app.get("/",(req,res)=>{
    res.send("server is working");
    console.log("data rec.");
});


//index route
app.get("/quant",async(req,res)=>{
    res.render("index.ejs");

}); 


//show route
app.get("/quant/new",async(req,res)=>{
    let values = await value.find(); 
    res.json(values);
})





app.listen(8080,()=>{
    console.log("app is listening on port 8080");
});
