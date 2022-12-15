import React from 'react'
import './PersonalInfo.css'
export default function PersonalInfo() {
  return (
    <div className='personal_info'>
        <div className="img">
            
        </div>
        <table>
            <tr>
                <th>First name:</th>
                <td>Fuad</td>
            </tr>
            <tr>
                <th>Last name:</th>
                <td>Aliyev</td>
            </tr>
            <tr>
                <th>Age:</th>
                <td>28</td>
            </tr>
            <tr>
                <th>Location:</th>
                <td>Baku</td>
            </tr>
        </table>
    </div>
  )
}
