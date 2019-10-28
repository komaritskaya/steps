import React from 'react';
import PropTypes from 'prop-types';
import WorkoutModel from '../models/WorkoutModel';
import shortid from 'shortid';

const AddForm = ({ form, setForm, setWorkouts }) => {
  const handleChange = evt => {
    const { name, value } = evt.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const workout = new WorkoutModel(
      shortid.generate(),
      form.date,
      form.distance,
    );
    setWorkouts(prevWorkouts => {
      for (let prevWorkout of prevWorkouts) {
        if (prevWorkout.date === workout.date) {
          prevWorkout.distance =
            Number(prevWorkout.distance) + Number(workout.distance);
          return prevWorkouts.sort(sortItems);
        }
      }
      return [...prevWorkouts, workout].sort(sortItems);
    });
    setForm({ date: '', distance: '' });
  };

  const sortItems = (date1, date2) => {
    if (date1.date > date2.date) return -1;
    if (date1.date < date2.date) return 1;
    return 0;
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="two fields">
        <div className="field">
          <label htmlFor="date">Дата</label>
          <div className="ui input left icon">
            <i className="calendar icon"></i>
            <input
              type="date"
              id="date"
              name="date"
              className="ui calendar"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="distance">Пройдено (км)</label>
          <input
            type="number"
            step="any"
            name="distance"
            id="distance"
            value={form.distance}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button className="ui button" type="submit">
        Добавить
      </button>
    </form>
  );
};

AddForm.propTypes = {
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  setWorkouts: PropTypes.func.isRequired,
};

export default AddForm;
