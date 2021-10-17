import React from 'react';
import { Box, Container, makeStyles, Paper } from '@material-ui/core';

import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import AddTodo from './components/AddTodo';
import TodosContainer from './components/TodosContainer';

const useStyles = makeStyles((theme) => ({
    root: {},
    appContainer: {
        paddingLeft: 100,
        paddingRight: 100,
        marginTop: 100,
    },
    wrapper: {
        textAlign: "center",
        width: "100%",
    },
}))

function AmitApp() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        Om
                    </IconButton>
                    <Typography variant="h5" component="h2">
                        Todos
                    </Typography>

                </Toolbar>
            </AppBar>
            <Container className={classes.appContainer}>
                <Paper className={classes.wrapper} elevation={0}>
                    <AddTodo />
                    <TodosContainer />
                </Paper>
            </Container>
        </Box>
    );
}


export default AmitApp;