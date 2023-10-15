let Emonth=document.querySelector(".month")
let Eday=document.querySelector(".day");
let date=document.querySelector(".date");
let year=document.querySelector(".year")

let setDa=new Date();
setTimeout(() => {
    Emonth.innerText=setDa.toLocaleString("en", {
        month: "long",
      });
      
    Eday.innerText = setDa.toLocaleString("en", {
        weekday: "long",
      });
      date.innerText=`${setDa.getDate()}`;
      year.innerText=setDa.getFullYear();
}, 2000);

