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
          <a id="top"/>
          <div className='sa'>
            <h1 className='satext'>ABOUT US</h1>
          </div>
          <div className='saab'>
            <div className='sb1'>
            <h1 className='est'>Est. 1987</h1>
            <h5 className='servinfo'>Kennedy Racecars is the premier stop for helping create and perfect your custom car dream. From design to finish, you can trust in the craftmanship, artistry, and attention to detail in creating a beautiful vehicle </h5>
            </div>
            <div className='sb2'>
            </div>
          </div>
          <div className='sb'>
            <h1 className='spec'>Our Services</h1>
            <div className='boxes'>
              <div className='triplebox b1'>
                <h1 className='boxtext'>Tig Welding</h1>
                <p className='subinfo'>Bring a classic dream back to life by designing a restoration of a vintage ride</p>
              </div>
              <div className='triplebox b2'>
                <h1 className='boxtext'>Custom In-House Parts</h1>
                <p className='subinfo'>Built with custom in-house Chassis and Components; take your ride to the next level</p>
              </div>
              <div className='triplebox b3'>
                <h1 className='boxtext'>Custom Engine Modification</h1>
                <p className='subinfo'>Design a completely custom Race Car built to driver specs for optimized functionality and safety</p>
              </div>
            </div>
           </div>
        </div>
    );
  }
}

export default Services;