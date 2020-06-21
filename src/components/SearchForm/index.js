import React from "react"
import { useLocation } from "wouter"
import useForm from 'components/SearchForm/stateLogic'

const RATINGS = ["g", "pg", "pg-13", "r"]

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
  const [, pushLocation] = useLocation()
  const {keyword, rating, times, updateKeyword, updateRating} = useForm({initialKeyword, initialRating})
  
  const handleChange = e => updateKeyword(e.target.value)

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`)
  };

  const handleOnChangeRating = e => updateRating(e.target.value)
  
  return ( 
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        placeholder="Search a gif here..."
        type="text"
        value={keyword}
        onChange={handleChange}
      />
      <select onChange={handleOnChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  )
}

export default React.memo(SearchForm)
