import { Helmet } from 'react-helmet-async';
import { Grid, Container } from '@mui/material';


function UploadImages() {
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
      <div>
      <div className="d-flex flex-row-reverse">
  <div class="p-2">
    <div>
      5003
    </div>
    <div>
      Total
    </div>
  </div>
  <div className="p-2"><div>
      5002
    </div>
    <div>
      Total
    </div></div>
  <div className="p-2"><div>
      5001
    </div>
    <div>
      Total
    </div></div>
</div>
    </div>

      {/* <Footer /> */}
    </>
  );
}

export default UploadImages;
