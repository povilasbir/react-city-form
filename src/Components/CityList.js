import React from 'react'
import CityItem from './CityItem'

function CityList(props) {

    const cityList = props.list
    const odd = cityList.length % 2 != 0

    return (
        <div>
            {cityList.map((item, index, arr) => <CityItem key={index} city={item} wrapWidth={(arr.length - 1 == index && odd) ? '100%' : '50%'} />)}
        </div>
    )
}

export default CityList