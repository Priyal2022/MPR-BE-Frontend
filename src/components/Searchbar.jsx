import React, { useState } from 'react';
import Cards from './Cards'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default  function App({ setResults }) {
  const [showBasic, setShowBasic] = useState(false);
  // const [showBasic, setShowBasic] = useState(false);
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://4b35-103-207-59-68.ngrok-free.app/user/jobs")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((keyword) => {
          return (
            value &&
            keyword &&
            keyword.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }
  return (
    
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>ENVISION</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Market Place
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Jobs
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' value={input} onChange={(e) => handleChange(e.target.value)} aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
            
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}