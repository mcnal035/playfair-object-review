console.log('JS');

// object literal
const baseballHat = {
    type: 'cap',
    color: 'black',
    size: 'XL'
} 

const sunHat ={
    type: 'sun', // type, color, and size are known as properties or keys.
    color:'yellow',
    size: 'L'
}
console.log('baseballHat', baseballHat);
console.log(`the baseballHat is: ${baseballHat}`); // this is the incorrect way. its trying to write out an object as a string.
console.log(`the baseballHat is: ${baseballHat.color} in size ${baseballHat.size}`); // this defines the parts it needs.

// const with objects
// can I do this??
sunHat.size='XL';
console.log('after resetting the size', sunHat);

// cant set another object
/*
sunHat = {
    type: 'sun',
    color:'white',
    size: 'S'
}
console.log('after resetting the color', sunHat);
*/

// Object

let penguins = [
    {
     name: 'Emperor',
     colors: ['Black', 'White', 'Yellow'],
     size: 1.0,
     isCute: true
    },
    {
     name: 'Little',
     colors: ['Slate-blue', 'White'],
     size: 0.5,
     isCute: true
    },
    {
     name: 'Rockhopper',
     colors: ['Black', 'White', 'Yellow'],
     size: 0.75,
     isCute: true
    },
    {
     name: 'African',
     colors: ['Black', 'White'],
     size: 0.5,
     isCute: true
    },
    {
     name: 'Gentoo',
     colors: ['Black', 'White'],
     size: 0.5,
     isCute: true
    },
    {
     name: 'Sea Gull',
     colors: ['Gray'],
     size: 0.25,
     isCute: false
    },
    {
     name: 'Chinstrap',
     colors: ['Black', 'White'],
     size: 0.25,
     isCute: true
    },
    {
     name: 'Macaroni',
     colors: ['Black', 'White', 'Yellow'],
     size: 0.5,
     isCute: true
    },
   ];

//    function cutePens(thing) {
//        for (let i = 0; i < pengs.length; i++) {
//         let thing = outputArray[i];
//          if (thing.isCute === true) {
//             penguins.push(thing);
//        }
//        console.log('this penguin is cute', cutePens(penguins));
//        return thing;
//     }}

    function findTheCuteOnes(inputArray) {
        let outputArray = [];
        for(let thing of inputArray) {
            console.log('a thing', thing);
            if (thing.isCute === true)
            outputArray.push(thing);
        }
    }   console.log('these penguins are cute', findTheCuteOnes(penguins));

    // Object constructor functions
    function Hat(myType, myColor, mySize) {
        this.type = myType;
        this.color = myColor;
        this.size = mySize;
    }
    const fancyHat = new Hat('fancy', 'gold', 'M');
    console.log(fancyHat);
