import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
const NavigationBar = () => {
    const [value, setValue] = useState('DEFAULT');
    const [open, setOpen] = useState(false);
    const [register, setRegister] = useState(false);
    useEffect(() => {
        debugger;
        console.log("VALUE", value);
    }, [])
    const handleLogin = () => {
        setOpen(!open);
    }
    const handleRegister = () => {
        setRegister(!register);
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    News
                </Typography>
                    <Button onClick={handleLogin} style={{ position: "relative", left: '1200px' }} color="inherit">
                        Login
                    </Button>
                    <Button onClick={handleRegister} style={{position: "relative", left: '1000px'}} variant="contained" color="secondary">
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
            <Dialog maxWidth="sm" fullWidth={true} open={open} /*open={open} onClose={handleClose}*/ aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username/Email Address"
                    type="email"
                    fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                    
                </DialogContent>
                <DialogActions>
                <Button onClick={handleLogin} color="primary">
                    Close
                </Button>
                <Button  color="primary">
                    Login
                </Button>
                </DialogActions>
            </Dialog>
            <Dialog maxWidth="sm" fullWidth={true} open={register} /*open={open} onClose={handleClose}*/ aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Register</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Name"
                    type="email"
                    fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Contact"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Address"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleRegister} color="primary">
                        Close
                </Button>
                <Button color="primary">
                    Register
                </Button>
                </DialogActions>
            </Dialog>
    </>
    )
}

export default NavigationBar;