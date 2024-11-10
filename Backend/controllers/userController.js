const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');

const userController = {
    // Create a new user
    createUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Read all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Read a single user
    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.user_id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update a user
    updateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.user_id, req.body, { new: true });
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a user
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.user_id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Register a new customer
    registerCustomer: async (req, res) => {
        const { name, email, password } = req.body;

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password_hash: passwordHash,
            role: 'customer', // Assign role
        });

        await newUser.save();
        const token = generateToken(newUser);
        res.status(201).json({ token });
    },

    // Customer login
    loginCustomer: async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        
        if (!user || !(await bcrypt.compare(password, user.password_hash))) {
            req.flash('error', 'Invalid email or password');
            return res.redirect('/login');
        }
        var token = generateToken(user);
        req.session.token = token;

        req.flash('success', 'Login successful');
        res.json({token: token,message: req.flash('success') });
    },
};

module.exports = userController;
