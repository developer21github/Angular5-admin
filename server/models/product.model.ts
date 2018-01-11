import promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Product  Schema
 */
const ProductSchema = new mongoose.Schema({
    category: {
        type: mongoose.schema.Types.ObjectId,
        ref: 'Category'
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    isActive: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});
/**
 * @typedef Product
 */
export default mongoose.model('Product', ProductSchema);