import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import '../style.css'
const ProgressComp = ({title,now,label}) => {
    return (
        <div>
            <label className="titleSkill">{ title }</label>
            <ProgressBar now={now} label={`${now} %`} style={{ height: 30 }} />
        </div>
    )
}

export default ProgressComp
