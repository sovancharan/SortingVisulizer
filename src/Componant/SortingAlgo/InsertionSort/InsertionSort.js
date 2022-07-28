import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const InsertionSort = () => {
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

    const insertionsort = async (arr) => {
        //  arr = [5, 4, 10, 1, 6, 2];

        for (let i = 1; i < arr.length; i++) {
            let temp = arr[i];
            let j = i - 1;
            while (j >= 0 && temp < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = temp;

            await sleep(100);
            setValue(arr[j]);
            console.log('Val=', value);
        }
        //  for (let i = 0; i < arr.length; i++) {
        //      console.log(arr[i]);
        //  }
    };

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const sort = (e) => {
        e.preventDefault();

        insertionsort(random);
        console.log('sortfunction');
    };
    // let arr1 = [5, 7, 2, 3, 1, 0];
    // selectionSort(arr1);

    return (
        <>
            <Button onClick={generateArray}>Random</Button>
            <Button className="btn-dark ms-5" onClick={sort}>
                Insertion Sort
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

export default InsertionSort;
