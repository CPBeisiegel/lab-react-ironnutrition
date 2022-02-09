import {useState} from 'react';

export function AddFood(props){

    const [form, setForm] = useState({
        name: '',
        calories: 0,
        image: '',
    })


    /* function handleChange(event){
        let value = event.target.value;

        if(event.target.name === 'calories'){
            value = event.target.valueNumber
        }
        setForm({...form, [event.target.name]: value})
    } 
    
    
    function handleSubmit(event) {
       event.preventDefault();

        props.setFoods([...props.foods, form]);
    }
    
    
    
    */

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Food Name</label>
        <div className="control">
          
          <input
            className="input"
            name="name"
           // onChange={handleChange}
           // value={form.name}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Food Calories</label>
        <div className="control">
          <input
            type="number"
            className="input"
            name="calories"
            //onChange={handleChange}
           // value={form.calories}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Food Image</label>
        <div className="control">
          <input
            className="input"
            name="image"
           //onChange={handleChange}
            //value={form.image}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
         
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
        </div>
    )
}