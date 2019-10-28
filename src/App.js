import React, { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import WorkoutsList from './components/WorkoutsList';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({ date: '', distance: '' });
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AddForm form={form} setForm={setForm} setWorkouts={setWorkouts} />
        <WorkoutsList
          workouts={workouts}
          setForm={setForm}
          setWorkouts={setWorkouts}
        />
      </div>
    </div>
  );
}

export default App;
