const numbers = [1,2,3,4,5,6,7,8,9];
const nombres = [ 
    {
    name: 'cesar',
    age: 25,
    city: 'Mexico DF',
    }, 
    {
    name: 'jorge', 
    age: 29,
    city: 'Medellin',
    }, 
    {
    name: 'sandra', 
    age: 31,
    city: 'Bogota'
    }
];

_ = {
    // Metodo forEach
    each: (array, fn) => {
        for(let i = 0; i < array.length; i++) {
            fn(array[i], i, array)
        }
    },
    // metodo filter
    filter: (array, fn) => {
        const filteredData = [];
        for(let i = 0; i < array.length; i++) {
            if(fn(array[i], i, array)) {
                filteredData.push(array[i]);
            }
        }
        return filteredData;
    }, 
    // Metodo map
    map: (array, fn) => {
        const newData = [];
        for(let i = 0; i < array.length; i++) {
            newData.push(fn(array[i]));
        }
        return newData;
    },
    // Metodo find
    find : (array, fn) =>{
        let value = undefined;
        for(let i=0; i< array.length; i++){
           if(fn(array[i])){
            value= array[i];
            return value;
           }
        }
        return value;
    },
    // Metodo findIndex
    findIndex : (array,fn) => {
        let index = -1;
        for(let i=0; i<array.length; i++){
            if(fn(array[i])){
                index = i;
                return index;
            }
        }
        return index;
    },
    // Metodo contains
    contains : (array, value) =>{
        let index = -1;
        for(let i=0; i<array.length; i++){
            if(array[i] === value){
                index = i;
                console.log('Position: '+ index);
                return true; 
            }
        }
        console.log('No exist value');
        return false;
    },
    // Metodo pluck
    pluck: (objs, fn) => {
        let sol = [];
        for(let i in objs){
            if(objs[i].hasOwnProperty(fn)){
                sol.push(objs[i][fn]);
            }
        }
        return sol;
    },
    // Metodo without
    without : (array,value) => {
        for(let i in array){
            if(array[i] === value){
                array.splice(i, array[i]);
            }
        }
        return array;
    }
}
