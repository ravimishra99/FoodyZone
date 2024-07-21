import React from 'react'
import { useState } from 'react';
import styled from "styled-components"
import FoodCards from './Components/FoodCards';
import data from './Components/Carddata';

const App = () => {

  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
      <TopContainer>
        <div className='logo'>
          Foody Zone 
        </div>
        <div className='search'>
          <input placeholder='Search Food'
          value={searchQuery} 
          onChange={handleSearchChange}/>
        </div>



      </TopContainer>
      <FilterContainer>
        <Button onClick={() => handleFilterChange('All')}>All</Button>
        <Button onClick={() => handleFilterChange('Breakfast')}>Breakfast</Button>
        <Button onClick={() => handleFilterChange('Lunch')}>Lunch</Button>
        <Button onClick={() => handleFilterChange('Dinner')}>Dinner</Button>


      </FilterContainer>

      <FoodCardContainer>
           <FoodCards data={filteredData}/>
      </FoodCardContainer>
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
min-height:50px;
display: flex;
justify-content:space-between;
padding:10px;
align-items: center;

.logo{
  margin-left: 40px;
 color: red;
  font-size: 60px;
  font-style: italic;
  font-weight: 700;
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
  margin-right: 15px;
}
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
 border: none; 
color: white; 
cursor: pointer;

`;

const FoodCardContainer = styled.section`
height: calc(100vh - 155px);

background-image: url("./Images/bg.png");
background-size:cover;
display: flex;
flex-wrap: wrap;


`;



