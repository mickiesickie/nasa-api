import React, { useState } from "react";
import { Container } from "@mui/material"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SearchComponent = ({ value,setValue}) => {
    const today = new Date();

    return(
        <Container>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
               value={value}
               defaultValue={today}
               onChange={(newValue) => setValue(newValue)
               }
               disableFuture 
               format="yyyy-MM-dd"/>
            </LocalizationProvider>
        </Container>
    );
};

export default SearchComponent; 