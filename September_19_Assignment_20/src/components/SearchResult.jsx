import React from 'react'

const SearchResult = ({searchResult}) => {
  return (
    <div className={`w-content bg-white mb-3 flex flex-col gap-3 text-2xl p-3 `}>
        <p>Name: {searchResult.name}</p>
        <p>Age: {searchResult.age}</p>
        <p>Contact: {searchResult.contactNumber}</p>
    </div>
  )
}

export default SearchResult
