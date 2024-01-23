import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';


const Task = ({ taskItem }) => {
    return (
        <>
            <span className="description">{taskItem.description}</span>
            <span className="created">{taskItem.created}</span>
        </>
    );
};

Task.propTypes = {
    taskItem: PropTypes.shape({
      description: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }).isRequired,
  };


export default Task;