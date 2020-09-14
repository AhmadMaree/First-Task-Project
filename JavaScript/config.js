
let _main_card = document.querySelector(".main-content");
let _main_bar = document.querySelector(".main-bar");
let _user_name = document.querySelector(".username-header");
/* Event when page is Load  */
window.onload = function () {
    
  
    

    getCountries().then( (response) => {
      /*  console.log(response); */

        response.forEach(function (items) {
          let _card_DIV = document.createElement('div');
          _card_DIV.className = "card";
          _card_DIV.id=items.name;
         let _card_img = document.createElement('img');
          _card_img.className = "card-image";
          let _card_name = document.createElement('h3');
          _card_name.className = "card-name";
          _card_name.innerHTML=items.name; 
          _card_img.src=items.flag.svgFile;
          _main_card.appendChild(_card_DIV);
          _card_DIV.appendChild(_card_img);
          _card_DIV.appendChild(_card_name);
         
          //for Bar menu 
         let _main_bar_content = document.createElement('div');
         _main_bar_content.className= "main-bar-content" ;
        let _main_bar_name = document.createElement('h3');
        let _img_icon_bar =document.createElement('img');
         _img_icon_bar.src= "./Images/forward.png";
         _img_icon_bar.alt= "fd.png";
         _img_icon_bar.className="main-bar-content-img";
         let _anchor = document.createElement("a")
         _anchor.href="#" + items.name;
         _anchor.textContent=items.name;
         _anchor.className="main-bar-content-a";

         _main_bar_name.appendChild(_anchor);
         _main_bar.appendChild(_main_bar_content);
         _main_bar_content.appendChild(_main_bar_name);
         _main_bar_content.appendChild(_img_icon_bar);
      });   
    }).catch ((err ) => {
           console.log('fetch failed', err);
    });
      get_User();
}

function iterate (items) {

}

/* anthor Way to get Data from object Promies 
async function getAllData () { 
    try {
        const response = await getCountries ();
        
      }
      catch (err) {
        console.log('fetch failed', err);
      }
} 


/*getusername*/

const get_User= function () {
 // let user_name = document.location.search.replace(/^.*?\=/,'');
  
  /* for local storge */ 
  let user_name = localStorage.getItem("username");
  console.log(user_name);
  _user_name.textContent=user_name;


}


/* Function fetch API */
function getCountries() {
    const pokemonQuery = `
    query {
    Country {
    name
    flag{
    _id
    svgFile
    }
    }
    }`;
    return window
    .fetch("https://cors-anywhere.herokuapp.com/https://countries-274616.ew.r.appspot.com", {
    method: "POST",
    headers: { "content-type": "application/json;charset=UTF-8" ,
               "X-Requested-With": "XMLHttpRequest"
            },
    body: JSON.stringify({ query: pokemonQuery })
    })
    .then((r) => r.json())
    .then((response) => response.data.Country);
 }




 

