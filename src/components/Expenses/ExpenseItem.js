import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import CreateDate from "./CreateDate";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const WhenClickedHandler = () => {
        setTitle("UPDATTTTTTTEEEEEEEEE");
        console.log("CLICKED AGAIN!", title);
    };
    // ! *************************************
    // ! *************************************
    return (
        <Card className="expense-item">
            <CreateDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">£{props.amount}</div>
            </div>
            <button onClick={WhenClickedHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
