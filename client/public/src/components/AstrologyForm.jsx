import { useState } from 'react'
import axios from 'axios'
import NumerologyForm from './NumerologyForm'
import SignatureSection from './SignatureSection'

function AstrologyForm() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    date: '',
    reportNumber: '',
    dob: '',
    time: '',
    birthPlace: '',
    day: '',
    zodiacSign: '',
    ascendant: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
     try {
      const response = await axios.post('http://localhost:5000/api/form/save-form', formData)
      alert(response.data.message)
    } catch (error) {
      console.log(error)
      alert('Error saving data')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='mt-6'>
      <div className='grid grid-cols-2 gap-4'>
        <input type='text' name='name' placeholder='Name' onChange={handleChange} className='border p-2' />

        <select name='gender' onChange={handleChange} className='border p-2'>
          <option value=''>Select Gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>

        <input type='date' name='date' onChange={handleChange} className='border p-2' />
        <input type='text' name='reportNumber' placeholder='Report Number' onChange={handleChange} className='border p-2' />

        <input type='date' name='dob' onChange={handleChange} className='border p-2' />
        <input type='time' name='time' onChange={handleChange} className='border p-2' />

        <input type='text' name='birthPlace' placeholder='Birth Place' onChange={handleChange} className='border p-2' />
        <input type='text' name='day' placeholder='Day' onChange={handleChange} className='border p-2' />

        <input type='text' name='zodiacSign' placeholder='Zodiac Sign' onChange={handleChange} className='border p-2' />
        <input type='text' name='ascendant' placeholder='Ascendant' onChange={handleChange} className='border p-2' />
      </div>

      <NumerologyForm />
      <SignatureSection />

      <button className='bg-green-700 text-white px-5 py-2 mt-5 rounded'>
        Submit
      </button>
    </form>
  )
}

export default AstrologyForm