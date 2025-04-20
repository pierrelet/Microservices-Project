import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('');

  const createTask = async () => {
    await axios.post('http://localhost:8082/tasks', { title });
    setTitle('');
    onTaskCreated();
  };

  return (
    <div>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Titre de la tâche"
      />
      <button onClick={createTask}>Ajouter</button>
    </div>
  );
}

export default TaskForm;