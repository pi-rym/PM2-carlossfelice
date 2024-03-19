const { Router } = require('express')
const bienvenida=require("../controllers/index")

const moviesRoute=require("./moviesRoute")

const router=Router()

router.get('/', bienvenida )
router.use("/movies",moviesRoute)

module.exports=router