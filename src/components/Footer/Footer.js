import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

const Footer = ({ filter, updateFilter, clearCompletedTasks, activeTasks }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasks} items left</span>
      <TasksFilter filter={filter} onUpdateFilter={updateFilter} />
      <button className="clear-completed" onClick={() => clearCompletedTasks()}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
  clearCompletedTasks: PropTypes.func.isRequired,
  activeTasks: PropTypes.number.isRequired,
};

Footer.defaultProps = {
  filter: 'All',
  updateFilter: () => {},
  clearCompletedTasks: () => {},
  activeTasks: 0,
};

export default Footer;