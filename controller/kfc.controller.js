const { read_file, write_file } = require("../api/fs")
const uuid = require("uuid")
const getallkfcs = async (req,res) =>{
    try{
const kfc = read_file("kfc.json")
res.status(200).json(kfc)
    }catch(error){
        res.status(500).json({
            message :error.message
        })
    }
}
///////////
const getonelkfc = async (req,res) =>{
    try{
        const {id} = req.params
const kfc = read_file("kfc.json")

const foundedkfc = kfc.find((itme) => itme.id===id)

if (!foundedkfc) {
    return res.json({
        message : "not found"
    })
    
}

res.status(200).json(foundedkfc)
    }catch(error){
        res.status(500).json({
            message :error.message
        })
    }
}
//////////
const addkfc = async (req,res) =>{
    try{
const {title,price,desc} = req.body
const  kfc = read_file("kfc.json")
kfc.push({
    id:uuid.v4(),
    image:"/image/2.png",
    title,
    price,
    desc
})
write_file("kfc.json",kfc)
res.status(200).json({
    message : "added new kfc"
})
    }catch(error){
        res.status(500).json({
            message :error.message
        })
    }
}
//////////
const updatekfc = async (req,res) =>{
    try{
const {id} =req.params
const {title,price,desc} = req.body
const kfc = read_file("kfc.json")

const foundedkfc = kfc.find((itme)=> itme.id===id)
if (!foundedkfc) {
    return res.json({
        message :"not foundf"
    })
}
kfc.forEach((itme,idx) => {
    itme.title=title? title: itme.title
       itme.price=price? price: itme.price  
        itme.desc=desc? desc: itme.desc
})
write_file("kfc.json",kfc)

res.status(200).json({
    message : "update kfc"
})



    }catch(error){
        res.status(500).json({
            message :error.message
        })
    }
}
/////////
const deletekfc = async (req,res) =>{
    try{
const { id } = req.params

const kfc = read_file("kfc.json")

const foundedkfc = kfc.find((itme)=> itme.id===id)
if (!foundedkfc) {
    return res.json({
        message :"not foundf"
    })
}
kfc.forEach((itme,idx) => {
 if (itme.id ===id) {
    kfc.splice(idx,1)
 }
})
write_file("kfc.json",kfc)

res.status(200).json({
    message : "delete kfc"
})

    }

    catch(error){
        res.status(500).json({
            message :error.message
        })
    }
}

module.exports= {
    getallkfcs,
    getonelkfc,
    addkfc,
    updatekfc,
    deletekfc
}