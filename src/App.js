import { React, useState, useCallback, useEffect, useMemo } from 'react'
import debounce from 'lodash.debounce'

import Search from './Search'
import Posts from './Posts'
import './App.css'

const App = () => {
  const [filteredCities, setFilteredCities] = useState([])

  return (
    <div className="container">
      <header>Find your favourite cities</header>
      <div className="searchBar">
        <div className="searcPanel">{Search(setFilteredCities, Posts())}</div>
        <div className="searcElement">
          <ul>
            {filteredCities?.map((city) => (
              <li>{city}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
