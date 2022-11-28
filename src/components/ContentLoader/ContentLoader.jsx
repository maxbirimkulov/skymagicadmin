import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const ContentLoader = () => {
    return (
        <table className='table'>
            <thead className='table__header'>
            <tr className='table__row'>
                <th className='table__col'>ID пользователя</th>
                <th className='table__col'>Email</th>
                <th className='table__col'>Логин</th>
                <th className='table__col'>ФИО</th>
                <th className='table__col'>Возраст</th>

                <th className='table__col'>Телефон</th>
                <th className='table__col'>Статус</th>
                <th className='table__col'>Действие</th>

            </tr>
            </thead>
            <tbody className='table__body'>
            {
                new Array(10).fill(null).map((item) => (
                    <tr  className='table__row'>
                        <td className='table__col'><Skeleton /></td>
                        <td className='table__col'><Skeleton /></td>
                        <td className='table__col'><Skeleton /></td>
                        <td className='table__col'><Skeleton /></td>
                        <td className='table__col'><Skeleton /></td>
                        <td className='table__col'><Skeleton /></td>
                        <td className='table__col'><Skeleton /></td>
                        <td className='table__col'><Skeleton /></td>

                    </tr>
                ))
            }


            </tbody>
            <tfoot className='table__footer'></tfoot>
        </table>
    );
};

export default ContentLoader;