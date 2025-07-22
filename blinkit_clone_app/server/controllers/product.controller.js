import ProductModel from "../models/product.model.js";

// CREATE product (Admin only)
export async function createProduct(request,response) {
    try {
        const newProduct = new ProductModel(req.body);
        const savedProduct = await newProduct.save();

        response.status(201).json({ 
            success: true, product: savedProduct 
        });

    } catch (error) {
        response.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
}

// GET all products (Public)
export async function getAllProducts(request, response) {
    try {
        const products = await ProductModel.find();

        response.json({ 
            success: true, products 
        });

    } catch (error) {
        response.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
}

// GET single product by ID (Public)
export async function getProductById(request, response) {
    try {
        const product = await ProductModel.findById(request.params.id);

        if (!product) 
            return response.status(404).json({
                message: "Product not found"
            });

        response.json({ 
            success: true, product 
        });

    } catch (error) {
        response.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
}

// UPDATE product (Admin only)
export async function updateProduct(request, response) {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true }
        );

        response.json({ 
            success: true, 
            product: updatedProduct 
        });

    } catch (error) {
        response.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
}

// DELETE product (Admin only)
export async function deleteProduct(request, response) {
    try {
        await ProductModel.findByIdAndDelete(request.params.id);

        response.json({ 
            success: true, 
            message: "Product deleted successfully" 
        });

    } catch (error) {
        response.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
}
