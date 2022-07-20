import React from 'react';

const SearchBar = ({ query, isLoading, handleSubmit, setQuery}) => {

    return (
       <form onSubmit={handleSubmit}>
           <input value={query} 
           disabled={isLoading}
           onChange={(event) => setQuery(event.target.value)}
           placeholder="Search recipes"
           className="form-control"
           name= "query" />
           
           
           <input
          
           type="submit"
           disabled = {isLoading || !query}
           
           value = "Search"
           className="btn"
         />

       </form>
    ) 
};

export default SearchBar