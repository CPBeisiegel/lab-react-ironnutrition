import React from 'react';
import 'bulma/css/bulma.css';
import { useState } from 'react'; 

import foods from './foods.json'; 
import { FoodBox } from './components/Foodbox';
 import {Search} from './components/Search';
/*  import {AddFood} from './components/AddFood'; */




function App() {

  const [search, setSearch] = useState('')
 
  return (
    <div className="App">

      <h1 className="title">IronNutrition</h1>
    
     
      <Search 
        search={search}
        setSearch={setSearch}
        />

      <FoodBox foods={
        foods.filter(food => ((food.name)).toLowerCase()
        .includes(search.toLowerCase()) 
        )
            
        }/>
       

     {/*  <AddFood /> */}
    </div>
  );
}

export default App;
