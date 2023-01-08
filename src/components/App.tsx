import { Input, Button, Checkbox } from "./common";

const tasks = [{ id: 1, label: 'Выучить JS', isDone: true }, { id: 2, label: 'Выучить React', isDone: false }];
export const App = () => {
  return (
    <div>
      <Input placeholder="New task" />
      <Button onClick={ () => alert("Will be added next time") }>Add task</Button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Checkbox checked={ task.isDone } id={task.id} value={task.label} />
            {task.isDone && <Button onClick={ () => alert("Will be deleted next time") }>Delete</Button>}
          </li>
        ))
        }
      </ul>
    </div>
  );
}
