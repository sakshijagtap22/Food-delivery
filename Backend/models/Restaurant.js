const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant_name: { type: String, required: true },
    address: { type: String, required: true },
    hours_of_operation: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
