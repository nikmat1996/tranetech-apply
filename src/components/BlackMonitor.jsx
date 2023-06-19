import React from 'react';
import '../assets/css/blackMonitor.css'
import monitorBG from '../assets/images/monitorBG.webp'
import monitor from '../assets/images/monitor.webp'

const BlackMonitor = () => {

    const blackMonitor_style = {
        backgroundImage : `url(${monitorBG})`
    } 

  return (
      <section className='blackMonitor' style={blackMonitor_style}>
          <h2>EQUAL the integrated ERP solutions build to meet the needs of businesses.</h2>
          <p>EQUAL is a scalable and fully integrated enterprise resource planning system to manage your entire business procedures in an organization. As the Best ERP Software in UAE, EQUAL available on the cloud and as an on-premise solution. EQUAL unites standard business disciplines with modern marketing strategies and technology, empowering users to streamline processes, track resources and manage data with ease.</p>
          <img src={monitor} alt="monitor" />
    </section>
  )
}

export default BlackMonitor