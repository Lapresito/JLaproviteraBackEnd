import express from 'express';
import { ProductService } from '../services/products.service.js';

const viewsRouter = express.Router();
const productService = new ProductService()


viewsRouter.get('/', async (req, res)=>{
    try {
        let products = await productService.getAll();
        res.render('home',{
            products: products
        });
    } catch (error) {
        throw new Error(error.message)
    }

})

export default viewsRouter;