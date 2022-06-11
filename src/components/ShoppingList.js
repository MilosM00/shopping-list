import React from "react";

const ShoppingList = () =>{
    return(

        <div className="shopping-list-overlay">

            <div className="inline">

                <input className="input-list" type="text" placeholder="Add New Item..." />
                <button className="button-add"><i className="fa fa-plus"></i></button>

            </div>

        </div>

    );
};

export default ShoppingList;