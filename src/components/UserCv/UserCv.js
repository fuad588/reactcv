import React from 'react'
import './UserCv.css'
import PersonalInfo from "../PersonalInfo/PersonalInfo.js";
import Con_Exp from '../Con_Exp/Con_Exp';
export default function UserCv() {
  return (
    <div className='userCv'>
      <PersonalInfo/>
      <Con_Exp/>
    </div>
  )
}
