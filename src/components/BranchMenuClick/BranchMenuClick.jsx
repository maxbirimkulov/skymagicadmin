import React from 'react';
import '../BranchMenu/branch.scss'
import {useDispatch, useSelector} from "react-redux";
import {UrlClickData} from "../../utils/UrlClickData";


const BranchMenuClick = ({changeBranch, route}) => {

    const {filter} = useSelector((store) => store[route] )
    const dispatch = useDispatch()



    return (
        <ul className='branch__menu'>
            {
                UrlClickData.map((item, idx) => (
                        <li key={item.branch} onClick={() => dispatch(changeBranch(item.branch))} className={`branch__item ${filter.branch === item.branch ? 'active' : ''}`}>
                            {item.text}
                        </li>
                    )
                )
            }
        </ul>
    );
};

export default BranchMenuClick;