import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './signup.css'

class Signup extends Component {
  render(){
    return(
      <div className="sign-up">
        <TitleHeader title='signup' />
        <div className='signup-content'>
          <div className='signup-hero'>
            <h1 className='title'>
              注册
            </h1>
            <p className='slogan'>
              连接小而确定的幸福
            </p>
          </div>
          <div className='signup-form-wrap'>
            <form className='signup-form'>

            </form>
          </div>
          <div className='signup-actions'>
            Actions
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
