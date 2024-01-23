import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';

import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, state: 'completed', description: 'Completed task', created: 'created 17 seconds ago' },
        { id: 2, state: 'active', description: 'Editing task', created: 'created 5 minutes ago' },
        { id: 3, state: 'active', description: 'Active task', created: 'created 5 minutes ago' },
      ],
      filter: 'all',
    };
  }

  handleAddTask = (itemValue) => {
    const id = this.state.tasks.length + 1;
    const state = '';
    const description = itemValue;
    const created = formatDistanceToNow(new Date(), { addSuffix: true });
    this.setState(({ tasks }) => ({
      tasks: [...tasks, { id, state, description, created }],
    }));
  };

  changeTaskContent = (id, newState) => {
    this.setState(({ tasks }) => {
      const taskDataLeft = tasks.map((item) => {
        if (item.id === id) {
          return newState(item);
        }
        return item;
      });
      return { tasks: taskDataLeft };
    });
  };

  onEditTask = (id, text) => {
    this.changeTaskContent(id, (item) => {
      const taskDescription = text;
      const taskStatus = 'active';
      return { ...item, state: taskStatus, description: taskDescription };
    });
  };

  onUpdateStatusTask = (id) => {
    this.changeTaskContent(id, (item) => {
      const taskStatus = 'editing';
      return { ...item, state: taskStatus };
    });
  };

  onToggleTaskStatus = (id) => {
    this.changeTaskContent(id, (item) => {
      const taskStatus = item.state === 'completed' ? 'active' : 'completed';
      return { ...item, state: taskStatus };
    });
  };

  onDeleteTask = (id) => {
    this.setState(({ tasks }) => {
      const taskItemsLeft = tasks.filter((item) => item.id !== id);
      return { tasks: taskItemsLeft };
    });
  };
  clearCompletedTasks = () => {
    const taskCompleted = this.filterTasks(this.state.tasks, 'completed');
    taskCompleted.forEach((el) => {
      this.onDeleteTask(el.id);
    });
  };

  updateFilter = (filter) => {
    this.setState({ filter });
  };

  filterTasks = (tasks, filter) => {
    if (filter !== 'all') {
      return tasks.filter((el) => el.state === filter);
    }
    return tasks;
  };

  countActive = (tasks) => {
    return tasks.filter((el) => el.state !== 'completed').length;
  };

  render() {
    const tasks = this.filterTasks(this.state.tasks, this.state.filter);
    const activeTasks = this.countActive(this.state.tasks);

    return (
      <section className="todoapp">
        <Header onCreateNewTask={this.handleAddTask} />
        <section className="main">
          <TaskList
            taskData={tasks}
            onToggle={this.onToggleTaskStatus}
            onDelete={this.onDeleteTask}
            onUpdateStatusTask={this.onUpdateStatusTask}
            onEditTask={this.onEditTask}
          />
          <Footer
            filter={this.state.filter}
            updateFilter={this.updateFilter}
            clearCompletedTasks={this.clearCompletedTasks}
            activeTasks={activeTasks}
          />
        </section>
      </section>
    );
  } 
};