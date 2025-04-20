import React from 'react';
import TaskBoard from './components/TaskBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Gestion de Tâches</h1>
      <TaskBoard />
    </div>
  );
}

export default App;