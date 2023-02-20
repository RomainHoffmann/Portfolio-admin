import React from "react"
import useFilter from "../stores/useFilter"

const SearchBar = () => {
  const searchTerms = useFilter((state) => state.searchTerms)
  const setSearchTerms = useFilter((state) => state.change)

  return (
    <input
      onChange={(e) => {
        setSearchTerms(e.target.value)
      }}
      value={searchTerms}
    ></input>
  )
}

export default SearchBar
