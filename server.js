const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'sabub5', // Change if needed
    database: 'phone_store',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error("Database Connection Failed:", err);
        return;
    }
    console.log("Connected to MySQL database.");
});

// Save Order to Database
app.post('/save-order', (req, res) => {
    const { items, totalCost, totalItems } = req.body;

    if (!items || items.length === 0) {
        return res.status(400).json({ error: "No items in the order." });
    }

    const orderQuery = "INSERT INTO orders (order_details, total_items, total_cost) VALUES (?, ?, ?)";
    
    db.query(orderQuery, [JSON.stringify(items), totalItems, totalCost], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Failed to save order." });
        }
        res.status(200).json({ message: "Order saved successfully!" });
    });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
