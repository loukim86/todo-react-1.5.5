import React from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.css';

const TasksFilter = ({ filter, onUpdateFilter }) => {
  const filters = [
    { state: 'all', label: 'All' },
    { state: 'active', label: 'Active' },
    { state: 'completed', label: 'Completed' },
  ];

  return (
    <ul className="filters">
      {filters.map(({ state, label }) => (
        <li key={state}>
          <button className={state === filter ? 'selected' : ''} onClick={() => onUpdateFilter(state)}>
            {label}
          </button>
        </li>
      ))}
      ;
    </ul>
  );
};

TasksFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onUpdateFilter: PropTypes.func.isRequired,
};

export default TasksFilter;
