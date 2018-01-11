import express from 'express';
import validate from 'express-validation';
import Joi from 'joi';
import ProductCtrl from '../../controllers/product.controller'

const router = express.Router(); // eslint-disable-line new-cap
const paramValidation = {
    createProduct: {
        body: {
            productName: Joi.string().required(),
            quantity: Joi.string().required(),
            price: Joi.string().required(),

        }
    },
    updateProduct: {
        params: {
            productId: Joi.string().required()
        },
        body: {
            productName: Joi.string().required(),
            quantity: Joi.string().required(),
            price: Joi.string().required()
        },
    }
};

router.route('/')
/** GET /api/products - Get list of products */
    .get(ProductCtrl.list)

    /** POST /api/products - Create new products */
    .post(validate(paramValidation.createProduct), ProductCtrl.create);

router.route('/:productId')
/** GET /api/products/:productId - Get product */
    .get(ProductCtrl.get)

    /** PUT /api/products/:productId - Update product */
    .put(validate(paramValidation.updateProduct), ProductCtrl.update)

    /** DELETE /api/products/:productId - Delete product */
    .delete(ProductCtrl.remove);

/** Load product when API with productId route parameter is hit */
router.param('productId', ProductCtrl.load);

export default router;