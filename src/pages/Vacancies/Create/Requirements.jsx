import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";


const Requirements = ({requirements, setRequirements}) => {


    const [text,setText] = useState('')


    const addRequirements = () => {
        if (!text.length) {
            toast("Заполните поле ввода")
        } else {
            setRequirements((prev) => [...prev, text])
            setText('')
        }
    }

    return (
        <div>
        <label htmlFor="">
            <input value={text} onChange={(e) => setText(e.target.value) } type="text" placeholder='введите требования'/>
            <button type='button' onClick={addRequirements}>добавить</button>
        </label>
            <ul>
                {
                    requirements.map((item, idx) => (
                        <li key={idx + item}>{item}</li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Requirements;