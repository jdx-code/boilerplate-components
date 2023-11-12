import React from 'react'
import ZephyrImage from '../assets/zephyr.png'

const Cards = () => {
  
  const myCards = [
    { id: 1, name: 'Zephyr', desc: 'Software Agency', price: '$200 - $250', img: ZephyrImage },
    { id: 2, name: 'Zephyr', desc: 'Software Agency', price: '$200 - $250', img: ZephyrImage },
    { id: 3, name: 'Zephyr', desc: 'Software Agency', price: '$200 - $250', img: ZephyrImage },
    { id: 4, name: 'Zephyr', desc: 'Software Agency', price: '$200 - $250', img: ZephyrImage },
  ]

  return (
    <>  
        
        <h1 className='text-center mt-8 text-4xl'>Free Courses</h1>
        
        <div className='flex flex-col items-center sm:flex-row sm:justify-center sm:flex-wrap'>
            
            {myCards.map((card)=> (
                <div key={card.id} className='w-100 mt-8 mb-8 p-2 border-2 border-blue-200 shadow-2xl rounded-lg sm:mx-4'>
                    <img className="rounded-md" src={card.img} />
                    <div className='text-center p-2'>
                        <p>{card.name}</p>
                        <p>{card.desc}</p>
                    </div>                
                </div>
            ))}            
                      
        </div>
        
    </>
  )
}

export default Cards