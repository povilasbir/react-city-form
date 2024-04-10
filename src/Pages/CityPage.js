import React, { useState } from 'react'
import CityForm from '../Components/CityForm'
import CityList from '../Components/CityList'

function CityPage() {

    const [list, setList] = useState([])

    const addCityHandler = (city) => {
        setList(prevState => [city, ...prevState])
    }

    const removeCityHandler = (id) => {
        setList(prevState => prevState.filter((item, index) => index != id))
    }

    const removeAllHandler = () => {
        setList([])
    }

    return (
        <>
            <CityForm
                addCityHandler={addCityHandler}
            />
            <CityList
                list={list}
                removeCityHandler={removeCityHandler}
                removeAllHandler={removeAllHandler}
            />
        </>
    )
}

export default CityPage