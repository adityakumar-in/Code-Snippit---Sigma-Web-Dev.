import express from 'express';
import Transaction from './models/TransactionSchema.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(cors()) 
app.use(bodyParser.json())

connectMongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Create a new transaction in the database
app.post('/', async (req, res) => {
  const transactionData = req.body; // Getting data from client
  console.log('Received Data: ', transactionData); 

  try {
    const transaction = new Transaction(transactionData);
    await transaction.save();
    res.json ({ message: 'Transaction saved successfully'});
  } catch (error) {
    console.error("error saving transaction: ", error);
    res.status(500).json({ error: 'Failed to save transaction'});
  }
});


// Delete a transaction from the database
app.delete('/', async (req, res) => {
  const transactionData = req.body; // Getting data from client
  console.log('Received Data: ', transactionData);

  try {
    const result = await Transaction.deleteOne({ id: transactionData.id }); // Delete one that matches id

    if(result.deletedCount === 1) {
      res.json({ message: 'Transaction deleted successfully'});
    } else {
      res.status(404).json({ error: 'Transaction not found'});
    }
  } catch (error) {
    console.error("error saving transaction: ", error);
    res.status(500).json({ error: 'Internal Server Error'});
  }
});


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});