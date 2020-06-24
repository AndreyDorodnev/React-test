import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {getSalaryStr,getAddressStr,getRequirement,getResponsibilities} from '../../utils/vacancyUtils';

function Description(props) {
    return (
        <div className="description">
            {console.log(props)
            }
            {
                props.data?
                <Card>
                    <Card.Header as="h5">{props.data.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{`ЗП: ${getSalaryStr(props.data.salary)}`}</Card.Title>
                        <Card.Text>{`Адрес: ${getAddressStr(props.data.address)}`}</Card.Text>
                        <Card.Text> {`Требования: ${getRequirement(props.data.snippet)}`}</Card.Text>
                        <Card.Text>{`Задачи: ${getResponsibilities(props.data.snippet)}`}</Card.Text>
                        <Button variant="primary" onClick={e=>props.onBtnClick(props.data.id)}>Подробнее</Button>
                    </Card.Body>
                </Card>
                :
                <div>Нет выбранной вакансии</div>
            }
        </div>
    )
}

export default Description;