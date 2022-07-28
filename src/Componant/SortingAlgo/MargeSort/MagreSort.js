import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const MagreSort = () => {
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

 async   function merge(arr, l, m, r) {
        var n1 = m - l + 1;
        var n2 = r - m;

        var L = new Array(n1);
        var R = new Array(n2);

        for (let i = 0; i < n1; i++) L[i] = arr[l + i];
        for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

        let i = 0;

        let j = 0;

        let k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        setValue(arr[k])
      await sleep(300);

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
           setValue(arr[k]);
           await sleep(300);

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
           setValue(arr[k]);
           await sleep(300);
    }
    

    async function mergeSort(arr, l, r) {
        if (l >= r) {
            return;
        }
        let m = l + parseInt((r - l) / 2);

      await  mergeSort(arr, l, m);
      
      await  mergeSort(arr, m + 1, r);
       
       await merge(arr, l, m, r);
        
    }

   

    var arr = random;

    var arr_size = arr.length;



    const sort = (e) => {
        e.preventDefault();

   
        mergeSort(random, 0, arr_size - 1);
        console.log('sortfunction');
    };
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <>
            <Button onClick={generateArray}>Random</Button>
            <Button className="btn-dark ms-5" onClick={sort}>
                Marge Sort
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

export default MagreSort;
