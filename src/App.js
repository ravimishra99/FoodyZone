
import React from 'react'
import { useState } from 'react';
import styled from "styled-components"
import FoodCards from './Components/FoodCards';
import data from './Components/Carddata';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
const App = () => {

  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [Action, setAction] = useState('none');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const filteredData = data.filter(item => {
    const matchesFilter = filter === 'All' || item.type.toLowerCase() === filter.toLowerCase();

    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });



  return (
    <Container>
      {
        Action === 'none' ?(
          <>
           <TopContainer>
       <div className='logo'>
          Foody Zone
        </div>
        <div className='search'>
          <input placeholder='Search Food'
            value={searchQuery}
            onChange={handleSearchChange} />
        </div>
        <div className='entry'>
           <button className="btnsign" onClick={() => setAction('signin')}>Sign in</button>
                <button className="btnlog" onClick={() => setAction('login')}>Login</button>
              </div>
            
              </TopContainer>

              <FilterContainer>
        <Button onClick={() => handleFilterChange('All')}>All</Button>
        <Button onClick={() => handleFilterChange('Breakfast')}>Breakfast</Button>
        <Button onClick={() => handleFilterChange('Lunch')}>Lunch</Button>
        <Button onClick={() => handleFilterChange('Dinner')}>Dinner</Button>


      </FilterContainer>

      <FoodCardContainer>
        <FoodCards data={filteredData} />
      </FoodCardContainer>
     </>

        ) : (
          <>
           {Action === 'signin' && <SignUp setAction={setAction} />}
           {Action === 'login' && <Login setAction={setAction} />}
          </>
        )
      }
     
    </Container>
  );
};

export default App;


const Container = styled.div`
max-width: 100%;
margin: 0 auto;
overflow: hidden;
`;

const TopContainer = styled.section`
height:50px;
display: flex;
justify-content:space-between;
padding:10px;
align-items: center;

@media (0<width<600px){
    flex-direction: column;
    height: 150px;
    margin-bottom: 20px;
  }

.logo{
  margin-left: 40px;
  color: red;
  font-size: 60px;
  font-style: italic;
  font-weight: 700;


  @media (0<width<600px){
    font-size:40px ;
    margin-top: 20px;
    margin-left: 1px;
  }
}

.search{
  input{
  background-color:transparent ;
  border: 1px solid red;
  color:black;
  border-radius: 5px;
  height:40px ;
  font-size: 16px;
  padding: 0 10px;
  margin-left: 800px;
  margin-top: 120px;

  
}
}


.btnsign{

  color: black;
  padding: 6px 12px;
  border-radius: 5px;
  gap:10px;
  margin-right: 10px;
} 

.btnlog{
  color:black;
  padding: 6px 12px;
  border-radius: 5px;
  margin-top:10px;
  margin-right: 10px;
}

`
  ;

const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 12px;
padding-bottom:40px;
`;

const Button = styled.button`
background: #ff4343;
border-radius: 5px;
padding: 6px 12px;
 border: 1px solid black; 
color: white; 

cursor: pointer;
&:hover {
  background-color: #f22f2f;
}

`;

const FoodCardContainer = styled.section`
min-height: calc(100vh - 120px);

background-image: url("./Images/bg.png");
background-size:cover;
display: flex;
flex-wrap: wrap;


`;



