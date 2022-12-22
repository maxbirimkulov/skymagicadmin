import React from 'react';
import {GoLocation} from "react-icons/go";

const SelectBranch = ({branch}) => {
    return (
        <>
            <span className='vacancies__logo'><GoLocation/></span>
            <span>

             {
                 branch  === 'tsum' ? 'SMAGIC ЦУМ'
                     : branch  === 'tommy' ? 'SMAGIC ТОММИ МОЛ'
                         : branch  === 'techno' ? 'SMAGIC ЦУМ'
                             : branch  === 'sky' ? 'SKY-PARK АЛА АРЧА' : ''
             }
        </span>
        </>
    );
};

export default SelectBranch;