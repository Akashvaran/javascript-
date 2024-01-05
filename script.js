let age=prompt("enter your age")
let contry=prompt("enter your contry name")

if (age >= 18){
    let print =document.createElement('h2');
    print.textContent=("you are eligble for voied");
    document.body.append(print);
    print.style.color='green';
}
else{
    let print2 =document.createElement('h5');
    print2.textContent=("you are not eligble for voied");
    document.body.append(print2);
    print2.style.color="red";
}