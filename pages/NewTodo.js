import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Newtodo = () => {
    return (
        <div className='todo'>
            <Typography
                Variant="h1"            
            >
                New Todo
            </Typography>
            <TextField 
            id="outlined-basic"
            label="Outlined"
            variant="outlined" />
        </div>
    );
}
 
export default Newtodo;