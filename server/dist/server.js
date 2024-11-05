import express from 'express';
import connection from './config/connection.js';
const app = express();
const PORT = process.env.PORT || 3333;
app.get('/api/test', (_, res) => {
    res.json({
        message: 'Hi from server'
    });
});
connection.once('open', () => {
    app.listen(PORT, () => {
        console.log('Express server started on', PORT);
    });
});
