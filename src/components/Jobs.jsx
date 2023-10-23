import React, {useState} from 'react'
import Searchbar from "./Searchbar"
import Cards from "./Cards"
// import { MDBBtn} from 'mdb-react-ui-kit';
function Jobs() {
  const [results, setResults] = useState([]);

  return (  
    
    <div>
      
    <div>
      <div className="search-bar-container">
        <Searchbar setResults={setResults} />
        {results && results.length > 0 && <Cards results={results} />}
      </div>
    </div>
    <div style={{margin:"25px"}}> <Cards /></div>
    </div>
  )
}

export default Jobs;
