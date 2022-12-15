import React from 'react'
import './Contacts.css'
export default function Contacts() {
  return (
    <div className='contacts'>
      <form id='form'>
        <label htmlFor="name" id='name'>Name</label>
        <input type="text" name='name' placeholder='Name' />
        <label htmlFor="mail" id='mail'>E-mail</label>
        <input type="text" name='mail' placeholder='E-mail' />
        <label htmlFor="phone" id='phone'>Phone</label>
        <input type="tel" name='phone' placeholder='Phone number' />
        <textarea  cols="30" rows="10"></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
