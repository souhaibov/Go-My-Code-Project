import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

const M_user = () => {

const [data,setData] =useState([]);

useEffect(() => {
  
const fetchData = async() => {
const result = await axios(
    'https://cloud.mongodb.com/v2/6333a62ce8a8e23a070da54c#metrics/replicaSet/633468deee7b0542524f658f/explorer/test/users/find'
);
setData(result.data);
};
fetchData();
},[]);
  return (
    <Fragment>
    <div className='user_data'>
        <ul>
            {data.map(item =>
                <li key={item.id}>
                    <p>{item.first_name}</p>
                </li>
                )}
        </ul>
    </div>
    </Fragment>
  )
}

export default M_user