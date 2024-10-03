import React, { useState } from 'react';
import './TaskBoard.css';

export const Taskboards = () => {
  const [tasks, setTasks] = useState([
    // { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'Backlog' },
    // { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'Doing' },
    // { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'Done' },
    // { id: 4, title: 'Task 4', description: 'Description for Task 4', status: 'Wont Do' }
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      status: 'Backlog'
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('taskId', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const taskId = e.dataTransfer.getData('taskId');
    const updatedTasks = tasks.map(task => {
      if (task.id.toString() === taskId) {
        return { ...task, status: status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="task-board">
      <div className="task-list" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Backlog')}>
        <h2>Backlog</h2>
        {tasks.map(task => (
          task.status === 'Backlog' && (
            <div key={task.id} className="task" draggable onDragStart={(e) => handleDragStart(e, task.id)}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          )
        ))}
      </div>
      <div className="task-list" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Doing')}>
        <h2>Doing</h2>
        {tasks.map(task => (
          task.status === 'Doing' && (
            <div key={task.id} className="task" draggable onDragStart={(e) => handleDragStart(e, task.id)}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          )
        ))}
      </div>
      <div className="task-list" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Done')}>
        <h2>Done</h2>
        {tasks.map(task => (
          task.status === 'Done' && (
            <div key={task.id} className="task" draggable onDragStart={(e) => handleDragStart(e, task.id)}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          )
        ))}
      </div>
      <div className="task-list" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'WontDo')}>
        <h2>Won't Do</h2>
        {tasks.map(task => (
          task.status === 'WontDo' && (
            <div key={task.id} className="task" draggable onDragStart={(e) => handleDragStart(e, task.id)}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          )
        ))}
      </div>
      <div className="input-form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} required />
          <textarea placeholder="Description" value={description} onChange={handleDescriptionChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

