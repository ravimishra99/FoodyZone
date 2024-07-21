import React from 'react';
import data from './Carddata';
import styled from 'styled-components';

const Card = ({ title, image, text, price, type }) => (
    <CardContainer>
        <div className='card'>
            <div>
                <img src={image} alt={title} />
            </div>
            <div className='description'>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>${price}</p>
                <p>{type}</p>
            </div>
        </div>
    </CardContainer>
);

const Cardlist = () => (
    <CardListContainer>
        {data.map((item, index) => (
            <Card
                key={index}
                title={item.title}
                image={item.image}
                text={item.text}
                price={item.price}
                type={item.type}
            />
        ))}
    </CardListContainer>
);

export default Cardlist;

const CardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px; /* Space between cards */
    padding: 20px;
  
  
`;


const CardContainer = styled.div`
    width: 300px; /* Adjust the card width */
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;

   `;