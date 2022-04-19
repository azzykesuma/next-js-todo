// appbar
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// typography
import Typography from '@mui/material/Typography';
// button
import Button from '@mui/material/Button';
// avatar
import Avatar from '@mui/material/Avatar';

const Header = () => {
    const headerList = [
        {
            title : 'Home',
            path : '/'
        },
        {
            title : 'New Note',
            path : '/NewTodo'
        }
    ]

    return (
        <div className="header">
            <AppBar>
                <Toolbar>
                    {headerList.map(item => (
                        <Button variant="text" key={item.title} href={item.path}>
                            <Typography variant="header">{item.title}</Typography>
                        </Button>
                    ))}
                    <Avatar 
                    alt="Azzy"
                    src="/Ava.jpg"
                    className="Avatar"
                    />
                    <Typography variant="body">
                        Azzy
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
 
export default Header;