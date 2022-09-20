const button_1 = document.querySelector(".next-button1");
const button_2 = document.querySelector(".next-button2");
const button_3 = document.querySelector(".next-button3");
const button_4 = document.querySelector(".next-button4");
const button_5 = document.querySelector(".next-button5");
const button_6 = document.querySelector(".results-button");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

let persons = [];

const addPerson = (ev)=>{
    ev.preventDefault(); //stop form from submitting
    let person = {
        name: document.getElementById("name").value,
        title: document.getElementById("title").value,
        role: document.getElementById("role").value,
        reports: document.getElementById("reportsTo").value,
        fact: document.getElementById("funFact").value
    }
    persons.push(person);
    document.forms[0].reset(); // to clear the form for the next entries

    //for display purposes only 
    console.warn('added' , {persons} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(persons, '\t', 2);
    $.ajax({
        url:"/test",
        type:"Post",
        contentType: "application/json",
        data: JSON.stringify(persons)
    });

    //saving to localStorage
    //localStorage.setItem('SurveyResults', JSON.stringify(names) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("btn").addEventListener('click', addPerson);
});


// First Questiion
button_1.addEventListener("click", function() {
    q1.style.display = "none";
    q2.style.display = "block";
});

// Second Questiion
button_2.addEventListener("click", function() {
    q2.style.display = "none";
    q3.style.display = "block";
});

// Third Questiion
button_3.addEventListener("click", function() {
    q3.style.display = "none";
    q4.style.display = "block";
});

// Fourth Questiion
button_4.addEventListener("click", function() {
    q4.style.display = "none";
    q5.style.display = "block";
});

// Display Thanks Message
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("btn").addEventListener("click", function() {
    addPerson;     
    q5.style.display = "none";
    end.style.display = "block";
    }
)});


