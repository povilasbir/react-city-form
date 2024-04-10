import React from 'react'

function CityItem(props) {

    const { cityName, population, description, continent, country, attractions, isCapital } = props.city
    const wrapWidth = props.wrapWidth

    return (
        <div className={isCapital ? 'capital' : ''} style={{ width: wrapWidth }}>
            <h3>
                {cityName + (isCapital ? ' (Capital)' : '')}
            </h3>
            <h4>
                Population: {population}
            </h4>
            <p>
                {description + (isCapital ? ` ${cityName} is the capital of ${country}. ` : '')}
            </p>
            <div>
                <h4>
                    Location Information:
                </h4>
                <h5>
                    Continent: {continent}
                </h5>
                <h5>
                    Country: {country}
                </h5>
            </div>
            {attractions.length > 0 && (
                <div>
                    <h4>
                        {attractions.length == 1 ? `Main Tourist attraction of ${cityName} is` : `Main Tourist attractions of ${cityName} are`}
                    </h4>
                    <ul>
                        {attractions.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            )}

        </div>
    )
}

export default CityItem