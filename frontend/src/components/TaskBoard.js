import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';

function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await axios.get('http://localhost:8082/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <TaskForm onTaskCreated={loadTasks} />
      <div style={{ display: 'flex', gap: '2rem' }}>
        {['todo', 'inprogress', 'done'].map(status => (
          <div key={status}>
            <h3>{status.toUpperCase()}</h3>
            {tasks.filter(t => t.status === status).map(t => (
              <div key={t._id}>{t.title}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;