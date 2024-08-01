import React from 'react';
// import './Login.css';
import styled from "styled-components";


const Login = ({setAction}) => {
    return (
        <StyledContainer>
            <div className='loginpage'>
                <div className='container'>
                <div>
                        <h4>Login </h4>
                    </div>
                    <div className='input'>
                        <input type="email" placeholder='Email'/>
                    </div>

                    <div className='input'>
                        <input type="password" placeholder='Password'/>
                    </div>
                    <div>
                    <p>Forget Pasword?</p>
                        <span>Click Here!</span>
                    </div>
                    <button>Submit</button>
                    </div>
                 
                </div>
           
           </StyledContainer> 
    );
}

export default Login;

const  StyledContainer  = styled.div`
.loginpage{
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

    @media (0<width<600px){
   width:200px ;
   height:300px ;
   row-gap: 10px;
  }

}
.input input{
    padding: 5px;
    width: 250px;
    height: 30px;
    
    @media (0<width<600px){
        width:150px;
        height: 15px;
        
    }
  
}

h4{
    margin-top: -20px;
    font-size:30px ;
}

p{
    font-weight:bold;
    color: black;

}
span{   margin-left: 60px;
        text-decoration: underline;
        cursor: pointer;
        color:blue;

    }

button{
padding: 10px;
  cursor: pointer;
}



`;