let descriptionContainer = document.getElementById('description-container')
let description = document.getElementById('description')
let tecnologies = document.getElementById('tecnologies')

descriptionContainer.style.visibility = 'hidden';

let descriptionsJson = JSON.parse(descriptions);

function display(position){
    descriptionContainer.style.visibility = 'visible';


    let p = document.createElement('p')
    let tittle = document.createElement('h2')
    let h2 = document.createElement('h2')
    let ul = document.createElement('ul')

    
    tittle.innerText = "<< " + descriptionsJson[position-1].name + " >>";
    description.appendChild(tittle)

    p.innerHTML = descriptionsJson[position-1].description

    description.appendChild(p)


    h2.innerText = "Technologies"
    tecnologies.appendChild(h2);


    for( let i = 0; i < descriptionsJson[position-1].tecnologies.length; i++){
        let  li = document.createElement('li');
        li.innerHTML = descriptionsJson[position-1].tecnologies[i];
        console.log(descriptionsJson[position-1].tecnologies[i])
        ul.appendChild(li)
    }
    tecnologies.appendChild(ul);




}

function clearDescription(){
    tecnologies.innerHTML = null;
    description.innerHTML = null;
    descriptionContainer.style.visibility = 'hidden';
}
