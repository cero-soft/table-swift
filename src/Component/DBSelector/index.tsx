import React, {useState} from 'react';
import { makeStyles,  createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import { Modal, Fade, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(3),
            outline: 'none',
        },
    }),
);

interface DatabaseModalProps {
    open: boolean;
    onClose: () => void;
}

const DatabaseSelector: React.FC<DatabaseModalProps> = ({ open, onClose }) => {
    const classes = useStyles();
    const [selectedDatabase, setSelectedDatabase] = useState('');

    const handleDatabaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDatabase(event.target.value);
    };

    const handleConfirm = () => {
        // Handle confirmation logic here
        console.log('Selected database:', selectedDatabase);
        onClose();
    };

    return (
        <Modal
            className={classes.modal}
            open={open}
            onClose={onClose}
            closeAfterTransition
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h2>Select Database</h2>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Choose a database:</FormLabel>
                        <RadioGroup aria-label="database" name="database" value={selectedDatabase} onChange={handleDatabaseChange}>
                            <FormControlLabel value="mysql" control={<Radio />} label="MySQL" />
                            <FormControlLabel value="postgresql" control={<Radio />} label="PostgreSQL" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={handleConfirm}>Confirm</Button>
                </div>
            </Fade>
        </Modal>
    );
};

export default DatabaseSelector;
