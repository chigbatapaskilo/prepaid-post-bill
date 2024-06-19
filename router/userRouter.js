const {createUser, getOne,estimatedUsage}=require("../controller/userController")

const router=require("express").Router()

router.post("/createuser",createUser) 
router.get(`/getone/:id`,getOne)
router.put("/updateusage",estimatedUsage)
 
module.exports=router   