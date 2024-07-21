import React from 'react';
import styled from 'styled-components';


const FoodCards = ({data}) => {
    return (
        <>
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
        </>
    );
};

const Card = ({ title, image, text, price }) => (
    <FoodCard>
        <div className='cont'>
        <div className='card'>
            <div>
                <img src={image} alt={title} />
            </div>
            <div className='description'>
                <h2>{title}</h2>
                <p className='text'>{text}</p>
                <button className='price'>${price}</button> 
              
               
            </div>
        </div>
        </div>
    </FoodCard>
);

export default FoodCards;

const FoodCard = styled.div`
.cont{
   
    width:100%;
    height:100%;
    display: flex;
  margin-top: 30px;
  margin-left: 55px;
  justify-content: center;
   
   
}



  .card{

    height: 180px;
    width:380px;
    margin-left: 20px;
    display: flex;
    border: 1px solid white;
    border-radius: 20px;
    gap: 10px;
  }

  img{
    margin-top: 15px;
  }

  .description{
    margin-top: 20px;
  }
 
  .text{
    margin-top: 20px;
    font-size: 15px;
  }
  

  .price{
    
    border:2px solid black;
    background-color: red;
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 100px;
    padding: 10px;
    color: aqua;
    cursor: pointer;
  }
`;