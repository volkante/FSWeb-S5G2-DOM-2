import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!


/*nav a daki linklerin mouse üzerine gelince rengi değişsin. Mouse gidince
eski renkler geri dönsün*/


const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((item)=> {
    item.addEventListener("mouseover", ()=>{
        item.style.backgroundColor = "orange";
        item.style.color = "white"
    })
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor ="";
        item.style.color ="";
    })
    /*nav a daki linklere basınca linkler küçülsün. sonra eski haline dönsün */
    item.addEventListener("mousedown", () => {
        item.style.backgroundColor = "#d77a07";
        item.style.color = "white"
        item.style.transition = "0s";
        item.style.transform = "scale(.9)";
    })
    item.addEventListener("mouseup", () => {
        item.style.backgroundColor = "";
        item.style.color= "";
        item.style.transition="0.3s";
        item.style.transform = "scale(1)"
    })
})

/* şimdi istersek nav a işlemine birkaç şey daha ekleyebiliriz. 
bu kısım opsiyonel */

navLinks.forEach((item)=> {
    item.style.padding = "1rem";
    item.style.transition = ".2s";
    item.style.borderRadius = "0.5rem";
})

/*footer'ın üstüne yer alan butonları her doubleclick'te biraz büyüt */

const btnSizes = [1,1,1];

let buttonsAboveFooter = document.querySelectorAll(".btn");

buttonsAboveFooter.forEach((item, index)=>{
    item.addEventListener("dblclick", () => {
    btnSizes[index] *= 1.25;
    item.style.transform = `scale(${btnSizes[index]})`;
    });
});