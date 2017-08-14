import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './signup.css'
import axios from 'axios'
import {
  Link
} from 'react-router-dom'
import Settings from '../../../settings'

class Signup extends Component {

  signup = (e) => {
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {
      username,
      password
    }
    axios.post(`${Settings.host}/user/signup`, data)
      .then( res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.response.data.msg)
      })
  }

  render() {
    return(
      <div className="signup">
        <TitleHeader title="signup" />
        <div className="signup-content">
          <div className="signup-hero" >
            <h1 className="title">
              注册
            </h1>
            <p className="slogan">
              连接小而确定的幸福
            </p>
          </div>
          <form onSubmit={this.signup} className="signup-form">
            <div className="signup-text-inputs">
              <div className="signup-text-inputs-inner">
                <input type="text" placeholder="用户名" ref={value => this.usernameInput = value}/>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="password" ref={value => this.passwordInput = value}/>
                <input type="password" placeholder="再输一遍" />
              </div>
            </div>
            <div className="signup-actions">
              <button type="submit">注册</button>
            </div>
          </form>
          <div className="signup-other-option">
            <Link to="/login">已有账号？直接登录</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
