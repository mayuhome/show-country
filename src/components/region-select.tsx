import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { ERegion, RegionList } from '../utils/region';


interface IRegionSelectProps {
    region: ERegion | undefined;
    setRegion: (region: ERegion) => void;
}

export const RegionSelectComponent = ({region, setRegion}: IRegionSelectProps) => {
    
    return <FormControl fullWidth>
    {/* <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel> */}
    <Select
      // labelId="demo-simple-select-label"
      sx={{
        '& legend': { display: 'none' },
        '& fieldset': { top: 0 },
    }}
      value={region}
      // label="Region"
      onChange={evt => setRegion(evt.target.value as ERegion)}
    >
    {RegionList.map(region => <MenuItem key={region} value={region}>{region}</MenuItem>)}
    </Select>
  </FormControl>
}