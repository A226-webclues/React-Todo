import React, { useState } from 'react'

const Todo1 = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [editItems, setEditItems] = useState();

    const addItem = () => {
        if(!inputData) {
            alert ("Please Fill The Item");
        }else if (inputData && !toggleSubmit){
            setItems(
                items.map((value) =>{
                    if(value.id == editItems){
                        return {...value, name:inputData}
                    }
                    return value;
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setEditItems(null);
        }
    else{
            const allInputData = {id : new Date().getTime().toString(),
            name:inputData}
            setItems([...items,allInputData]);
            setInputData('');
        }
    }

    const editItem = (id) => {
        let newEdit = items.find((value) => {
            return value.id = id 
        });
        setToggleSubmit(false);
        setInputData(newEdit.name);
        setEditItems(id);
    }

    const deleteItem = (index) => {
        const deleted = items.filter((value) => {
            return index != value.id;
        });
        setItems(deleted);
    }

    const removeAll = () => {
        setItems([]);
    }

    return (
        <>

        {/* AddItems */}

          <div className="addItems">
            <p> Add Your Items Here </p>
              <input type="text" placeholder="Add Item..." 
                     value={inputData} 
                     onChange={(e) => { setInputData(e.target.value)}}/>
              <button onClick={addItem}>Add</button>
          </div> 

        {/* showItems */}

          <div className="showItems">
            {
                items.map((value) => {
                    return(
                        <div className="eachItem" key={value.id}>
                            <h3>{value.name}</h3>
                            <button onClick={() => editItem(value.id)}>Edit</button>
                            <button onClick={() => deleteItem(value.id)}>Delete</button>
                        </div>
                    )
                })
            }
          </div> 
          <br />
          <div>
              <button onClick={removeAll}>Remove All</button>
          </div>
        </>
    )
}

export default Todo1;
