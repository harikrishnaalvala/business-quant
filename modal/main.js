const mongoose = require("mongoose");

const business = new mongoose.Schema({
    revenue:{
        type:Number
    },

    gross_profit:{
        type:Number
    },

    floating_cost:{
        type:Number
    },

    capital_expenditure:{
        type:Number
    }
});

const value = mongoose.model("Value",business);
module.exports = value;
