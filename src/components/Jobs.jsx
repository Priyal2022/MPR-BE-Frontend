// import React, { useState } from 'react'
// import Searchbar from "./Searchbar"
// import Cards from "./Cards"
// import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
// function Jobs() {
//   const [results, setResults] = useState([]);
//   const [input, setInput] = useState("");
//   const handleChange = (value) => {
//     setInput(value);

//   }
//   return (
//     <div>
//       <div>
//         <div className="search-bar-container">
//           <Searchbar setResults={setResults} />
//           <div className='m-4'></div>
//           <div>
//             {/* <form className='d-flex input-group w-auto px-5 '> */}
//             <MDBCol>
//               <div className='d-flex input-group w-auto px-4 '>
//               <input type='search' className='' placeholder='Type query' value={input} onChange={(e) => handleChange(e.target.value)} aria-label='Search' />
//               <div className='d-grid '><MDBBtn color='primary'>Search</MDBBtn></div>
//             </div></MDBCol>
            
//           </div>
//           {results && results.length > 0 && <Cards results={results} />}
//         </div>
        
//       </div>
//       <div style={{ margin: "25px" }}> <Cards /></div>
      
//     </div>
//   )
// }

// export default Jobs;


import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import SearchBar from './Searchbar'
const Jobs = () => {
  const [keyword, setKeyword] = useState('');
  const [jobsInfo, setJobsInfo] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: keyword
        }),
      });
      const data = await response.json();
      setJobsInfo(data.jobsInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <SearchBar />
      <form onSubmit={handleSubmit}>
        <label>
          Enter your field of interest:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        {/* <div className='d-grid '><MDBBtn color='primary'><button type="submit">Submit</button></MDBBtn></div> */}
      </form>
      <div>
  
        {jobsInfo && jobsInfo.map((job, index) => (
          <div key={index}>
          <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>
            <a href={job.url}>{job.jobTitle}</a>
            </MDBCardTitle>
            {/* <a href={job.url}>{job.jobTitle}</a> */}
            {/* <p>{job.jobDescription}</p> */}
            <MDBCardText>
            <p>{job.jobDescription}</p>
            </MDBCardText>
            
          </MDBCardBody>
          </MDBCard>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;