const nepaModel=require("../model/userModel")

//create a user


const createUser=async(req,res)=>{

    try {
const generateMeterNo=()=>{
   return Math.floor(Math.random()*10000000)
}
        const{customerName,address,subscription,phoneNumber}=req.body
        const date=new Date
const data={
customerName,
address,
phoneNumber,
amountSubscribed:subscription,
meterNo:generateMeterNo(),
paymentDate:date.toLocaleDateString()
}

const createdUser=await  nepaModel.create(data)

res.status(201).json({message:`new user created`,data:createdUser})

        
    } catch (error) {
        res.status(500).json(error.message)
    }
}




//get one user

const getOne = async(req,res)=>{
    let id = req.params.id
    try {
    getUser = await nepaModel.findById(id)
    res.status(200).json({message:`Kindly find the details of the user with ID: ${id} below`, data: getUser})        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// monthly usage

const estimatedUsage=async (req,res)=>{
    try {

        const{meterNo,monthlyUsage}=req.body
        const owner= await nepaModel.findOne({meterNo})

        if(!owner){
            return res.status(404).json("meter number does not exist")
        }
        
let remainingUnit= owner.conversion-monthlyUsage


        const monthlyreading=await nepaModel.findOneAndUpdate({meterNo},{conversion:remainingUnit},{new:true})
        res.status(200).json({message:`monthly reading succesfully updated`,data:monthlyreading})
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports={createUser,getOne,estimatedUsage}