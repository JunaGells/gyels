// 
// Declaring varible to contain the elements from HTML
let div1 = document.getElementById('mainDiv');

let div2 = document.getElementById('smallDiv');

let head2 = document.querySelector('h2');

let p1 = document.querySelector('p');

let btn1 = document.getElementById('divBtn');


// This function below is for our first scene
function codingB () {

    head2.innerHTML = 'let the battle commence';

    div2.style.backgroundImage = 'url("fig.avif")';

    p1.innerHTML = 'Hope you are not here to quit';

    btn1.innerHTML = '<button onclick = "takeTwo()">Love</button>    <button onclick = "deadEnd()">War</button>';
}

// The is function for the loop
 function pemjayMo(){
    head2.innerHTML = 'The End';

    div2.style.backgroundImage = 'url("cof.gif")';

    p1.innerHTML = 'You are dead, go back to starting';

    btn1.innerHTML = '<button onclick = "codingB()">Love</button>';

 }

// The function below is for our second scene
function takeTwo (){
    head2.innerHTML = 'Lets jump right in';

    div2.style.backgroundImage = 'url("yes.gif")';

    p1.innerHTML = 'choosing the love of your life will lead to a happy life';

    btn1.innerHTML = '<button onclick = "deadEnd()">give up?</button>    <button onclick = "takeFour()">propose</button>';
}

// The function  below is for the fourth scene
function takeFour(){
    head2.innerHTML = 'Keep choosing your destiny!';

    div2.style.backgroundImage = 'url("love.avif")';

    p1.innerHTML = 'I would rather share one lifetime with you than face all the war of this world alone';

    btn1.innerHTML = '<button onclick = "deadEnd()">Nope</button>    <button onclick = "takeFive()">destiny</button>';
}

// The function below is for  fifth scene

function takeFive(){
    head2.innerHTML = 'What you wiating for? choose!';
    div2.style.backgroundImage = 'url("weds.jpg")';
    p1.innerHTML = 'Choosing you was never a wrong choice.';
    btn1.innerHTML = '<button onclick = "deadEnd()">wrong choice</button>    <button onclick = "takeSix()">right choice</button>';

}

// The function below is for sixth scene

function takeSix(){
    head2.innerHTML = 'Life without war!';
    div2.style.backgroundImage = 'url("IMG.jpg")';
    p1.innerHTML = 'Love and War always go together but i would teach peace rather than war, love rather than hate.';
    btn1.innerHTML = '<button onclick = "deadEnd()">hate</button>    <button onclick = "takeSeven()">peace</button>';

}

// The function below is for seventh scene

function takeSeven(){
    head2.innerHTML = 'Life really had been beautiful';
    div2.style.backgroundImage = 'url("old.webp")';
    p1.innerHTML = 'Congratualation you have got to spent a very beautiful life!';
    btn1.innerHTML =   "<button onclick = 'codingB()'> play again?</button>"
}


// The code below is for our game over scenario and this code will be used for our story loop

function deadEnd() {
    head2.innerHTML = 'Call the gun shoot!!!';
    
    div2.style.backgroundImage = 'url("end.avif")';
    p1.innerHTML = 'All is fair in love and and war but war was never fair!  Would you like to play again?';

    btn1.innerHTML = "<button onclick = 'codingB()'>Yes!!!</button> <button  onclick = 'pemjayMo()' >End</button>"
}