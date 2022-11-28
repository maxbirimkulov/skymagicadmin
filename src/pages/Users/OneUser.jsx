import React from 'react';
import {useNavigate} from "react-router-dom";

const OneUser = () => {
    const navigate = useNavigate()
    return (
        <section className='oneUser'>
            <div className="container">
                <button type='button' onClick={() => navigate(-1)}>назад</button>
                One User
            </div>

        </section>
    );
};

export default OneUser;