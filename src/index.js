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

//tum img'lere border olsun mouse üzerine gelince. sonra geri dönsün. renkleri uyumlu olsun.

const imgColors = ["#feba4d", "#d5d3cf", "#7fbec0", "#9fcea2"];

let amusementImgs = document.querySelectorAll("img");
     
amusementImgs.forEach((item,index)=>{
    item.addEventListener("mouseover", (e)=>{
        e.target.style.border = `solid 2px ${imgColors[index]}`;
    });
    item.addEventListener("mouseout", (e)=>{
        e.target.style.border = "none";
    });
});

// ilk otobus img'si sayfada scroll edince ters dönsün.

const busImg = document.querySelector("img");

document.addEventListener("wheel", ()=>{
    busImg.style.transform = "rotate(180deg)";
});

// klavyede e'ye basınca arkaplanı kırmızı yap.

document.addEventListener("keydown", (e)=>{
    if (e.key==="p"){
        document.querySelector("body").style.backgroundColor = "red"
    }
});

//bir tane drag/drop event sürüklenince sürükleniyoruz yazsın ve rengi yeşil olsun,bırakınca eski renk gelsin.

const draggables = document.querySelectorAll("[draggable='true']");

draggables.forEach(item=>{
    item.addEventListener("dragstart", (e)=>{
        console.log("sürükleniyoruz");
        item.classList.add("draggable");
    })
    item.addEventListener("dragend", (e)=>{
        item.classList.remove("draggable");
    })
})


//aynısı sonraki çalışmam
// const navLinks = document.querySelectorAll(".nav-link")

// navLinks.forEach(a=>{
//     a.addEventListener("mouseover", changeColor);
//     a.addEventListener("mouseout", changeBack)
// })

// function changeColor (event) {
//     event.target.style.backgroundColor = "black";
//     event.target.style.color = "white";
// }

// function changeBack (event) {
//     event.target.style.backgroundColor = "";
//     event.target.style.color = "";
// }

// //

// navLinks.forEach(element=>{
//     element.addEventListener("mousedown", ()=>{
//         element.style.transition = "0s";
//         element.style.transform = "scale(.9)";
//     });
//     element.addEventListener("mouseup", ()=>{
//         element.style.transition = "0.3s";
//         element.style.transform = "scale(1)"
//     })
// })

// navLinks.forEach((item)=> {
//     item.style.padding = "1rem";
//     item.style.transition = ".2s";
//     item.style.borderRadius = "0.5rem";
// })

