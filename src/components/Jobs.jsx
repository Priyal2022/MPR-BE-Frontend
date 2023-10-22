import React from 'react'
import Searchbar from "./Searchbar"
import Cards from "./Cards"

function Jobs() {
  return (  
    
    <div>
    <div>
      <Searchbar />
    </div>
    <div style={{margin:"25px"}}> <Cards /><Cards /></div>
    </div>
  )
}

export default Jobs;
