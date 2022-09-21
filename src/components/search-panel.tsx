import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchPanelProps {
    param: string;
    setParam: (param: string) => void;
}

export const SearchPanelCompoent = ({param, setParam}:ISearchPanelProps) => {

    return <div>
        <TextField fullWidth={true} 
        sx={{
            '& legend': { display: 'none' },
            '& fieldset': { top: 0 },
        }}
        InputProps={{
            startAdornment: (
                <InputAdornment position='start'>
                    <SearchIcon/>
                </InputAdornment>
            ),
            
        }}
         value={param} onChange={(evt) => setParam(evt.target.value)} placeholder='Search for a country...'/>
    </div>
}