import React from 'react';

const WorkoutsList = ({ workouts, setForm, setWorkouts }) => {
  const handleDelete = id => {
    setWorkouts(prevWorkouts =>
      prevWorkouts.filter(workout => workout.id !== id),
    );
  };

  const handleEdit = id => {
    const workout = workouts.find(item => item.id === id);
    setForm({ date: workout.date, distance: workout.distance });
    handleDelete(id);
  };

  return (
    <table className="ui basic table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Пройдено (км)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map(workout => (
          <tr key={workout.id}>
            <td>{workout.date}</td>
            <td>{workout.distance}</td>
            <td>
              <button onClick={() => handleEdit(workout.id)}>
                <i className="edit icon"></i>
              </button>
              <button onClick={() => handleDelete(workout.id)}>
                <i className="trash icon"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkoutsList;
