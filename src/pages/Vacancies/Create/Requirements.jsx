import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import { v4 as uuidv4 } from 'uuid';


const Requirements = ({requirements, setRequirements}) => {


    const [text,setText] = useState('')


    const addRequirements = () => {
        if (!text.length) {
            toast("Заполните поле ввода")
        } else {
            setRequirements((prev) => [...prev, {
                text,
                id: uuidv4()
            }])
            setText('')
        }
    }

    const deleteRequirements = (id) => {
        setRequirements(requirements.filter((item) => item.id !== id ))
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
                        <li style={{display: "flex", justifyContent: "space-between"}} key={idx + item}>{item.text} <button type='button' onClick={() => deleteRequirements(item.id)}>Удалить</button></li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Requirements;