const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);

mongoose.connect('mongodb://mongo:27017/tasksdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.listen(8082, () => {
  console.log('Tasks service running on port 8082');
});