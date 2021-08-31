import React from 'react';
import './Question.css';
import Comp from './Button';

const Question = () => {
    return(
        <div className='QuestionPage'>
            <div className='Container'>
                <div className='Question'>
                    Are you ready to start your investing journey?
                </div>
                <div className='ContactButton'>
                    <Comp />
                </div>
            </div>
        </div>
    );
}

export default Question