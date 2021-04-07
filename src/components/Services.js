import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class Services extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className='services'>
          <div className='sa'>
            <h1 className='satext'>ABOUT US</h1>
          </div>
          <div className='sb'>
            <h1 className='spec'>Our Services</h1>
            <div className='boxes'>
              <div className='triplebox b1'>
                <h1 className='boxtext'>Complete Restorations</h1>
                <p>Bring a classic dream back to life by designing a restoration of a vintage ride</p>
              </div>
              <div className='triplebox b2'>
                <h1 className='boxtext'>Custom Modifications</h1>
                <p>Built with custom in-house Chassis and Components; take your ride to the next level</p>
              </div>
              <div className='triplebox b3'>
                <h1 className='boxtext'>Custom Race Cars</h1>
                <p>Design a completely custom Race Car built to driver specs for optimized functionality and safety</p>
              </div>
            </div>
           </div>
        </div>
    );
  }
}

export default Services;