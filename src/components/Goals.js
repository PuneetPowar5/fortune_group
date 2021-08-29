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
                            <ul className='Values'>
                                <li className='Capital'>
                                    <MdAttachMoney className='CapitalIcon'></MdAttachMoney>
                                    <div className='CapitalText'>
                                        Capital Gains
                                    </div>
                                    <div>
                                        Description
                                    </div>
                                </li>
                                <li>
                                    <SiSkillshare></SiSkillshare>
                                    <div>
                                        Acquire Useful Skills
                                    </div>
                                    <div>
                                        Description
                                    </div>
                                </li>
                                <li>
                                    <GiShakingHands></GiShakingHands>
                                    <div>
                                        Network
                                    </div>
                                    <div>
                                        Description
                                    </div>
                                </li>
                            </ul>
            </div>
        </div>
    );
}

export default Goals
