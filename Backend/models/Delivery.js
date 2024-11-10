const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    status: { type: String, required: true, enum: ['picked up', 'en route', 'delivered'], default: 'picked up' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Delivery', DeliverySchema);
