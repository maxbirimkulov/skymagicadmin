import React from 'react';
import './branch.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeBranch} from "../../redux/reducers/banners";
import {branchMenuData} from "../../utils/BranchMenuData";




const BranchMenu = () => {

    const {filter} = useSelector((store) => store.banners )
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