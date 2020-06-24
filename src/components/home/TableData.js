import React from 'react';
import PropTypes, { element } from 'prop-types';
import WithCondition from '../hoc/WithCondition';
import {getSalaryStr} from '../../utils/vacancyUtils';

function List(props) {

    return (
        <table className="table-data">
            <thead>
                <tr>
                    <th>Вакансия</th>
                    <th>Адрес</th>
                    <th>ЗП</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((element)=>{
                        return (
                            <tr key={element.id} onClick={e=>props.itemClick(element.id)}>
                                <td>{element.name}</td>
                                <td>{element.address? element.address.city : 'не указан'}</td>
                                <td>{getSalaryStr(element.salary)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

List.propTypes = {
    data: PropTypes.array.isRequired,
}

const conditionFunc = props => props.data.length;

export default WithCondition(conditionFunc)(List);