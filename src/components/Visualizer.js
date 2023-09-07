import { React , useState} from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import BorderedArray from './BorderedArray.js';
import '../styles/Visualizer.css'

function Visualizer() {
  const [algo, setAlgo] = useState('');
  const [currPicked , setCurrPicked] = useState("");
  const [currColor, setCurrColor] = useState("white")

  const handleChange = (e) => { 
    setAlgo(e.target.value);
  };
  return (
    <div className='Visualizer'>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 160 }}>
        <InputLabel sx={{ color: "#01F9C6", fontSize: 15 }} >Sorting Algorithm</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={algo}
          onChange={handleChange}
          sx={{ color: "white" }}
        >
          <MenuItem value={10}>Insertion Sort</MenuItem>
          <MenuItem value={20}>Bubble Sort</MenuItem>
        </Select>
      </FormControl>
      {currPicked ? (
        <div className='curr-picked'          
            style={{
              backgroundColor: currColor,
              fontSize: `20px`,
            }}
        >
          {`${currPicked}`}
        </div>
      ) : null}
      <BorderedArray setCurrPicked={setCurrPicked} setCurrColor={setCurrColor} />
    </div>
  );
}

export default Visualizer