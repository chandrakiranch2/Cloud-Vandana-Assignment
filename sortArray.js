

function sortDescending(arr) {
    return arr.sort(function(a, b) {
        return b - a});
}

const Input = prompt("Enter a list of numbers separated by spaces:");

const inputArray = Input.split(' ').map(Number); 

if (inputArray.length > 0) {
    const sortedArray = sortDescending(inputArray);
    console.log("Sorted in descending order:", sortedArray);
} else {
    console.log("Please enter valid input.");
}
