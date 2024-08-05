import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import styles from "./ConfirmDialog.module.css"

export default function ConfirmDialog({
    open,
    onClose,
    onProceed,
    title,
    message
}) {
    
    return (
        <Dialog
        className={styles.dialog}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogTitle className={styles.title} id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent className={styles.content}>
                <DialogContentText className={styles.message} id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button className={styles.cancel} variant="outlined" onClick={onClose}>Cancel</Button>
                <Button className={styles.proceed} variant="outlined" onClick={onProceed}>
                    Proceed
                </Button>
            </DialogActions>
      </Dialog>
    );
}