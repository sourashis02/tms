import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './Footer.module.css';

const fabstyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};
const Footer = () => {
    console.log(styles)
    return (
        <div className={styles.divFab}>
            <Fab sx={fabstyle} color="primary" aria-label="arrowright">
                <ArrowForwardIosIcon />
            </Fab>
        </div>
    )
}
export default Footer