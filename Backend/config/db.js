const mongoose = require('mongoose');

const connectDB = async () => {
    // try {
    //     await mongoose.connect('mongodb://localhost:27017/food_delivery_test', {});
    //     console.log('MongoDB connected');
    // } catch (error) {
    //     console.error('MongoDB connection error:', error);
    //     process.exit(1); // Exit the process with failure
    // }
    mongoose.connect('mongodb://localhost:27017/food_delivery_db', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
};

const closeDB = async () => {
    mongoose.connection.close();
};

module.exports = connectDB;
