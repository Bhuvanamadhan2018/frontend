const form = document.getElementById('form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementsByName('message').value;

    let isValid = true;

    if (name.length<3){
        resultDiv.innerHTML = 'Name must contain atleast 3 characters long.';
        isValid = false;

    }else if (!email.includes('@')){
        resultDiv.innerHTML = 'Email must contain an "@" symbol.';
        isValid = false;
    }else if (message === ""){
        resultDiv .innerHTML ='Message cannot be empty.';
        isValid = false
    }
    if (isValid){
        resultDiv.innerHTML = `Thank you,${name}!`;
    }
})
