import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './BubbleSort.css';

const BubbleSort = () => {
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

    const bubbleSort = async (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
                await sleep(0);
            }

            // console.log('arr=', arr);
            setValue(arr[i]);
            console.log('Val=', value);
        }
    };
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const sort = (e) => {
        e.preventDefault();

        bubbleSort(random);
        console.log('sortfunction');
    };

    return (
        <>
            <Button onClick={generateArray}>Random</Button>
            <Button className="btn-dark ms-5" onClick={sort}>
                Bubble Sort
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
            {/* <div className="array-container">
                <div>
                    {value.map((val, indx) => (
                        <div
                            className="array-bar-rval"
                            key={indx}
                            style={{ height: `${val}vh` }}
                        >
                            {val}
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    );
};

export default BubbleSort;
