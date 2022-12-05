import React from 'react'

const Search = (setFilteredCities, func) => {
  let filterTimeout
  const doCityFilter = (query) => {
    clearTimeout(filterTimeout)
    if (!query) return setFilteredCities([])

    filterTimeout = setTimeout(() => {
      console.log('====>', query)
      setFilteredCities(
        func.filter((city) => city.toLowerCase().includes(query.toLowerCase())),
      )
    }, 1000)
  }
  return (
    <form className="">
      <input
        type="text"
        className="inputSearch"
        placeholder="search here..."
        onChange={(event) => doCityFilter(event.target.value)}
      />
    </form>
  )
}

export default Search
