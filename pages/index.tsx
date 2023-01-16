import { Button, Center, Container, Grid, Group, Paper, TextInput } from "@mantine/core";
import TodoInput from "@/components/todoInput";
import TodoList from "@/components/todoList";

import { useListState } from '@mantine/hooks';
import TodoListStatus from "@/components/todoListStatus";

export default function Home() {
  
  const [tasksList, handlers] = useListState<any>([]);
  

  return (
    <Container fluid>
      <TodoInput setTodoHandler={handlers} listData={tasksList} />
      <TodoList setTodoHandler={handlers} listData={tasksList}/>
      <TodoListStatus listData={tasksList} setTodoHandler={handlers}/> 
    </Container>
  )
}
