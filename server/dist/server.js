import express from 'express';
import connection from './config/connection.js';
import User from './models/User.js';
const app = express();
const PORT = process.env.PORT || 3333;
// Middleware
// Allows json to be attached to req.body in our routes
app.use(express.json());
// Create a POST route that creates a user in the collection using your User model and sends back the user object as a JSON response
app.post('/api/users', async (req, res) => {
    try {
        // If req.body is the user's information(email, password), how do I use the model to create the user with req.body?
        const user = await User.create(req.body);
        res.json({
            user: user
        });
    }
    catch (error) {
        const errors = [];
        if (error.code === 11000) {
            errors.push('That email address is already in use');
        }
        else {
            for (const prop in error.errors) {
                errors.push(error.errors[prop].message);
            }
        }
        res.status(403).json({
            errors: errors
        });
    }
});
// Create a GET route that sends back all users from the collection
app.get('/api/users', async (_, res) => {
    const users = await User.find();
    res.json({
        users: users
    });
});
connection.once('open', () => {
    app.listen(PORT, () => {
        console.log('Express server started on', PORT);
    });
});
