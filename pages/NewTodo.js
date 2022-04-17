// react
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// general
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
// forms
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// box
import Box from '@mui/material/Box';
// button
import Button from '@mui/material/Button';


const Newtodo = () => {
    const [act,setAct] = useState('');
    const [priority,setPriority] = useState('High');
    const [tags,setTags] = useState('Routine');
    // errors
    const [actError,setActError] = useState(false)

    // const history = useHistory();


    const handleSubmit = e => {
        e.preventDefault();
        console.log(act,priority,tags);
        // reseting error to false
        setActError(false);

        // validating forms
        if(act == ''){
            setActError(true);
        }

        // posting to json
        if(act && priority && tags) {
            fetch('http://localhost:8000/acts', {
                method : 'POST',
                headers : {'Content-type' : 'application/json'},
                body : JSON.stringify({act,priority,tags})
            })
           .then(() => {
               redirect : {
                   destination : '/'
               }
           })
        }
    }
    return (
        <Container className='todo'>
            <Typography
                variant="h4"
                color="primary"
                gutterBottom        
            >
                New Todo
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                id="outlined-basic"
                label="Add Activity"
                variant="outlined"
                placeholder='E.g : Go to the gym'
                fullWidth
                color='secondary'
                margin='normal'
                value={act}
                onChange={e => setAct(e.target.value)}
                error={actError}
                />

                <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom : '1em'
                }}
                >
                    <FormControl
                    fullWidth
                    >
                        <InputLabel id='priority' margin='dense'>Priority</InputLabel>
                        <Select
                        labelId="priority"
                        id="id-select"
                        label="Priority"
                        value={priority}
                        onChange={e => setPriority(e.target.value)}
                        >
                            <MenuItem value='High'>High</MenuItem>
                            <MenuItem value='Medium'>Medium</MenuItem>
                            <MenuItem value='Low'>Low</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl
                    fullWidth
                    >
                        <InputLabel id='tags' margin='dense'>Tags</InputLabel>
                        <Select
                        labelId="tags"
                        id="id-tags"
                        label="Tags"
                        value={tags}
                        onChange={e => setTags(e.target.value)}
                        >
                            <MenuItem value='Routine'>Routine</MenuItem>
                            <MenuItem value='Self-care'>Self-care</MenuItem>
                            <MenuItem value='Work'>Work</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button 
                variant="contained"
                type='submit'
                color="primary"
                >Add Activity
                </Button>
            </form>
        </Container>
    );
}
 
export default Newtodo;