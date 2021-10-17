import { Box, TextField } from '@material-ui/core'
import React, { useState , useRef} from 'react'
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
// import  from '@material-ui/core/TextField';
// or
// import { TextField } from '@material-ui/core';
import { ADD_TODO } from '../redux/actions';

function AddTodo() {
    const [title, setTitle] = useState(null)
    const titleFieldRef = useRef(null)
    const dispatch = useDispatch()

    function handleTextChange(e) {
        setTitle(e.target.value)
    }
    
    function addTodoItem() {
       if(title){
        dispatch({
            type:ADD_TODO,
            payload:{
                title,
            }
        })
        setTitle(null);
        titleFieldRef.current.value = ""
       }
    }
    return (
        <Box>
            <TextField
                style={{ width: 400 }}
                variant="filled"
                label="Add todo"
                onChange={handleTextChange}
                inputRef = {titleFieldRef}
            />
            <Button
                style={{ height: 55 }}
                variant="contained"
                color="primary"
                onClick={addTodoItem}
            >
                Add
            </Button>
        </Box>
    )
}

export default AddTodo
