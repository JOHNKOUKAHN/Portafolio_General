
let arr="["
let sum = 0;
for (let index = 0; index < words.length; index++) {
    
    if(words[index].length == 5 &&  !/.*[áéíóúÁÉÍÓÚñÑ].*/.test(words[index])){
        arr = arr + "'"+words[index]+"', ";
        sum++;
        if(sum == 1000) break;
    }
    
}

console.log(sum * 5);
console.log(arr.length);
arr = arr + "]";



document.getElementById('area').innerText = arr;