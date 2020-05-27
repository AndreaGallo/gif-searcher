import React, {useState} from 'react'

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleChange = evnt => {
        setKeyword(evnt.target.value)
    }


    const handleSubmit = evnt => {
        evnt.preventDefault()
        onSubmit({keyword})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Search a gif here..." type='text' value={keyword} onChange={handleChange}/>
        </form>
    )
}

export default React.memo(SearchForm)