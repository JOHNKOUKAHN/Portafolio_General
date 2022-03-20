


const Wordle = async function(){

    const boxes = [
        'LB11','LB12','LB13','LB14','LB15',
        'LB21','LB22','LB23','LB24','LB25',
        'LB31','LB32','LB33','LB34','LB35',
        'LB41','LB42','LB43','LB44','LB45',
        'LB51','LB52','LB53','LB54','LB55',
        'LB61','LB62','LB63','LB64','LB65',
    ];


    
    let  randomWord = async  function getWord(){
        let word = await fetch('https://random-word-api.herokuapp.com/word?lang=es')
            .then((response) => response.json());
            console.log(word[0])
            if(word[0].length == 5 && /[a-zA-Z]/.test(word)){
                console.log('Encontrada');
            }
            else word = getWord(); 
        return word;   
    };      


document.getElementById('body').disabled= true;
let word = await  randomWord(); 
document.getElementById('body').disabled= false;

let dayWord = word[0];

dayWord = dayWord.toUpperCase();

console.log(dayWord);





function FillLetterBox(letter){
    let wordArray =document.getElementById('wordArray');
    let lineNumber =Number(document.getElementById('lineNumber').innerText);
    

    if((wordArray.innerText.length < boxes.length) && (wordArray.innerText.length < 5 * lineNumber)){
        document.getElementById(boxes[wordArray.innerText.length]).innerText = letter;
        wordArray.innerText = wordArray.innerText + letter;
        wordLength.innerText = wordArray.innerText.length;
        wordLength.innerText = wordArray.innerlineNumberh;
    }   
}

function Backspace(){
    let wordArray =document.getElementById('wordArray');
    let lineNumber =Number(document.getElementById('lineNumber').innerText);
    
    if(wordArray.innerText.length > 5 * (lineNumber -1)){
        document.getElementById(boxes[wordArray.innerText.length -1]).innerText = null;
        wordArray.innerText = wordArray.innerText.substring(0,wordArray.innerText.length -1)
    }
}

function checkWord(){
    console.log(dayWord)
    let wordArray =document.getElementById('wordArray');
    let lineNumber =document.getElementById('lineNumber');
    if(wordArray.innerText.length != 5 * Number(lineNumber.innerText))
        return
    
    let slicedWord = wordArray.innerText.substring( 5 * (Number(lineNumber.innerText)-1), (5 * Number(lineNumber.innerText)) );
    for(let i = 0; i < 5; i++){
        let char = slicedWord[i]
        document.getElementById(boxes[(5 * (Number(lineNumber.innerText)-1)) + i]).style.backgroundColor = "#454545";
        document.getElementById(char).style.backgroundColor = "#454545";
           
        for(let j = 0; j < 5; j++){
            if(char === dayWord[j]){
                if(i == j){
                    document.getElementById(boxes[(5 * (Number(lineNumber.innerText)-1)) + i]).style.backgroundColor = "#008500";
                    document.getElementById(char).style.backgroundColor = "#008500";
                }
                else{
                    document.getElementById(boxes[(5 * (Number(lineNumber.innerText)-1)) + i]).style.backgroundColor = "#858500";    
                    document.getElementById(char).style.backgroundColor = "#858500";
                }
            }
        }
    } 
    

    if(slicedWord == dayWord){
     //   Win();
     
     setTimeout(() =>{},3000);
     
    alert('Bien Hecho!');
    // location.reload(true);
    }

    if(Number(lineNumber.innerText) == 6){
        alert('La palabra era: ' + dayWord );
        location.reload(true);
        
    }
    
    lineNumber.innerText =  Number(lineNumber.innerText)+1;
    
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  
console.log('algo');
document.addEventListener('keypress', (event) => {
    var name = event.key;

    if(isLetter(name)){
        FillLetterBox(name.toUpperCase());
    }
    else if(name === 'Enter'){
        checkWord();
    }    
  }, false);

  addEventListener("keydown", (e) => {  
    
    if (e.key === "Backspace") {
        Backspace();
    }
  });

}

Wordle();