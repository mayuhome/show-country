import { InputAdornment, TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

interface ISearchPanelProps {
    param: string;
    setParam: (param: string) => void;
}

export const SearchPanelCompoent = ({param, setParam}: ISearchPanelProps) => {
    return <div>
        <TextField fullWidth={true} 
        // InputProps={{
        //     startAdornment: (
        //         <InputAdornment position='start'>
        //             </>
        //         </InputAdornment>
        //     )
        // }}
        id="outlined-basic" label="Country Name" variant="outlined" value={param} onChange={(evt) => setParam(evt.target.value)} placeholder='Please input country name'/>
    </div>
}