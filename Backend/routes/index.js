const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const restaurantController = require('../controllers/restaurantController');
const menuController = require('../controllers/menuController');
const orderController = require('../controllers/orderController');
const deliveryController = require('../controllers/deliveryController');
const customerController = require('../controllers/customerController'); // Import customer controller
const dashboardController = require('../controllers/dashboardController'); // Import the dashboard controller

const { authenticateJWT, authorizeRoles } = require('../middleware/auth');



router.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs file
});

router.get('/login', (req, res) => {
    res.render('login'); // Render the customers.ejs file
});

// router.get('/dashboard', (req, res) => {
//     res.redirect('dashboard'); // Render the dashboard.ejs file
// });

router.get('/dashboard', dashboardController.getDashboard);



router.get('/customers', (req, res) => {
    res.render('customers'); // Render the customers.ejs file
});

router.get('/menus', (req, res) => {
    res.render('menus'); // Render the menus.ejs file
});

router.get('/orders', (req, res) => {
    res.render('orders'); // Render the orders.ejs file
});

router.get('/restaurants', (req, res) => {
    res.render('restaurants'); // Render the restaurants.ejs file
});

router.get('/deliveries', (req, res) => {
    res.render('deliveries'); // Render the deliveries.ejs file
});

router.get('/users', (req, res) => {
    res.render('users'); // Render the users.ejs file
});

router.get('/register', (req, res) => {
    res.render('register'); // Render the register.ejs file
});










router.get('/api/dashboard', dashboardController.getDashboard);


router.post('/api/register', userController.registerCustomer);
router.post('/api/login', userController.loginCustomer);

// User routes
router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:user_id', userController.getUser);
router.put('/api/users/:user_id', userController.updateUser);
router.delete('/api/users/:user_id', userController.deleteUser);

// Restaurant routes
router.post('/api/restaurants', restaurantController.createRestaurant);
router.get('/api/restaurants', restaurantController.getAllRestaurants);
router.get('/api/restaurants/:restaurant_id', restaurantController.getRestaurant);
router.put('/api/restaurants/:restaurant_id', restaurantController.updateRestaurant);
router.delete('/api/restaurants/:restaurant_id', restaurantController.deleteRestaurant);

// Menu routes
router.post('/api/menus', authenticateJWT, authorizeRoles('restaurant_owner', 'admin'), menuController.createMenuItem);
router.get('/api/menus', menuController.getAllMenuItems);
router.get('/api/menus/:menu_id', menuController.getMenuItem);
router.put('/api/menus/:menu_id', menuController.updateMenuItem);
router.delete('/api/menus/:menu_id', menuController.deleteMenuItem);

// Order routes
router.post('/api/orders', orderController.createOrder);
router.get('/api/orders', orderController.getAllOrders);
router.get('/api/orders/:order_id', orderController.getOrder);
router.put('/api/orders/:order_id', orderController.updateOrder);
router.delete('/api/orders/:order_id', orderController.deleteOrder);

// Delivery routes
router.post('/api/deliveries', deliveryController.createDelivery);
router.get('/api/deliveries', deliveryController.getAllDeliveries);
router.get('/api/deliveries/:delivery_id', deliveryController.getDelivery);
router.put('/api/deliveries/:delivery_id', deliveryController.updateDelivery);
router.delete('/api/deliveries/:delivery_id', deliveryController.deleteDelivery);

// Customer routes
router.post('/api/customers', customerController.createCustomer);
// router.post('/api/customers', authenticateJWT, authorizeRoles('customer', 'admin'), customerController.createCustomer);
router.get('/api/customers', customerController.getAllCustomers);
router.get('/api/customers/:customer_id', customerController.getCustomer);
router.put('/api/customers/:customer_id', customerController.updateCustomer);
router.delete('/api/customers/:customer_id', customerController.deleteCustomer);

module.exports = router;
