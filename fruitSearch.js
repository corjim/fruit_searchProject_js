let fruits =
    [// List of friuts to match in the search button
        'Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loganberry', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tangerine', 'Tamarillo', 'Tamarind', 'Ube', 'Watermelon'];

const resultsBox = document.querySelector('.result-box'); // selecting the elements to display the friuts selection.
const inputBox = document.querySelector('#input-box'); // selecting the element for user input.

// Function that will be executed during user input/typing keys.

inputBox.onkeyup = function () {
    let result = []; // creating an empty array to house the filtered keyword.
    let input = inputBox.value; // variable for letters user typed, converted to lower case.

    console.log(input) // prints letter typed.

    if (input.length) {
        result = fruits.filter((fruit) => {
            return fruit.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        }); // filter through the fruits for the user's input.
        console.log(result); // Displays array of matching friuts word
    }
    display(result); // Execute the output as the user is typing.

    if (!result.length) {
        resultsBox.innerHTML = ''; // Closes the div layer if nothing is matched.
    }
};

//  Function that will display result for user.

function display(result) {
    const content = result.map((list) => {
        return '<li onclick = selectInput(this)>' + list + '</li>'
    }); // variable for the listed item of the result.

    resultsBox.innerHTML = '<ul>' + content.join('') + '</ul>'; // Adds the content to select view for selection.
}

function selectInput(lst) {
    inputBox.value = lst.innerHTML; // Attaches selected value to input field.

    resultsBox.innerHTML = ''; // Hides the unselected list.
}

