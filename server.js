const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');
const employeeRoutes = require('./routes/EmployeeRoutes');

const app = express();
app.use(express.json());

// Updated connection string
mongoose.connect('mongodb+srv://karmpatels:chandrika%2376@karmpatels.wlqbe.mongodb.net/?retryWrites=true&w=majority&appName=karmpatels')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;