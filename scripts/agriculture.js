var regions = ['Dakar','Thiès','Saint-Louis','Diourbel','Kédougou','Matam','Kaffrine','Kaolack','Tambacounda','Louga','Kolda','Fatick','Sédhiou','Ziguinchor'];
let cards = '';
let i = 0 ;
var counter = 0;

regions.forEach(r => {
i++;
cards += `
<div class="col-lg-3 col-md-4 col-sm-5 mt-2">
      <div class="card roundPlus mouse" onclick="selectedCard('card-${i}')" id=card-${i} style="width: 18rem;">
          <div class="card-body">
            <i class="fas fa-map-marker-alt secondaryColor"></i>
            <input class="float-end" name="${i}" type="checkbox" value="${r}">
            <h5 class="card-title secondaryColor pt-3">${r}</h5>
          </div>
      </div>
  </div>
`
});

document.querySelector("#loc").innerHTML = cards;

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
    
    document.getElementById("counter").innerHTML = counter;

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