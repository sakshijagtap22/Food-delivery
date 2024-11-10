const Customer = require('../models/Customer');
const { generateToken } = require('../utils/jwt');

const customerController = {
    createCustomer: async (req, res) => {
        try {
            const newCustomer = new Customer(req.body);
            await newCustomer.save();
            res.status(201).json(newCustomer);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getAllCustomers: async (req, res) => {
        try {
            const customers = await Customer.find();
            console.log(customers);
            res.status(200).json(customers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getCustomer: async (req, res) => {
        try {
            const customer = await Customer.findById(req.params.customer_id);
            if (!customer) return res.status(404).json({ message: 'Customer not found' });
            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateCustomer: async (req, res) => {
        try {
            const customer = await Customer.findByIdAndUpdate(req.params.customer_id, req.body, { new: true });
            if (!customer) return res.status(404).json({ message: 'Customer not found' });
            res.status(200).json(customer);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteCustomer: async (req, res) => {
        try {
            const customer = await Customer.findByIdAndDelete(req.params.customer_id);
            if (!customer) return res.status(404).json({ message: 'Customer not found' });
            res.status(200).json({ message: 'Customer deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = customerController;
