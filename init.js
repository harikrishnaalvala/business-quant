const  mongoose = require("mongoose");
const chat = require("./models/chat");


main()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allData = [
    {
        revenue:0,
        gross_profit:0,
        floating_cost:0,    
        capital_expenditure:0
    }
]
