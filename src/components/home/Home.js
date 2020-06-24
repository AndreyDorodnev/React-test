import React, {useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import WithUser from '../hoc/WithUser';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import TableData from './TableData';

function Home(props) {

    const DATA_PER_PAGE = 20;
    const MAX_PAGES = 100;
    const [data,setData] = useState([]);
    const [pageNum,setPageNum] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await axios(`https://api.hh.ru/vacancies?specialization=1&page=${pageNum}&per_page=${DATA_PER_PAGE}`);
                console.log(result);
                setData([...result.data.items]);
            } catch(error){
                console.log(error);
            }
        };
        fetchData();
      }, [pageNum]);

    const dataItemClick = id => {
        props.history.push('/vacancy/'+ id);
    }

    const handlePageClick = ({selected}) => {
        setPageNum(selected);
    }

    return (
        <div className="home-page">
            <TableData data={data} itemClick={dataItemClick}></TableData>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={<span className="gap">...</span>}
                pageCount={MAX_PAGES}
                onPageChange={handlePageClick}
                forcePage={pageNum}
                containerClassName='pagination'
                previousClassName='previous_page'
                nextClassName='next_page'
                disabledClassName='disabled'
                activeClassName='active'
            />
        </div>
    )
}

export default withRouter(WithUser(Home));
