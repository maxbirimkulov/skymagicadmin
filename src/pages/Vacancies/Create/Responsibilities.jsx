import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";


const Responsibilities = ({responsibilities, setResponsibilities}) => {


    const [text,setText] = useState('')


    const addResponsibilities = () => {
        if (!text.length) {
            console.log(123)
            toast("Заполните поле ввода")
        } else {
            setResponsibilities((prev) => [...prev, text])
            setText('')
        }
    }

    return (
        <div>
        <label htmlFor="">
            <input value={text} onChange={(e) => setText(e.target.value) } type="text" placeholder='введите обязанности'/>
            <button type='button' onClick={addResponsibilities}>добавить</button>
        </label>
            <ul>
                {
                    responsibilities.map((item, idx) => (
                        <li key={idx + item}>{item}</li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Responsibilities;