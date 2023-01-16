import { Button, Center, Container, Grid, Group, Paper, TextInput, Kbd } from "@mantine/core";
import { useStyle } from "@/components/todo.style";
import { UseListStateHandlers, getHotkeyHandler, useHotkeys } from "@mantine/hooks";
import { useRef } from 'react';
import { nanoid } from 'nanoid'

interface TodoInputProps {
    setTodoHandler: UseListStateHandlers<any>;
    listData: { id: string; task: string; isDone: boolean; }[];
}

export default function TodoInput({ setTodoHandler, listData }: TodoInputProps) {
    const { classes } = useStyle();
    const addInput = useRef<HTMLInputElement>(null);
    const uuid = nanoid();

    const addTodo = () => {
        if (addInput.current) {
            
            setTodoHandler.append({ id: uuid, task: addInput.current.value, isDone: false });
            addInput.current.value = '';
        }
    }

    return (
        <Container fluid>
            <Grid>
                <Grid.Col span={3}></Grid.Col>
                <Grid.Col span={6}>
                    <Center>
                        <Paper shadow={'xl'} w={'100%'} p={'xl'} m={'xl'} className={classes.Paper}>

                            <Group noWrap>
                                <Button color="default" className={classes.todoButton} onClick={() => addTodo()}>+</Button>
                                <TextInput
                                    placeholder="Add Todo"
                                    variant="unstyled"
                                    size={'lg'}
                                    className={classes.todoinput}
                                    ref={addInput}
                                    rightSection={<><Kbd>Enter</Kbd></>}
                                    style={{ paddingRight: '10px' }}
                                    onKeyDown={getHotkeyHandler([
                                        ['enter', addTodo],
                                    ])}
                                />
                            </Group>

                        </Paper>
                    </Center>
                </Grid.Col>
                <Grid.Col span={3}> </Grid.Col>
            </Grid>
        </Container>
    )
}
