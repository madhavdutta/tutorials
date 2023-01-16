import { Button, Center, Container, Grid, Group, Paper, TextInput, Kbd, Code } from "@mantine/core";
import { useStyle } from "@/components/todo.style";
import { UseListStateHandlers,useHotkeys } from "@mantine/hooks";
import { useRef } from 'react';
import { nanoid } from 'nanoid'

interface TodoInputProps {
    setTodoHandler: UseListStateHandlers<any>;
    listData: { id: string; task: string; isDone: boolean; }[];
}

export default function TodoListStatus({ setTodoHandler, listData }: TodoInputProps) {
    const { classes } = useStyle();
    const addInput = useRef<HTMLInputElement>(null);
    const uuid = nanoid();

    const clearList = () => {
        setTodoHandler.setState([]);
    }

    return (
        <Container fluid>
            <Grid>
                <Grid.Col span={3}>

                </Grid.Col>
                <Grid.Col span={6}>
                    <Center>
                        <Paper shadow={'xl'} w={'100%'} p={'xl'} m={'xl'} className={classes.Paper}>

                            <Group position="apart">
                                <Code>Total Tasks : {listData.length}</Code>
                                <Button variant="default" compact onClick={() => clearList()}>
                                    Clear Task List
                                </Button>
                               
                            </Group>

                        </Paper>
                    </Center>
                </Grid.Col>
                <Grid.Col span={3}>
                   
                </Grid.Col>
            </Grid>
        </Container>
    )
}
