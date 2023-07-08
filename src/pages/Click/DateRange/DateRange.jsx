import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {useDispatch} from "react-redux";
import {changeFree} from "../../../redux/reducers/click";

const DateRange = () => {

    const [date, setDate] = useState([dayjs(''), dayjs('')])

    const dispatch = useDispatch()

    useEffect(() => {

        let firstValue = date[0] ? date[0]['$d'].toString() === 'Invalid Date'? new Date() :date[0]['$d']   : new Date()
        let secondValue = date[1] ? date[1]['$d'].toString() === 'Invalid Date'? new Date() : date[1]['$d'] : new Date()

        dispatch(changeFree([firstValue.getTime(), secondValue.getTime()]))



    }, [date[0], date[1]])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
                <DateRangePicker format='DD/MM/YYYY' value={date} onChange={(newValue)=> setDate(newValue)} className='click__date' localeText={{ start: 'Начало', end: 'Конец' }} />
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default DateRange