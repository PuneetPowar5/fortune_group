import React from 'react';
import './Team.css';
import Footer from './Footer';
import TeamPicture from './TeamPicture.js';

//PICS-------------------//
import StevePic from '../pics/people/steve.jpg';
import AndrewPic from '../pics/people/andrew.jpg';
import MuhammadPic from '../pics/people/muhammad.jpg';
import PuneetPic from '../pics/people/puneet.jpg';
import SajeevPic from '../pics/people/sajeev.jpg';
// import BradyPic from "../pics/people/tempBrady.jpg"
// import KarnikPic from '../pics/people/tempKarnik.jpg';
// import RhysPic from '../pics/people/tempRhys.jpg';
import TrevorPic from '../pics/people/trevor.jpg';
import VacantPic from '../pics/people/vacant.png';
//----------------------//

const Team = () => {
  return (
    <>
      <div className='teamBody'>
        <div className='president'>
          <h1 className='position'>President</h1>
          <h2 className='pDetails'>
            The Fortune Group President is responsible for developing and
            implementing investment strategies that align with the company's
            long-term vision and philosophy for effective investment
            allocations.
          </h2>
          <div className='presidentPics'>
            <TeamPicture
              pic={StevePic}
              name='Steve Kang'
              position='President'
              edu='BMOS Western'
            />
          </div>
        </div>
        <div className='finance'>
          <h1 className='position'>Financial Analysts</h1>
          <h2 className='pDetails'>
            Our Financial Analysts research and analyze attractive stocks
            through utilization of key fincancial metrics, business news, and
            valuation methods to prepare weekly stock reports.
          </h2>
          <div className='financePics'>
            <TeamPicture
              pic={AndrewPic}
              name='Andrew Xu'
              position='Financial Analyst'
              edu='Dropout lol'
            />
            <TeamPicture
              pic={SajeevPic}
              name='Sajeev lastName'
              position='Financial Analyst'
              edu='idk'
            />
            {/* <TeamPicture pic={BradyPic} name="Brady Idkhowtospellit" position="My man does socials right? Anything else?" edu="idk"/> */}
            {/* <TeamPicture
              pic={KarnikPic}
              name='Karnik Gupta'
              position='Financial Analyst'
              edu='idk'
            /> */}
            <TeamPicture
              pic={TrevorPic}
              name='Trevor Smith'
              position='Financial Analyst'
              edu='Some engineering Waterloo'
            />
            <TeamPicture
              pic={VacantPic}
              name='Will Ho'
              position='Financial Analyst'
              edu='idk'
            />
          </div>
        </div>
        <div className='software'>
          <h1 className='position'>Software Developers</h1>
          <h2 className='pDetails'>
            Our Software Engineers are responsible for building and maintaining
            our website.
          </h2>
          <div className='softwarePics'>
            <TeamPicture
              pic={PuneetPic}
              name='Puneet Powar'
              position='Lead Software Developer'
              edu='CS UofT'
            />
            {/* <TeamPicture
              pic={RhysPic}
              name='Rhys Collings'
              position='Even Leader Software Developer'
              edu='Anti-Math Waterloo'
            /> */}
            <TeamPicture
              pic={MuhammadPic}
              name='Muhammad Zaidi'
              position='Copy-Paste Bot'
              edu='Computer Engineering Waterloo'
            />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Team;
