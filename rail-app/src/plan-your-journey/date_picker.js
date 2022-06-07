import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ResponsiveDatePickers(props) {
  const [value, setValue] = React.useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Pick your date"
          name="date_picker"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
            props.onchange({name:"date_picker", value:newValue})
          }}
          renderInput={(params) => {
          return <TextField {...params} name="date_picker" onBlur={props.onchange}/>
        }}
        />
    </LocalizationProvider>
  );
}
