import React, {useState} from 'react'
import './App.css';
import {MinsToHrs} from './MinsToHrs'
import {KmsToMiles} from './KmsToMiles'

export default function App(){
    const [index, setIndex] = useState("0")
    const onSelect = (e)=> setIndex(e.target.value)
    return (
        <div>
            <h1>Super Converter</h1>
            <select value={index} onChange={onSelect}>
                <option value="0" disabled> Select the coversion units</option>
                <option value="1"> Time Conversion (minute to hour)</option>
                <option value="2"> Length Conversion (km to mile)</option>
            </select>
            {index!=='0' ? <hr/> : null}
            {index==='1' ? <MinsToHrs/> : null }
            {index==='2' ? <KmsToMiles/> : null }
        </div>
    )
}