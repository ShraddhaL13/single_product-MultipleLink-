import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import "./Covid.css";
import CovidData from './CovidData.js';

function Covid() {


  const [data, setData] = useState([]);

  const url = `https://api.rootnet.in/covid19-in/stats/latest`;

  useEffect(() => {
    getCovidData();
  })

  const getCovidData = async () => {
    const result = await Axios.get(url);
    setData(result.data.data.regional);
    console.log(result.data.data.regional);
  }

  return (

    <div className='container1'>
      <h1 className='api_name' >Covid-19 Information</h1>

      {data.map((val) => {
        return <CovidData loc={val.loc} deaths={val.deaths}
          total={val.total} confirmedCasesIndian={val.confirmedCasesIndian} discharged={val.discharged}
          totalConfirmed={val.totalConfirmed} />
      })
      }
    </div>
  )
}

export default Covid