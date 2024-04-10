
import { React, useState } from 'react'

function CityForm(props) {

    const { addCityHandler } = props

    return (
        <form onSubmit={(e) => {
            e.preventDefault()

            const cityName = document.getElementById('cityName').value
            const population = document.getElementById('population').value
            const description = document.getElementById('description').value
            const continent = document.getElementById('continent').value
            const country = document.getElementById('country').value
            const attractions = document.getElementById('attractions').value.split(', ')
            const isCapital = document.getElementById('isCapital').checked

            const obj = {
                cityName,
                population,
                description,
                continent,
                country,
                attractions,
                isCapital
            }

            addCityHandler(obj)
        }}>
            <div>
                <label at='cityName'>
                    City Name:
                </label>
                <input type='text' id='cityName' name='cityName'></input>
            </div>
            <div>
                <label at='population'>
                    Population:
                </label>
                <input type='number' id='population' name='population' min='0'></input>
            </div>
            <div>
                <label at='description'>
                    Description:
                </label>
                <textarea id='description' name='description' ows="4" cols="50"></textarea>
            </div>
            <div>
                <h5>
                    Location:
                </h5>
                <div>
                    <div>
                        <label at='continent'>
                            Continent:
                        </label>
                        <input type='text' id='continent' name='continent'></input>
                    </div>
                    <div>
                        <label at='country'>
                            Country:
                        </label>
                        <input type='text' id='country' name='country'></input>
                    </div>
                </div>
            </div>
            <div>
                <h5>
                    Tourist Attractions:
                </h5>
                <div>
                    <label at='attractions'>
                        Attractions:
                    </label>
                    <input type='text' id='attractions' name='attractions'></input>
                </div>
            </div>
            <div>
                <label at='isCapital'>Is it the capital of the country?</label>
                <input type='checkbox' id='isCapital' name='isCapital'></input>
            </div>
            <button>Add City</button>
        </form>
    )
}

export default CityForm