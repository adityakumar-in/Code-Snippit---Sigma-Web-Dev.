import express from 'express';
import Transaction from './models/TransactionSchema.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

connectMongoDB();

// Fetch all transactions from the database - main fetching is in frontend check that
app.get('/fetch', async (req, res) => {
  try {
    const transactions = await Transaction.find(); // fetch all transactions
    console.log(transactions)
    res.json(transactions);
  } catch (error) {
    console.error("error fetching transactions: ", error);
    res.status(500).json({ error: 'Failed to fetch transactions'});
  }
});

// FrontEnd Code for fetching data
const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/fetch', {
        method: 'GET'
        });
        const data = await response.json();
        await setTransactions([...data]);
    } catch (error) {
        console.error(error);
    }
};

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});