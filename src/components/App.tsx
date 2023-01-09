import { Input, Button, Checkbox, Radiogroup } from "./common";
import css from './styles.module.css';

const filters = [
  { id: '1', label: 'All', value: 'all'},
  { id: '2', label: 'To do', value: 'do'},
  { id: '3', label: 'Done', value: 'done'},
];

const filterState: string = 'all';

const tasks = [{ id: 1, label: 'Выучить JS', isDone: true }, { id: 2, label: 'Выучить React', isDone: false }];
export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.addingField}>
        <Input placeholder='New task' />
        <Button onClick={ () => alert('Will be added next time') }>Add task</Button>
      </div>
      <Radiogroup items={ filters } name="filter" value={ filterState } />
      <ul className={css.list}>
        {tasks
          .filter((task) => {
            if(filterState === 'all'){
              return true;
            }
            if(filterState === 'do'){
              return !task.isDone;
            }
            return task.isDone;
          })
          .map((task) => (
          <li className={css.listItem} key={task.id}>
            <Checkbox checked={ task.isDone } id={task.id} value={task.label} />
            {task.isDone && <Button type='delete' onClick={ () => alert('Will be deleted next time') }>Delete</Button>}
          </li>
        ))
        }
      </ul>
    </div>
  );
}
