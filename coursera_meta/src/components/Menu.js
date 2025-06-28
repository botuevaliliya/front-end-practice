import React from 'react';
import recipies from '../recipes';
import Swal from 'sweetalert2'

const Menu = () => {
    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
            title: "Add the dish to the cart?",
            text: "You won't regret about this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Added to the cart!",
                text: "The dish is in the cart.",
                icon: "success"
              });
            }
          });
    }

    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This week's specials!</h2>
                <button>To the menu</button>
            </div>
            <div className='cards'>
                {
                    recipies.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div>
                            <div>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderbtn' onClick={()=>handleOrder(recipe.id)}>Add to cart</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;