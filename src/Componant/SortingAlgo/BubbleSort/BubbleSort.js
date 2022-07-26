import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './BubbleSort.css';

const BubbleSort = () => {
    const [value, setValue] = useState([]);
    const [rval, setRval] = useState([]);
    const [sval, setSval] = useState([]);

    const generateArray = () => {
        var myArray = [];
        var arrayMax = 80;
        var limit = arrayMax + 1;
        for (var i = 0; i < arrayMax; i++) {
            let arrVal = Math.floor(Math.random() * limit);
            if (arrVal >= 5) {
                myArray.push(arrVal);
            }
        }
        setRval(myArray);
        setSval(myArray);
        console.log('myArr', myArray);
    };

    const bubbleSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        console.log(arr);

        setValue(arr);
    };
    //  console.log('arrvlu', value);

    const sort = (e) => {
        e.preventDefault();
      
        console.log('rdfde', rval);
        console.log('sdddd', sval);
        bubbleSort(sval);
    };
    console.log('new', rval);
    console.log('sortVal', value);
    console.log('rval', rval);

    return (
        <>
            <Button onClick={generateArray}>Random</Button>
            <Button className="btn-dark ms-5" onClick={sort}>
                Sort
            </Button>

            <div className="array-container">
                <div>
                    {rval.map((val, indx) => (
                        <div
                            className="array-bar"
                            key={indx}
                            style={{ height: `${val}px` }}
                        >
                            {}
                        </div>
                    ))}
                </div>
            </div>
            <div className="array-container">
                <div>
                    {sval.map((val, indx) => (
                        <div
                            className="array-bar-rval"
                            key={indx}
                            style={{ height: `${val}px` }}
                        >
                            {}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BubbleSort;
