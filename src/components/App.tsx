import { Component } from 'react';
import { Input, Button, Checkbox, Radiogroup } from "./common";
import css from './styles.module.css';

interface AppProps {
  className?: string;
}

interface AppState {
  newTaskInput: string;
  taskList: Task[];
  filter: string;
}

interface Task {
  id: number;
  label: string;
  isDone: boolean;
}

export class App extends Component<AppProps, AppState>{
  state: AppState ={
    newTaskInput: '',
    taskList: [{ id: 1, label: 'Выучить JS', isDone: true }, { id: 2, label: 'Выучить React', isDone: false }],
    filter: 'all',
  };

  filters = [
    { id: '1', label: 'All', value: 'all'},
    { id: '2', label: 'To do', value: 'do'},
    { id: '3', label: 'Done', value: 'done'},
  ];

  localStorageKey = 'taskList';

  addTaskHandler = () => {
    if (!this.state.newTaskInput.trim().length) {
      return alert('Invalid task value');
    }
    this.setState((prevState) => ({
      taskList: [...prevState.taskList, {id: prevState.taskList.length + 1, label: prevState.newTaskInput, isDone: false}],
      newTaskInput: '',
    }));
  }

  deleteTaskHandler = (id: Task['id']) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.filter((task) => task.id !== id)
    }))
  }

  toggleTaskHandler = (id: Task['id']) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.map((task) => task.id === id ? { ...task, isDone: !task.isDone} : task),
    }))
  }

  changeFilterHandler = (filter: string) => {
    this.setState({ filter })
  }

  componentDidMount() {
    const taskList = JSON.parse(localStorage.getItem(this.localStorageKey) ?? '[]');

    if (taskList.length) {
      this.setState({ taskList });
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.taskList !== this.state.taskList) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.state.taskList));
    }
  }

  render () {
    return (
      <div className={css.container}>
        <div className={css.addingField}>
          <Input placeholder='New task' value={ this.state.newTaskInput } onChange={ (e) => this.setState({ newTaskInput: e.target.value })}/>
          <Button onClick={ this.addTaskHandler }>Add task</Button>
        </div>
        <Radiogroup items={ this.filters } name="filter" value={ this.state.filter } onChange={ this.changeFilterHandler } />
        <ul className={css.list}>
          {this.state.taskList
            .filter((task) => {
              if(this.state.filter === 'all'){
                return true;
              }
              if(this.state.filter === 'do'){
                return !task.isDone;
              }
              return task.isDone;
            })
            .map((task) => (
              <li className={css.listItem} key={task.id}>
                <Checkbox checked={ task.isDone } id={task.id} value={task.label} onChange={ () => this.toggleTaskHandler(task.id)}/>
                {task.isDone && <Button type='delete' onClick={ () => this.deleteTaskHandler(task.id) }>Delete</Button>}
              </li>
            ))
          }
        </ul>
      </div>
    );
  };
}
