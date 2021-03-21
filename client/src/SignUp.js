import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
export const SignUp = () => {
  return(
  <form>
    <h3>Sign U</h3>
    <div className="form-group">
      <label>First nam</label>
      <input type="text" className="form-control" placeholder="First name" />
    </div>
    <div className="form-group">
      <label>Last nam</label>
      <input type="text" className="form-control" placeholder="Last name" />
    </div>
    <div className="form-group">
      <label>Email addres</label>
      <input type="email" className="form-control" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label>Passwor</label>
      <input type="password" className="form-control" placeholder="Enter password" />
    </div>
    <button type="submit" className="btn btn-primary btn-block">Sign U</button>
      <p className="forgot-password text-right">Already registered<Link to="#">sign in</Link></p>
    </form>
  )
}
