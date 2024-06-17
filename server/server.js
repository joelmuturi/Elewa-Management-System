import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './database';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/create-department', async (req, res) => {
  const { departmentName } = req.body;
  const sql = 'INSERT INTO departments (name) VALUES (@name)';
  
  try {
    const request = pool.request();
    request.input('name', departmentName);
    await request.query(sql);
    res.send('Department created');
  } catch (err) {
    console.error('SQL error', err);
    res.status(500).send('Server error');
  }
});

// Additional endpoints for other functionalities

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
