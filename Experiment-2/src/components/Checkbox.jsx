import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckboxBasic() {
    return (
        <Box>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />
        </Box>
    );
}
