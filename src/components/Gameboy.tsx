import React from 'react'
import './Gameboy.scss'
import {BiRightArrow} from 'react-icons/bi'

const GameboyLogo = require('../assets/imgs/gameboy-color-logo.png')
const R = require('../assets/imgs/r-png.png')
const DPad = require('../assets/imgs/dpad.png')

const Gameboy = () => {
  return (
    <div className='gameboy-container'>
        <div className='screen-container'>
            <div className='pi-container'>
                <div className='icon-container'>
                    <div className='power-light'></div>
                    <div className='arrow-ind'><BiRightArrow/></div>
                    <div className='arrow-ind'><BiRightArrow/></div>
                    <div className='arrow-ind'><BiRightArrow/></div>
                </div>
                <div className='power-label'>POWER</div>
            </div>
            <div className='gameboy-label'>
                <img className='logo' src={GameboyLogo} alt="gbLogo" />
            </div>
            <div className='screen'></div>
        </div>
        <div className='controller-area'>
            <div className='nintendo-logo'>Nintendo
                <img className='trademark' src={R} alt="trademark" />
            </div>
            <div className='button-container'>
                <div className='dpad-container'>
                    <img className='dpad' src={DPad} alt="dpad" />
                </div>
                <div className='action-btns-container'>
                    <div className='action-btn b-btn'>B</div>
                    <div className='action-btn a-btn'>A</div>
                </div>
                <div className='option-btns-container'>
                    <div className='option-btn pause-btn'></div>
                    <div className='option-btn select-btn'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gameboy