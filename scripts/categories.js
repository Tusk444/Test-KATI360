var categories = ['Céréales','Fruits','Légumes','Fourrages'];
let cards = '';
let i = 0 ;
var counter = 0;

categories.forEach(r => {
i++;
cards += `
<div class="col-6 mt-2">
      <div class="card roundPlus mouse" onclick="selectedCard('card-${i}')" id=card-${i} style="width: 30rem;">
          <div class="card-body">
            <img class="img-fluid my-3" src="assets/${r}.jpg" alt="">
            <input class="float-end" name="cat" type="radio" value="${r}">
            <h5 class="card-title secondaryColor pt-3">${r}</h5>
          </div>
      </div>
  </div>
`
});

document.querySelector("#cat").innerHTML = cards;

function selectedCard(id) {
    if(document.getElementById(id).firstElementChild.children[1].checked == false)
    {
        document.getElementById(id).classList.toggle("selected");
        document.getElementById(id).firstElementChild.lastElementChild.classList.remove('secondaryColor');
        document.getElementById(id).firstElementChild.lastElementChild.classList.toggle('primaryColor');
        document.getElementById(id).firstElementChild.children[1].checked = true;
        counter ++;
    }
    else {
        document.getElementById(id).firstElementChild.lastElementChild.classList.remove('primaryColor');
        document.getElementById(id).firstElementChild.lastElementChild.classList.toggle('secondaryColor');
        document.getElementById(id).firstElementChild.children[1].checked = false;
        document.getElementById(id).classList.remove("selected");
        counter --;
    }
    
    if(counter > 0)
    {   
        buttons = document.getElementsByClassName("action");
        for(i = 0; i < buttons.length ; i++)
        {
            buttons[i].classList.remove("btn-outline-light");
            buttons[i].classList.add("btn-outline-success");
            buttons[i].classList.add("bg-success");
            buttons[i].classList.add("text-white");
        }
    }
    else{
        buttons = document.getElementsByClassName("action");
        for(i = 0; i < buttons.length ; i++)
        {
            buttons[i].classList.remove("btn-outline-success");
            buttons[i].classList.remove("bg-success");
            buttons[i].classList.remove("text-white");
            buttons[i].classList.add("btn-outline-light");
        }
    }

}