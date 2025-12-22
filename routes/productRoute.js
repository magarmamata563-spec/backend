import express from 'express'
import { createProduct,  findproductById, getAllProduct} from '../controller/productController.js'
import { uploads } from '../config/cloudinary.js'





export const productRoute= express.Router()

productRoute.post('/createProduct',uploads.single('image'), createProduct)
productRoute.get('/getallproduct',getAllProduct)
 productRoute.get('/findById/:id',  findproductById)
