import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {getSalaryStr,getAddressStr} from '../../utils/vacancyUtils';
import Spinner from '../spinner/Spinner';
import WithUser from '../hoc/WithUser';

function Vacancy(props) {
    
    const [data,setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await axios(`https://api.hh.ru/vacancies/${props.match.params.id}`);
                console.log(result);
                setData(result.data);
            } catch(error){
                console.log(error);
            }
        };
        fetchData();
      }, []);

      if(data){
        return (
            <div className="vacancy">
                <h2>{data.name}</h2>
                <p>{`Адрес: ${getAddressStr(data.address)}`}</p>
                <p>{`ЗП: ${getSalaryStr(data.salary)}`}</p>
                <br/>
                <div dangerouslySetInnerHTML={{__html: data.description}}/>
            </div>
        )
      } else {
          return(
              <div className="spinner">
                  <Spinner/>
              </div>
          )
      }

}

export default WithUser(Vacancy);