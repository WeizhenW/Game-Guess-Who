$(document).ready(onReady);
let personToPick = '';

function onReady() {
    promptName();
    //add all images to browser
    addImage();
    //when click image, check if it's the right person
    $('img').on('click', checkPerson);
}

//function to add all images
function addImage() {
    people.forEach(function(person) {
        let picture = $(`
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        `)
        $('.allPersons').append(picture);
        picture.data('personName', person.name);
        // console.log(picture.data());
    })
    
}

//function to prompt a random name
function promptName() {
    let sequenceNum = Math.floor(Math.random() * people.length + 1);
    // let sequenceNum = Math.floor(Math.random() * (1 + people.length - 1) + 1);
    personToPick = people[sequenceNum].name;
    $('#personName').text(personToPick);
}

// //function to check if it's the correct person clicked
function checkPerson() {
    let nameClicked = $(this).data().personName;
    console.log(nameClicked);
    if(nameClicked === personToPick) {
        alert('you got it!!!!!!! let\'do another one!');
        promptName();

    } else {
        alert('oops try again!');
    }
}

