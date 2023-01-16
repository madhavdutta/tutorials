import { Button, Center, Checkbox, CheckboxIcon, Code, Container, Grid, Group, Paper, ScrollArea, Stack, Text, createStyles } from "@mantine/core";
import { useStyle } from "@/components/todo.style";
import { IconX, } from '@tabler/icons';
import { UseListStateHandlers, useListState, useScrollIntoView } from "@mantine/hooks";
import { useRef } from "react";

interface TodoInputProps {
    setTodoHandler: UseListStateHandlers<any>;
    listData: { id: string; task: string; isDone: boolean; }[];
}

export default function TodoList({ setTodoHandler, listData }: TodoInputProps) {
    const { classes, theme } = useStyle();
    const viewport = useRef<HTMLDivElement>(null);
    const scrollableTo = Number(viewport?.current?.scrollHeight);

    const RemoveTask = (e: any) => {
        
        console.log(e.value);
        const index = e.getAttribute('data-index');
        // setTodoHandler.remove(index);
    }
    const scrollToBottom = () => viewport?.current?.scrollTo({ top: scrollableTo, behavior: 'smooth' });

    let taskListData = (listData.length > 0) ? (
        listData.map((item: any, index: any) => {
            if (item.task != '') {
                scrollToBottom();
                return (<Paper key={index} className={classes.item} shadow={'xl'}>
                    <Group noWrap left={0} align={'center'}><Checkbox key={item.id} checked={item.isDone} onChange={(e)=>RemoveTask(e.currentTarget)} color={'gray'} size="xl" radius={'xl'} /><Code style={{ fontSize: '16px', padding: '5px 20px'}}>{item.isDone?<s>item.task</s>:item.task}</Code></Group>
                </Paper>
                )
            }

        }
        )) : (
        <Paper className={classes.item} shadow={'xl'}>
            <Group>
                <Paper className={classes.checkButton} p={9}><IconX size={30} color="gray" /></Paper>
                <Code style={{ fontSize: '16px', padding: '5px 20px' }}>No Tasks Found!</Code>
            </Group>
        </Paper>
    );


    return (
        <Container fluid>
            <Grid>
                <Grid.Col span={3}>

                </Grid.Col>
                <Grid.Col span={6}>
                    <ScrollArea h={'500px'} viewportRef={viewport} offsetScrollbars scrollbarSize={20}>
                        <Center>
                            <Stack w="100%" style={{ paddingLeft: 25, paddingRight: 5 }} spacing="xs" align="flex-start" justify="flex-start">
                                {taskListData}
                            </Stack>
                        </Center>
                    </ScrollArea>
                </Grid.Col>
                <Grid.Col span={3}>

                </Grid.Col>
            </Grid>
        </Container>
    )
}
