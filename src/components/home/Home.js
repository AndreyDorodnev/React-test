import React, {useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import WithUser from '../hoc/WithUser';
import axios from 'axios';
import VacancyList from './VacancyList';
import Description from './Description';

function Home(props) {

    const DATA_PER_PAGE = 20;
    const [data,setData] = useState([]);
    const [pageNum,setPageNum] = useState(0);
    const [selectedData, setSelectedData] = useState(null);
    const [maxPages,setMaxPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await axios(`https://api.hh.ru/vacancies?specialization=1&page=${pageNum}&per_page=${DATA_PER_PAGE}`);
                setData([...result.data.items]);
                setMaxPages(result.data.pages);
            } catch(error){
                console.log(error);
            }
        };
        fetchData();
      }, [pageNum]);

    const dataItemClick = id => {
        props.history.push('/vacancy/'+ id);
    }

    const itemSelect = (id) => {
        setSelectedData(data.find((element)=>{
            return element.id === id;
        }));
    }

    const handlePageClick = ({selected}) => {
        setPageNum(selected);
    }

    const getListData = (dataArray) => {
        return dataArray.map(el=>{
            return {
                id: el.id,
                name: el.name
            }
        })
    }

    return (
        <div className="home-page">
            <VacancyList 
                data={getListData(data)} 
                pageNum={pageNum} 
                itemClick={itemSelect} 
                pageClick={handlePageClick}
                maxPages={maxPages}
            >
            </VacancyList>
            <Description data={selectedData} onBtnClick={dataItemClick}/>
        </div>
    )
}

export default withRouter(WithUser(Home));
