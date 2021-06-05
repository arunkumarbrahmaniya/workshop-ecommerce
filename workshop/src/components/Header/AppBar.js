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
    useEffect(() => {
        debugger;
        console.log("VALUE", value);
    }, [])
    const handleLogin = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
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
                    <Button style={{position: "relative", left: '1000px'}} variant="contained" color="secondary">
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
            <Dialog open={open} /*open={open} onClose={handleClose}*/ aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
                </DialogActions>
            </Dialog>
    </>
    )
}

export default NavigationBar;