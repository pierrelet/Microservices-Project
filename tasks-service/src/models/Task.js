const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    enum: ['todo', 'inprogress', 'done'],
    default: 'todo'
  }
});

module.exports = mongoose.model('Task', TaskSchema);