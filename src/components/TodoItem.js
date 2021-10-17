import { IconButton, ListItem, ListItemSecondaryAction, Typography } from '@material-ui/core'
import React from 'react'

import { useDispatch } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TOGGLE_TODO, DEL_TODO, TOGGLE_IMP } from '../redux/actions'
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
function TodoItem({ id, title, completed, important }) {
    const dispatch = useDispatch();

    function toggleCheckBox() {
        // todo - need to dispatch toggle action
        dispatch({
            type: TOGGLE_TODO,
            payload:{
                id,
            },
        })
    }
    function handleDelete(){
        dispatch({
            type:DEL_TODO,
            payload:{
                id,
            }
        })
    }
    function toggleImportant(){
        dispatch({
            type:TOGGLE_IMP,
            payload:{
                id,
            }
        })
    }
    return (
        <ListItem dense>
            <FormGroup >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={completed}
                            onChange={toggleCheckBox}
                            name={title}
                            color="primary"
                        />
                    }
                    label={<Typography
                        style={{
                            textDecoration: completed && 'line-through',
                        }}>
                        {title}
                    </Typography>}
                ></FormControlLabel>
            </FormGroup>
            <ListItemSecondaryAction>
            <IconButton edge="end" onClick={toggleImportant}>
                {important ? <StarIcon/> : <StarOutlineIcon/>}
            </IconButton>
                <IconButton onClick={handleDelete} edge="end">
                    <DeleteIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoItem
