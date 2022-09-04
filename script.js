const id = document.getElementById('id')
const cont = document.getElementById('container')
const pidiv = document.createElement('div')
pidiv.id = 'pi'
const newdigit = document.createElement('div')
newdigit.id = 'newdigit'
let pistring = '3.'


//function to calculate pi to nth digit. change *10020* value to pick digit
let i = 1n;
let x = 3n * (10n ** 10020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;

}
let string = (pi / (10n ** 20n)).toString();

//function to generate Pi per digit and display last digit in center of page. 
//increments wait as Pi get larger to simulate slowing of computation 
function picount(){
    pistring = pistring+string[xz]
    pidiv.innerText = pistring
    cont.replaceChildren()
    newdigit.innerText = string[xz]
    cont.appendChild(pidiv)
    cont.appendChild(newdigit)
    wait++
}


//loop and delay function
let wait = 0
let xz = 1
function makeitallwork(){
    if(xz < string.length)setTimeout(function timer(){
        picount()
        xz++
        makeitallwork()
    },wait*0.01);
} 
makeitallwork()
console.log(string)