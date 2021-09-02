import React from 'react';
import './About.css';
import Footer from './Footer';
import AboutBG1 from '../pics/aboutbackground1.jpeg';
import AboutBG2 from '../pics/investorMeeting.jpeg';
import AboutBG3 from '../pics/webTeam.jpeg';
import AboutBG4 from '../pics/incentive.jpeg';
import Navbar from './Navbar/Navbar';
const About = () => {
  return (
    <div className='background'>
      <div>
        <Navbar />
      </div>
      <div className='about'>
        <h2 className='aboutTitle'>About Us</h2>

        <div className='space'></div>
        <div className='space'></div>

        <h4 className='aboutDesc'>
          The Fortune Group is an investment management company, encompassing
          investments pooled by a group of investors. The firm’s primary mandate
          is to focus on capital gains by following a strategic value investing
          strategy, targeting undervalued stocks classified by investing
          fundamental characteristics. The Fortune Group is made possible with
          weekly analyst meetings encompassing presentations of stock reports.
          By actively managing $5,000+ diversified funds within the Canadian
          equities market, a value investing philosophy is utilized to optimize
          learning and portfolio growth.
        </h4>
      </div>
      <img className='pic1' src={AboutBG1} alt='AboutBGH' />
      <div className='about2'>
        <div className='space'></div>
        <div className='space'></div>
        <div className='containerInvest'>
          <div className='child1'>
            <h2 className='aboutTitle'>Investment Meetings</h2>
            <div className='containerAbout'>
              <h4 className='aboutDesc'>
                The Fortune Group encompasses financial analysts that meet on a
                weekly basis to cover educational, key news, and stock pitches.
                After the due diligence process, the portfolio manager prepares
                the ultimate decision to buy or sell a stock to achieve maximum
                portfolio growth.
              </h4>
            </div>
          </div>
          <div className='child2'>
            <img className='pic2' src={AboutBG2} alt='AboutBG2' />
          </div>
        </div>
      </div>
      <div className='about2'>
        <div className='space'></div>
        <div className='space'></div>
        <div className='containerInvest'>
          <div className='child2'>
            <img className='pic2' src={AboutBG3} alt='AboutBG3' />
          </div>
          <div className='child1'>
            <h2 className='webTitle'>Web Development Team</h2>
            <div className='containerAbout'>
              <h4 className='aboutDesc'>
                Led by the lead software engineer, the web development team
                collaborates to build an informative, yet aesthetically pleasing
                website to update the public about company holdings and
                performance.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className='about2'>
        <div className='space'></div>
        <div className='space'></div>
        <div className='containerInvest'>
          <div className='child1'>
            <h2 className='aboutTitle'>Incentives & Rewards</h2>
            <div className='containerAbout'>
              <h4 className='aboutDesc'>
                Investors are given the opportunity to act as financial analysts
                to make a direct impact on the fund. Depending on the
                performance of the portfolio, investors are given the
                opportunity to receive their principal investment plus any
                capital gains.
              </h4>
            </div>
          </div>
          <div className='child2'>
            <img className='pic2' src={AboutBG4} alt='AboutBG4' />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
