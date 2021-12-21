import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const fabstyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};
const Footer = () => {
    return (
        <div>
            <Fab sx={fabstyle} color="primary" aria-label="arrowright">
                <ArrowForwardIosIcon />
            </Fab>
        </div>
    )
}
export default Footer