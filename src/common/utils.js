import React, { useState, useEffect } from 'react';

// Hook
const useDebounce = (value, delay) => {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
            clearTimeout(handler);
        };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );

    return debouncedValue;
}

// Replacer for /url/{pathParam}
const urlReplacer = (urlTemplate, replaceObj, queryParamsObj) => {
    var new_str = urlTemplate;

    for (var key in replaceObj) {
        if (!replaceObj.hasOwnProperty(key)) {
            continue;
        }
        new_str = new_str.replace('{'+key+'}', replaceObj[key]);
    }

    if(queryParamsObj && Object.keys(queryParamsObj).length > 0){
        new_str += "?" + Object.keys(queryParamsObj).map(k => k+"="+queryParamsObj[k]).join("&");
    }

    return new_str;
}

// Flatten data object and mark lineage information
const sample = [
    {
        name:"parent1",
        childs:[
            {name: "child1-1", childs:[]},
            {name: "child1-2", childs:[
                {name:"childOfChild1-2" , childs: []}
            ]}
        ]
    },
    {
        name:"parent2",
        childs:[
            {name: "child2-1", childs:[]},
            {name: "child2-2", childs:[
                {name:"childOfChild2-2" , childs: []}
            ]}
        ]
    }
]

// Flatten data object and mark lineage information. usage: flattenData(sample,"childs")
const flattenData = (dataArray, childKeyName) => {
    let uniqueId = 1;
    const resultData = [];
    const setIdRecursively = (obj, parentId) =>{
        obj.id = uniqueId++;
        if(obj.hasOwnProperty(childKeyName) && obj[childKeyName].length > 0){
            obj[childKeyName].forEach(child => setIdRecursively(child, obj.id));
        }
        delete(obj[childKeyName]);
        obj.parent = parentId? parentId: null;
        resultData.push(obj)
    };
    dataArray.forEach(data => {
        setIdRecursively(data);
    });
    console.log(resultData);
    return resultData;
}

export {useDebounce, urlReplacer, flattenData};