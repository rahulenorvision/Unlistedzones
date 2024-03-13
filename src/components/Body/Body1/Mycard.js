import React from 'react';
import './Mycard.css';
import care from './care.jpg';
import nse from './nse.jpg';
import polymatch from './polymatch.jpg';
import potash from './potash.jpg';
import speaker from './speaker.png';

export default function Mycard(){
    return(
        <>
        <div className='boxes'>
            <div className='boxes1'>
        <div className='box1'>
        <div className='box11'>
            <img src={nse} alt='nse'/>
            <p>
                NSE India Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
        <div className='box12'>
            <img src={polymatch} alt='nse'/>
            <p className='polymatch'>
                NSE India Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
    
        </div>
        <div className='box1'>
        <div className='box11'>
            <img src={care} alt='nse'/>
            <p>
                NSE India Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
        <div className='box22'>
            <h1>P</h1>
            <p>
                NSE India Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
    
        </div>
        <div className='box1'>
        <div className='box11'>
            <img src={potash} alt='nse'/>
            <p>
                NSE India Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
        <div className='box12'>
            <h1>U</h1>
            <p>
                NSE India Limited Unlisted<br/> Shares <br/>&#8377;4800
                <br/><p> (+0.00)(0%) 15D</p>
                </p>
        </div>
    
        </div>
        </div>
        <div className='boxes2'>
        <div className='boxes21'>
            <h1>Attention Required</h1>
            <div>
                <p>Create Your Own Account and Begin Your <br/> Investment Journey In Unlisted Shares With <br/> UnlistedZones.</p>
            </div>
            <div className='buttmycard'>
            <button className='butmycard' type='button' >Complete Setup</button>
            <img src={speaker} alt='speaker'/>
            </div>
        </div>
        </div>
        </div>
        <div>
        <button type='button' className='bottombutton'>View More</button>
        </div>
        </>
    )
}