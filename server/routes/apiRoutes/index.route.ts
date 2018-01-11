import express from 'express';
import productRoutes from './product.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

// mount product routes at /api/product
router.use('/api/product', productRoutes);

export default router;