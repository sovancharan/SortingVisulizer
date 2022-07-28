import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const SelectionSort = () => {
    const [value, setValue] = useState([]);
    const [random, setRandom] = useState([]);
    const [sorted, setSorted] = useState([]);

    const generateArray = () => {
        var myArray = [];
        var arrayMax = 60;
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

    const selectionSort = async (arr) => {
        //  console.log(arr.length);
        for (let i = 0; i < arr.length; i++) {
            let min = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                // swap(arr[min],arr[i])
                let temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
            setValue(arr[i]);
            console.log('Val=', value);
            await sleep(100);
        }
        // for (let i = 0; i < arr.length; i++) {
        //     console.log(arr[i]);
        // }
    };

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const sort = (e) => {
        e.preventDefault();

        selectionSort(random);
        console.log('sortfunction');
    };
    // let arr1 = [5, 7, 2, 3, 1, 0];
    // selectionSort(arr1);

    return (
        <>
            <Button onClick={generateArray}>Random</Button>
            <Button className="btn-dark ms-5" onClick={sort}>
                Selection Sort
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

export default SelectionSort;
