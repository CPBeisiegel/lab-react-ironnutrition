
import {useState} from 'react'

export function FoodBox({foods}) {

const [quantity, setQuantity] = useState(0)

function handleChange(event) {
    setQuantity(event.target.value) 
}

    return (
        <div>
            {foods.map((currentFood) => (
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={currentFood.image} alt={currentFood.name}/>
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{currentFood.name}</strong> <br />
                            <small>{currentFood.calories} cal</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input 
                            className="input" 
                            type="number" 
                            min="0" 
                            onChange={handleChange} 
                            

                            />
                            </div>
                            <div className="control">
                            <button 
                            className="button is-info"
                            onClick={() => {}}
                            >
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                </div>
                
            ))}

            
        </div> 
    )
}

