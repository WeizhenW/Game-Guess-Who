$(document).ready(onReady);
let personToPick = '';

function onReady() {
    promptName();
    //add all images to browser
    // addImage();
    //when click image, check if it's the right person
    $('.allPersons').on('click', 'img', checkPerson);
}

//function to add all images
// function addImage() {
//     people.forEach(function(person) {
//         let picture = $(`
//         <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
//         `)
//         $('.allPersons').append(picture);
//         picture.data('personName', person.name);
//         // console.log(picture.data());
//     })
    
// }

//function to prompt a random name and to add all images in random order
function promptName() {
    //remove any border highlighting
    $('img').removeClass('visual');
    let sequenceNum = Math.floor(Math.random() * people.length);
    // let sequenceNum = Math.floor(Math.random() * (1 + people.length - 1 - 0) + 0);
    personToPick = people[sequenceNum].name;
    $('#personName').text(personToPick);
    //clear out the existing images
    //shuffle the image order and add new ones
    $('.allPersons').empty();
    shuffleImg();
}

//function to check if it's the correct person clicked
function checkPerson() {
    //get the data method from the image
    let nameClicked = $(this).data().personName;
    console.log(nameClicked);

    //check if matched
    if(nameClicked === personToPick) {

        //if matched, show yellow border
        $(this).addClass('visual');
        //restart the game 2 sec after
        setTimeout(function() {
            promptName();
            // alert('you got it!!!!!!! let\'s guess another one!');
        }, 2000);
        
    } else {
        alert('oops try again!');
    }
}

//  function to shuffle the image order

function shuffleImg() {
    //create a tempArray to manipulate
    let tempArray = people;
    //loop through all the element in the array
    for(let i = 0; i < people.length; i ++) {
        //create random index
        let index = Math.floor(Math.random() * tempArray.length);

        //attach image at index to the browser
        let picture = $(`
        <img src="https://github.com/${tempArray[index].githubUsername}.png?size=250" alt="Profile image of ${tempArray[index].name}">
        `)
        $('.allPersons').append(picture);

        //set the data method on the picture element
        picture.data('personName', tempArray[index].name);
        //remove the img at index from the tempArray
        tempArray = tempArray.filter(person => tempArray.indexOf(person) !== index);
    }
}
