import React from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import './Header.css';

const Header = ({ onCreateNewTask }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onAddTask={onCreateNewTask} />
    </header>
  );
};

Header.propTypes = {
  onCreateNewTask: PropTypes.func.isRequired,
};

export default Header;
