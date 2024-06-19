const {createUser, getOne,estimatedUsage,payBills}=require("../controller/userController")

const router=require("express").Router()

router.post("/createuser",createUser) 
router.get(`/getone/:id`,getOne)
router.put("/updateusage",estimatedUsage)
router.put("/payment",payBills)
 
module.exports=router   