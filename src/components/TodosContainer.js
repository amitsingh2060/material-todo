import { Box, Divider, List, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TodoItem from './TodoItem';
const useStyles = makeStyles(() => ({
    root: {
        margin: 20,
        padding: 20,
        backgroundColor: "rgb(92.9%,92.9%,92.9%)",
    },
}))

export default function TodosContainer() {
    const classes = useStyles();
    const { todos } = useSelector((state) => {
        return {
            todos: state.todos
        }
    })
    const prioritidedTodo = (function priority(){
        const importantTodos = [];
        const notImportantTodos = [];
        todos.forEach(todo => {
           if(todo.important){
            importantTodos.push(todo);
           } else {
            notImportantTodos.push(todo)
           }
           
        });
        return importantTodos.concat(notImportantTodos);
    })()
    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>Todos</Typography>
                    <Divider />
                    <List>
                        {prioritidedTodo.map((todo) => {
                            if(!todo.completed){
                                return <TodoItem {...todo}/>
                            } else {
                                return null;
                            }
                        })}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography align="left" variant="h5" gutterBottom>Completed</Typography>
                    <Divider />
                    <List>
                        {prioritidedTodo.map((todo) => {
                            if(todo.completed){
                                return <TodoItem {...todo}/>
                            } else {
                                return null;
                            }
                        })}
                    </List>
                </Grid>
            </Grid>

        </Box>

    )
}

