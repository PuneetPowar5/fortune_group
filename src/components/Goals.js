import React from 'react';
import './Goals.css';
import {MdAttachMoney} from 'react-icons/md';
import {SiSkillshare} from 'react-icons/si';
import {GiShakingHands} from 'react-icons/gi';

const Goals = () => {
    return(
        <div className='GoalsPage'>
            <div className='Container'>
                            <div className='Goals'>
                                Our Values
                            </div>
                            <div className='Value1Logo'>
                                <MdAttachMoney></MdAttachMoney>
                            </div>
                            <div className='CapitalTitle'>
                                Capital Gains
                            </div>
                            <div className='CapitalDes'>
                                Maximize profits with thorough analysis of stocks
                            </div>
                            <div className='Value2Logo'>
                                <SiSkillshare></SiSkillshare>
                            </div>
                            <div className='SkillsTitle'>
                                Acquire Useful Skills
                            </div>
                            <div className='SkillsDes'>
                                Understand and interpret business news and build financial models
                            </div>
                            <div className='Value3Logo'>
                                <GiShakingHands></GiShakingHands>
                            </div>
                            <div className='NetworkTitle'>
                                Network
                            </div>
                            <div className='NetworkDes'>
                                Connect with like-minded individuals who are finance/engineer oriented
                            </div>
            </div>
        </div>
    );
}

export default Goals
