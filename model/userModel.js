const mongoose= require("mongoose")

const nepaSchema= new mongoose.Schema({


    customerName:{type:String,required:[true,"Customer name is required"]},


    address:{type:String,required:[true,"Address is required"]},

    meterNo:{type:Number,},

    paymentDate:{type:Date},

    amountSubscribed:{type:Number,required:[true,"kindly pay an amount before we can create your account"]},
phoneNumber:{
    type:String,unique:true,required:[true,"kindly provide your phone number"]
},

outstanding:{type:Number,default:0},

conversion:{type:Number,default:function (){

    return (this.amountSubscribed/66.7).toFixed(2)
}}
 
},{timestamps:true})


const nepaModel= mongoose.model("electricity model",nepaSchema)

module.exports = nepaModel