import React from "react";

const ShoppingList = () =>{

    const [items, setItems] = React.useState([
        {itemName: "Test 1", isSelected: true}
    ]);

    const [inputValue, setInputValue] = React.useState("");

    const onChangeEvent = (e) =>{
        setInputValue(e.target.value);
    };

    const onClickEvent = () =>{
        const newItem = {
            itemName: inputValue,
            isSelected: true
        };

        setItems(prevItems =>[
            ...prevItems,
            newItem
        ]);

        setInputValue("");
        
    };

    const buttonCheck = (index) =>{
        const newItems = [...items];

        newItems[index.target.id].isSelected = !newItems[index.target.id].isSelected;
        
        setItems(newItems);
    };

    const clearList = () =>{
        setItems([]);
    };

    return(

        <div className="shopping-list-overlay">

            <div className="inline">

                <input className="input-list" onChange={onChangeEvent} value={inputValue} type="text" placeholder="Add New Item..." />
                <button className="button-add" onClick={onClickEvent} ><i className="fa fa-plus"></i></button>

            </div>

            <button className="clear-list" onClick={clearList}>Clear List</button>
            
            {items.map((item, index) =>{
                return(

                    item.isSelected === true ? 
            
                    <div className="inline-item" key={index}>
                    
                        <p className="item-name">{item.itemName}</p>
                        <p className="circle" onClick={buttonCheck}><i className="fa fa-circle" id={index}></i></p>
                    
                    </div>
                    
                    :<div className="inline-item" key={index}>
                    
                        <p className="item-name-false">{item.itemName}</p>
                        <p className="circle" onClick={buttonCheck}><i className="fa fa-check" id={index}></i></p>
                    
                    </div>

                );
            })}
            

        </div>

    );
};

export default ShoppingList;