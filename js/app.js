// global variables
let employees = []; // employees -- empty array that will hold values from the API
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US` // urlAPI -- string literal that stores the url of the API, complete with desired options.
const gridContainer = document.querySelector(".grid-container"); // gridContainer -- stores the DOM element that is the container for the employees
const overlay = document.querySelector(".overlay"); // overlay -- stores the DOM element that acts as an overlay for the modal.
const modalContainer = document.querySelector(".modal-content"); // modalContainer -- stores the DOM element that is a container for the modal information.
const modalClose = document.querySelector(".modal-close"); // modalClose -- stores the DOM element that is the modal’s close button.

// fetch data from API 
fetch(urlAPI)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => response.results)
    .then(displayEmployees)
    .catch(err => console.log(err))

// display employees function
function displayEmployees(employeeData) {

    employees = employeeData;

    // store the employee HTM: as we create it
    let employeeHTML = '';

    // loop through each employee and create HTML markup
    employees.forEach((employee, index) =>{
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;

        // template literals
        employeeHTML += `
            <div class = "card" data-index = "${index}">
                <img class = "avatar" src = "${picture.large}">
                <div class = "text-container">
                    <h2 class = "name">${name.first} ${name.last}</h2>
                    <p class = "email">${email}</p> 
                    <p class = "address">${city}</p>
                </div>
            </div>        
        `
    });

    gridContainer.innerHTML = employeeHTML;
}

// displayModal function