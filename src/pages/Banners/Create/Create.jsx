import React from 'react';
import {useNavigate} from "react-router-dom";

const Create = () => {
    const navigate = useNavigate()
    return (
        <div className="create">
          <div className="container">
              <button type='button' onClick={() => navigate(-1)}>назад</button>
              Создать баннер
          </div>
        </div>
    );
};

export default Create;