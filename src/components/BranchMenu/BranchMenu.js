import React from 'react';
import './branch.scss'
import {useDispatch, useSelector} from "react-redux";
import {branchMenuData} from "../../utils/BranchMenuData";




const BranchMenu = ({changeBranch, route}) => {

    const {filter} = useSelector((store) => store[route] )
    const dispatch = useDispatch()



    return (
        <ul className='branch__menu'>
            {
                branchMenuData.map((item, idx) => (
                    <li key={item.branch} onClick={() => dispatch(changeBranch(item.branch))} className={`branch__item ${filter.branch === item.branch ? 'active' : ''}`}>
                        {item.text}
                    </li>
                    )
                )
            }
        </ul>
    );
};

export default BranchMenu;