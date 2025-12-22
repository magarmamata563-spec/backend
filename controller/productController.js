import product from "../models/product.js"


export const createProduct= async(req,res)=>{
    try{
        //for image
        console.log(req.file)
        const image= req.file.path
        // return res.status(200).json({message:"image sent"})


        const{name, price,description,stock,ratings,category}=req.body
        const data= await product.create({
            name:name,
            price:price,
            ratings:ratings,
            stock:stock,
            description:description,
            category:category,
            image:image


        })
        res.status(200).json({
            message:"product created successfully",data
        })
    }
    catch(error){
        return res.status(401).json({
            message: "product failed to create",error:error.message
        })
    }
}



export const getAllProduct=async(req,res)=>{
    try {
      const result = await  product.find().populate("category")
          res.status(200).json({
            message : "product Found successfully",
            data : result
        })

    } catch (error) {
         console.log("error ocured",error.message);
        res.status(400).json({
            message : "error occured to Get all  product",
            error : error.message
        }) 
    }
}


// export const findproduct= async(req,res)=>{
// try{
//     const result= await product.find()
//     res.status(200).json({
//         message: "product find successfulyy",
//         product: result
//     })

// }
// catch(error){
//     console.log("error to find product", error.message);
//     res.status(400).json({
//         message: "eroor to find product",
//         error: error.message
//     })

// }
// }



export const findproductById= async(req,res)=>{
try{
    const id = req.params.id
    const result= await product.findById(id)
    res.status(200).json({
        message: "product find successfulyy",
        product: result
    })

}
catch(error){
    console.log("error to find product", error.message);
    res.status(400).json({
        message: "eroor to find product",
        error: error.message
    })

}
}








