import React from 'react';
// import './SignUp.css';
import styled from "styled-components";

const SignUp = ({setAction}) => {
    return (
        <StyledContainer>
            <div className='signinpage'>
                <div className='container'>
                    <div>
                        <h4>Sign Up</h4>
                    </div>
                    <div className='input'>
                        <input type="text" placeholder='Name'/>
                    </div>

                    <div className='input'>
                        <input type="email" placeholder='Email'/>
                    </div>

                    <div className='input'>
                        <input type="password" placeholder='Password'/>
                    </div>
                  
                  <div>
                     <p>  Already Have Account?
                     </p>
                     <span onClick={() => setAction('login')}>Login</span>
                   
                  </div>
                  <button className='submit'>Submit</button>
                </div>
            </div>
       
          </StyledContainer>
    )
}

export default SignUp;

const StyledContainer=styled.div`


.signinpage{
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container{
    
    width:400px;
    height:500px;
    background-color: grey;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    margin-top: -50px;
    border: 1px solid black;

}
.input input{
    padding: 5px;
    width: 250px;
    height: 30px;
    
  
}

h4{
    margin-top: -20px;
    font-size:30px ;
}

p{
    font-weight:bold;
    color: black;

}
span{   
        margin-left: 60px;
        text-decoration: underline;
        cursor: pointer;
        color:blue;

    }

Button{
    padding:5px 10px;
    cursor: pointer;
}

`;
