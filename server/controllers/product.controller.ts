import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import Product from '../models/product.model';

/**
 * Load product and append to req.
 */
function load(req, res, next, id) {
    Product.get(id)
        .then((product) => {
            req.product = product; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}

/**
 * Get product
 * @returns {Product}
 */
function get(req, res) {
    return res.json(req.product);
}

/**
 * Create new Product
 * @property {string} req.body.productName - The name of product.
 * @property {string} req.body.quantity - quantity of product.
 * @property {string} req.body.price- The price of product.
 * @returns {Product}
 */
function create(req, res, next) {
    const product = new Product(req.body);
    product.category = res.locals.session._id;

    Product.findOne({ productName: product.productName })
        .exec()
        .then((foundProduct) => {
            if (foundProduct) {
                return Promise.reject(new APIError('Product name must be unique', httpStatus.CONFLICT, true));
            }
            return product.save();
        })
        .then(savedProduct => res.json(savedProduct))
        .catch(e => next(e));
}

/**
 * Update existing product
 * @property {string} req.body.productName - The name of product.
 * @property {string} req.body.quantity - Author name of product.
 * @property {string} req.body.price- The price of product.
 * @returns {Product}
 */
function update(req, res, next) {
    const product = req.product;
    product.productName = req.body.productName || product.productName;
    product.quantity = req.body.quantity || product.quantity;
    product.price = req.body.price || product.price;
    product.save()
        .then(savedProduct => res.json(savedProduct))
        .catch(e => next(new APIError(e.message, httpStatus.CONFLICT, true)));
}

/**
 * Get product list.
 * @returns {Product[]}
 */
function list(req, res, next) {
    Product.list()
        .then(product => res.json(product))
        .catch(e => next(e));
}

/**
 * Delete product.
 * @returns {Product}
 */
function remove(req, res, next) {
    const product = req.product;
    product.remove()
        .then(deletedProduct => res.json(deletedProduct))
        .catch(e => next(e));
}

export default { load, get, create, update, list, remove };