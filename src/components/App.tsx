import { Input, Button } from "./common";

export const App = () => {
  return (
    <div>
      <Input placeholder="New task" />
      <Button onClick={ () => alert("Will be added next time") }>Add task</Button>
    </div>
  );
}
