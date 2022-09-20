import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { ERegion, RegionList } from '../utils/region';

export const RegionSelectComponent = () => {
    const [region, setRegion]=useState<ERegion>();
    return <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Region</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={region}
      label="Region"
      onChange={evt => setRegion(evt.target.value as ERegion)}
    >
    {RegionList.map(region => <MenuItem key={region} value={region}>{region}</MenuItem>)}
    </Select>
  </FormControl>
}