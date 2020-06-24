import React from 'react';
import PropTypes, { element } from 'prop-types';
import WithCondition from '../hoc/WithCondition';
import List from './List';
import ReactPaginate from 'react-paginate';
import Card from 'react-bootstrap/Card';

function VacancyList(props) {
    return(
        <div className="vacancy-list">
            <Card>
                <Card.Header as="h5">Вакансии</Card.Header>
                <Card.Body>
                    <List data={props.data} itemClick={props.itemClick}></List>
                    <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        breakLabel={<span className="gap">...</span>}
                        pageCount={props.maxPages}
                        onPageChange={props.pageClick}
                        forcePage={props.pageNum}
                        containerClassName='pagination'
                        previousClassName='previous_page'
                        nextClassName='next_page'
                        disabledClassName='disabled'
                        activeClassName='active'
                    />
                </Card.Body>
            </Card>
            {/* <h5>Вакансии</h5>
            <List data={props.data} itemClick={props.itemClick}></List>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={<span className="gap">...</span>}
                pageCount={props.maxPages}
                onPageChange={props.pageClick}
                forcePage={props.pageNum}
                containerClassName='pagination'
                previousClassName='previous_page'
                nextClassName='next_page'
                disabledClassName='disabled'
                activeClassName='active'
            /> */}
        </div>
    )
}

VacancyList.propTypes = {
    data: PropTypes.array.isRequired,
    pageNum: PropTypes.number.isRequired,
    itemClick: PropTypes.func.isRequired,
    pageClick: PropTypes.func.isRequired,
    maxPages: PropTypes.number.isRequired
}
const conditionFunc = props => props.data.length;

export default WithCondition(conditionFunc)(VacancyList);