const {Router} = require("express")
const { getallkfcs, getonelkfc, addkfc, updatekfc, deletekfc } = require("../controller/kfc.controller")

const kfcrouter = Router()

kfcrouter.get("/get_all_kfcs",getallkfcs)
kfcrouter.get("/kfc/:id",getonelkfc)
kfcrouter.post("/add_kfc",addkfc)
kfcrouter.put("/update_kfc/:id",updatekfc)
kfcrouter.delete("/delete_kfc/:id",deletekfc)


module.exports = kfcrouter