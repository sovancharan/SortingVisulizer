import logo from './logo.svg';
import './App.css';
import BubbleSort from './Componant/SortingAlgo/BubbleSort/BubbleSort';
import { Button } from 'bootstrap';

function App() {
    return (
        <div className="App">
            <h1>Sorting visulizer</h1>
            
            <BubbleSort />
        </div>
    );
}

export default App;
