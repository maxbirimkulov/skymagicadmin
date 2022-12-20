import React, {useEffect} from 'react';
import './Vacancies.scss'
import {GoLocation} from 'react-icons/go'
import BranchMenu from "../../components/BranchMenu/BranchMenu";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import vacancies, {changeBranch, getVacancies} from "../../redux/reducers/vacancies";
import {ToastContainer} from "react-toastify";


const Vacancies = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data, filter, status, error} = useSelector((store) => store.vacancies )

    useEffect(() => {
        dispatch(getVacancies(filter))
        console.log(123)
    }, [filter])

    return (
        <section className='vacancies'>
          <div className="vacancies__container container">

              <button type='button' onClick={() => navigate('/vacancies/create')} className='vacancies__create'>Создать вакансию</button>

              <div className="vacancies__content">
                  <div className="vacancies__menu">

                      {
                          data && data.map((item) =>  (
                              <div className="vacancies__card">
                                  <div className="vacancies__text">
                                      <h3 className='vacancies__name'>
                                          {item.title}
                                      </h3>
                                      <p className='vacancies__description'>
                                          {item.description}
                                      </p>
                                  </div>
                                  <p className='vacancies__location'>
                                      <span className='vacancies__logo'><GoLocation/></span>
                                      {
                                          item.branch  === 'tsum' ? 'SMAGIC ЦУМ'
                                          : item.branch  === 'tommy' ? 'SMAGIC ТОММИ МОЛ'
                                          : item.branch  === 'techno' ? 'SMAGIC ЦУМ'
                                          : item.branch  === 'sky' ? 'SKY-PARK АЛА АРЧА' : ''
                                      }
                                  </p>
                              </div>
                          ))
                      }
                  </div>
                  <BranchMenu changeBranch={changeBranch} route={'vacancies'}/>
              </div>


          </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
};

export default Vacancies;