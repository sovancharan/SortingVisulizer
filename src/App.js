// import logo from './logo.svg';
import './App.css';
// import BubbleSort from './Componant/SortingAlgo/BubbleSort/BubbleSort';
// import { Button } from 'bootstrap';

import BubbleSort from './Componant/SortingAlgo/BubbleSort/BubbleSort';
import InsertionSort from './Componant/SortingAlgo/InsertionSort/InsertionSort';
import MargeSort from './Componant/SortingAlgo/MargeSort/MagreSort';
import QuickSort from './Componant/SortingAlgo/QuickSort/Quicksort';
import SelectionSort from './Componant/SortingAlgo/Selectionsort/SelectionSort';

function App() {
    return (
        <div className="App">
            <h1>Sorting visulizer</h1>

            <BubbleSort />
            <SelectionSort />
            <InsertionSort />
            <QuickSort />
            <MargeSort/>
        </div>
    );
}

export default App;
