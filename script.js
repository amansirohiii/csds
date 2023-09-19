const form=document.getElementById("form");
let namee=document.getElementById("name");
let username=document.getElementById("username");
let desc=document.getElementById("desc");
let posts=document.getElementById("posts");
let followers=document.getElementById("followers");
let following=document.getElementById("following");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}




//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}




//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([namee,username,desc,posts,followers,following]);
    // checkLength(username,3,15);
    checkLength(posts,6,25);
    checkusername(username);
    checkfollowersMatch(posts, followers);

    });