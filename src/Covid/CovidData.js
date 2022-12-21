import React from 'react'
import "./Covid.css";

export default function CovidData(props) {
  return (
    <div className='main'>

    <div className='card1' style={{width:"23rem"}}>
        <p className='card_body2'>LOC : {props.loc} 
            <p className='card_title1'>Deaths : {props.deaths}</p>
            <p className='card_text1'>ConfirmedCasesIndian : {props.confirmedCasesIndian}</p>
            <p className='card_para'>discharged : {props.discharged}</p>
            <p>TotalConfirmed : {props.totalConfirmed}</p>
       
       
</p>
    </div>
    </div>
  )
}
