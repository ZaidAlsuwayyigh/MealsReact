import React from 'react'

const MENU = [
    {
        mealName: 'Sushi',
        description: 'bla bla bla',
        price: 22.99
    },

    {
        mealName: 'Steak',
        description: 'bla steak bla',
        price: 30.99
    },

    {
        mealName: 'chicken',
        description: 'bla chicken bla',
        price: 20.99
    }
]


const Menu = () => {

    const getFullPrice = () =>{
        MENU.map(datum => datum.price).reduce((a, b) => a + b)
    }

    const handleSelect = (e) => {
        const selectValue = e.target.value * MENU[0].price;
        console.log( selectValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(MENU.map(datum => datum.price).reduce((a, b) => a + b));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>{MENU[0].mealName}</label>
                 <p>{MENU[0].description}</p>
                 <p>{MENU[0].price}</p>
                 <select onBlur={handleSelect} type="number">
                        <option value="1">1</option>
                        <option value="2">2</option>
                 </select>
                 <button type="submit">click</button>
            </form>
            <button onClick={getFullPrice}>click</button>
           
        </div>
    )

}

export default Menu;