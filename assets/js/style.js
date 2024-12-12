const btnLoad= document.getElementById('btnload');
const btnsecondary= document.getElementById('btnsecondary');
const image= document.getElementById('img');

let newimage;

document.addEventListener('load', init());

const URL='https://www.pexels.com/api/key/'

function init() {
    loadList();
}

async function loadList(){
   await fetch(URL,{
        method:'GET',
        headers:{
            Authorization: "BYyoZai2cpWNoLEgJ8JNMQrLJdsQtYXkk88ZpFuoBlSqcQqrbKQFGV93",
        },
        body: JSON.stringify(myPost)
    }) .then((response)=>{
        return response.JSON();
    }) .then((data)=> {
       newimage=data;
       printdata;
    }) .catch((error) =>{
        console.log(error);
    });
}

document.getElementById("btnload").addEventListener("click", function() {
    const image = document.querySelectorAll("#imgid");
const n}
}