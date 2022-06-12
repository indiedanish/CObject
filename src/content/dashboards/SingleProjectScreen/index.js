import { Helmet } from 'react-helmet-async';
import { Grid, Container } from '@mui/material';
import DragDrop from './DragDrop';


function SingleProjectScreen() {
  const mainConStyle = {
    padding: '5%'
  };
  const titleStyle = {
    fontSize: '24px'
  };

  const innerSecondContainerStyle = {
    marginTop: '2%',
    marginBottom: '2%'
  };

  const applicationBoxStyle = {
    
    height: '20em',
    border: '1px solid black',
    boxSizing: 'border-box',
    alignItems: 'center'
  };

  const applicationBoxInnerStyle = {
    widhth: '3%',
    height: '20em',
    border: '1px solid black',
    boxSizing: 'border-box',
    alignItems: 'center'
  };

  return (
    <>
      <Helmet>
        <title>C-Object</title>
      </Helmet>

      <div className="container-fluid" style={mainConStyle}>
        <div className="row">
          <div className="col-12" style={titleStyle}>
            Overview
          </div>
        </div>

        <div className="row" style={innerSecondContainerStyle}>
          <div className="col-8">
            <div class="input-group rounded">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                style={{ width: '100%' }}
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="col-4">
            <button
              type="button"
              style={{ width: '100%' }}
              class="btn btn-dark"
            >
              Create Application
            </button>
       
          </div>
        </div>

        <div className="row gx-5">
          {/* <div className="col-4 ml-2" style={applicationBoxStyle} >

            <div className="row" >
              

            <div   className="col-12"  style={{fontSize:'20px', fontWeight:'bold'}} >Application Name</div>
            <div   className="col-12"  >A little description about the project goes here </div>
            <div   className="col-12"  >

            <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark">View Details</button>

            </div>

            
          </div>

          </div>
          <div className="col-4" style={applicationBoxStyle}>
            Project-2
          </div>

          <div className="col-4" style={applicationBoxStyle}>
            Project-3
          </div>
          <div className="col-4" style={applicationBoxStyle}>
            Project-3
          </div>
          <div className="col-4" style={applicationBoxStyle}>
            Project-3
          </div>
          <div className="col-4" style={applicationBoxStyle}>
            Project-3
          </div> */}

          <div class="container overflow-hidden">

            <div class="row gy-5">
             
            <div class="col-sm-4" >
                <div class="pl-3 pb-3 border bg-light" style={applicationBoxStyle}>

                  <div class="row">

                  <div
                    className="row d-flex justify-content-center pt-5 pb-4"
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Application Name
                  </div>
                  <div className=" d-flex justify-content-center pb-3">
                    A little description about the project goes here{' '}
                  </div>
                  <div className="row d-flex justify-content-center p-3">
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{width: '200px'}}
                    >
                      View Details
                    </button>
                  </div>
                  </div>

                </div>
              </div>

              <div class="col-sm-4" >
                <div class="pl-3 pb-3 border bg-light" style={applicationBoxStyle}>

                  <div class="row">

                  <div
                    className="row d-flex justify-content-center pt-5 pb-4"
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Application Name
                  </div>
                  <div className=" d-flex justify-content-center pb-3">
                    A little description about the project goes here{' '}
                  </div>
                  <div className="row d-flex justify-content-center p-3">
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{width: '200px'}}
                    >
                      View Details
                    </button>
                  </div>
                  </div>

                </div>
              </div>


              <div class="col-sm-4" >
                <div class="pl-3 pb-3 border bg-light" style={applicationBoxStyle}>

                  <div class="row">

                  <div
                    className="row d-flex justify-content-center pt-5 pb-4"
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Application Name
                  </div>
                  <div className=" d-flex justify-content-center pb-3">
                    A little description about the project goes here{' '}
                  </div>
                  <div className="row d-flex justify-content-center p-3">
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{width: '200px'}}
                    >
                      View Details
                    </button>
                  </div>
                  </div>

                </div>
              </div>

              <div class="col-sm-4" >
                <div class="pl-3 pb-3 border bg-light" style={applicationBoxStyle}>

                  <div class="row">

                  <div
                    className="row d-flex justify-content-center pt-5 pb-4"
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Application Name
                  </div>
                  <div className=" d-flex justify-content-center pb-3">
                    A little description about the project goes here{' '}
                  </div>
                  <div className="row d-flex justify-content-center p-3">
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{width: '200px'}}
                    >
                      View Details
                    </button>
                  </div>
                  </div>

                </div>
              </div>


              <div class="col-sm-4" >
                <div class="pl-3 pb-3 border bg-light" style={applicationBoxStyle}>

                  <div class="row">

                  <div
                    className="row d-flex justify-content-center pt-5 pb-4"
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Application Name
                  </div>
                  <div className=" d-flex justify-content-center pb-3">
                    A little description about the project goes here{' '}
                  </div>
                  <div className="row d-flex justify-content-center p-3">
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{width: '200px'}}
                    >
                      View Details
                    </button>
                  </div>
                  </div>

                </div>
              </div>


              <div class="col-sm-4" >
                <div class="pl-3 pb-3 border bg-light" style={applicationBoxStyle}>

                  <div class="row">

                  <div
                    className="row d-flex justify-content-center pt-5 pb-4"
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Application Name
                  </div>
                  <div className=" d-flex justify-content-center pb-3">
                    A little description about the project goes here{' '}
                  </div>
                  <div className="row d-flex justify-content-center p-3">
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{width: '200px'}}
                    >
                      View Details
                    </button>
                  </div>
                  </div>

                </div>
              </div>

              <div class="col-sm-4" >
                <div class="pl-3 pb-3 border bg-light" style={applicationBoxStyle}>

                  <div class="row">

                  <div
                    className="row d-flex justify-content-center pt-5 pb-4"
                    style={{ fontSize: '20px', fontWeight: 'bold' }}
                  >
                    Application Name
                  </div>
                  <div className=" d-flex justify-content-center pb-3">
                    A little description about the project goes here{' '}
                  </div>
                  <div className="row d-flex justify-content-center p-3">
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{width: '200px'}}
                    >
                      View Details
                    </button>
                  </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default SingleProjectScreen;
