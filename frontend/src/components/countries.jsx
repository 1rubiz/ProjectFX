import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({handleSelect}) {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

// console.log(options)
  const changeHandler = value => {
    setValue(value)
    handleSelect(value.label)
  }

  return <Select placeholder='Nationality' options={options} name='nationality' className='text-black text-left font-semibold lg:w-[40vh] w-[26.5vh] h-[5.5vh] mb-1' value={value} onChange={changeHandler} />
}

export default CountrySelector