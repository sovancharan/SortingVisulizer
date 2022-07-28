import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const QuickSort = () => {
    const [value, setValue] = useState([]);
    const [random, setRandom] = useState([]);
    const [sorted, setSorted] = useState([]);

    const generateArray = () => {
        var myArray = [];
        var arrayMax = 30;
        var limit = arrayMax + 1;
        for (var i = 0; i < arrayMax; i++) {
            let arrVal = Math.floor(Math.random() * limit);
            if (arrVal >= 5) {
                myArray.push(arrVal);
            }
        }
        setRandom(myArray);
        setSorted(myArray);
    };

    // A utility function to swap two elements
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function partition(arr, low, high) {
        let pivot = arr[high];

        let i = low - 1;

        for (let j = low; j <= high - 1; j++) {
            // If current element is smaller
            // than the pivot
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return i + 1;
    }

    async function quickSort(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);

            await sleep(2000);
            setValue(arr[pi]);

            console.log('pi', arr[pi]);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }


    let arr = random;
    let n = arr.length;



    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const sort = (e) => {
        e.preventDefault();

     
        quickSort(random, 0, n - 1);
        console.log('sortfunction');
    };


    return (
        <>
            <Button onClick={generateArray}>Random</Button>
            <Button className="btn-dark ms-5" onClick={sort}>
                Quick Sort
            </Button>

            <div className="array-container">
                <div>
                    {random.map((val, indx) => (
                        <div
                            className="array-bar"
                            key={indx}
                            style={{ height: `${val}vh` }}
                        >
                            {val}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default QuickSort;
