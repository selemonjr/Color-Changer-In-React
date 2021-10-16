import ReactDOM from 'react-dom';
import {useState} from "react";
import "./index.css";
const App = () => {
    const [change,SetChange] = useState(false)
    const Colors = ["#ff7f50","#61254a","#fbec39","#e1ad01","#3eb489"]
    const Change = () => {
        const Random = Math.floor(Math.random() * Colors.length)
        document.body.style.backgroundColor = Colors[Random];
        SetChange(!change)
    }
    return (
        <div className="container">
        <h1>BackGround-Color-Changer</h1>
            <button onClick={Change}>Change</button>
        </div>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

