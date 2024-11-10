const User = require('../models/User'); // Assuming you have a User model
const Customer = require('../models/Customer');
const Delivery = require('../models/Delivery');
const MenuItem = require('../models/Menu'); // Assuming you have a MenuItem model

const dashboardController = {
    getDashboard: async (req, res) => {
        try {
            // const token = req.session.token;
            
            // if (!token) {
            //     return res.status(401).json({ message: 'Unauthorized' });
            // }
            const userCount = await User.countDocuments();
            const customerCount = await Customer.countDocuments();
            const deliveryCount = await Delivery.countDocuments();
            const menuCount = await MenuItem.countDocuments();

            
            res.render('dashboard', {
                userCount,
                customerCount,
                deliveryCount,
                menuCount,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },
};

module.exports = dashboardController;
