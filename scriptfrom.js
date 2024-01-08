function ffn(){
    let uname=document.getElementById('uname').Value;
    let name=document.getElementById('name').Value;
    let email=document.getElementById('email').Value;
    let password=document.getElementById('pwrd').Value;
    var agree = document.getElementById('agree').checked;

    if(uname===''){
        alert("please enter your user name");
        return;
    }
    if(name === ''){
        alert("please enter your name");
        return;
    }
    if(email === ''){
        alert("please enter your email");
        return;
    }
    if(password === ''){
        alert("please enter your password");
        return;
    }
    if (agree!=true) {
        alert('Please agree to the terms and conditions');
        return;
    }
    alert("form submitted successfully")
}