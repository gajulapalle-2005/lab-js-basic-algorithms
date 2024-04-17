console.log("I'm ready!");
let hacker1= "david";
console.log("The driver's name is "+ hacker1);

let hacker2="atul";
console.log("The navigator's name is " + hacker2);




if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has "+hacker1.length +" characters.");
}
else{
    if(hacker1.length < hacker2.length){
        console.log("It seems that the navigator has the longest name, it has " + hacker2.length +" characters.");
    }
    else
    {
        console.log("Wow, you both have equally long names, "+hacker1.length+" characters!");
    }
}




console.log(hacker1.toUpperCase() .split("") .join(" "));

let newString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    newString += hacker2[i];
}
console.log(newString);