console.log('print me');

function aboutCard(){


var box = document.querySelector(".right");
document.querySelector(".card-contaner");


var arr = [
    {statement: "The courses was outstanding and advanced everything i needed to know about", name:"Rahul Nandi", passion:"web developer", photo:"./img//rahul.jpeg"},
    {statement: "The courses was outstanding and advanced everything i needed to know about", name:"Subhjeet jana", passion:"prompt developer", photo:"./img/subhojeet.png"},
    {statement: "The  python courses was outstanding and advanced everything i needed to know about", name:"vadantu dutt", passion:"python developer", photo:"./img/back.png"},
    {statement: "The courses was outstanding and advanced everything i needed to know about", name:"sourav baroe", passion:"treading expert", photo:"./img/py (2).png"},




];

var clutter = ""

arr.forEach(function(obj,ind){
    clutter= clutter+ `  <div class="card-contaner">
    <h4>⭐⭐⭐⭐⭐ </h4>
    <h5>${obj.statement}</h5>
      <div class="member">
         <div class="photo" style="background-color: antiquewhite;"><img src ="${obj.photo}"/></div>
         <div class="name" style="color: antiquewhite;">
             <h4>${obj.name}</h4>
           
             <h6>${obj.passion}</h6>
         </div>
        </div>
 </div>`

})
console.log(clutter);
box.innerHTML=clutter

}
aboutCard()


function Coursecard(){


    var courseCard= document.querySelector(".courses-box");


    var arr2 = [
        {pic:"./img//rahul.jpeg", course:"Web Developer", mentor:"./img/rahul.jpeg",  name:"Rahul Nandi"},
        {pic:"./img/py (2).png", course:"Python Developer", mentor:"./img/py (2).png",  name:"Harsh"},
        {pic:"./img/ab.png", course:"DSA Developer", mentor:"./img/ab.png",  name:"Tushar Ball"},
        {pic:"./img/py.png", course:"AI Expert", mentor:"./img/py.png",  name:"Subhjeet Janna"},
        {pic:"./img/back.png", course:"Backend Developer", mentor:"./img/back.png",  name:"Harsh Gupta"},
        {pic:"./img/java.png", course:"Java Developer", mentor:"./img/java.png",  name:"Adarsh Sharma"},
        {pic:"./img/gd.png", course:"Graphic Designer", mentor:"./img/gd.png",  name:"Sarthak Sharma"},
        {pic:"./img/suprya02.png", course:"Asst. Professor", mentor:"./img/suprya.png",  name:"Suprya Sukla"},

    ];
    var clutter2 = ""

    arr2.forEach(function(ob,ind){
        clutter2= clutter2+  `<div class="card-contaner CCrenovate">
        <div class="top-picture"><img src="${ob.pic}"/></div>
        <div class="course">
            <div class="course-name"><h3>${ob.course}</h3></div>
            <div class="tutor-name">
                <div class="photo"><img src="${ob.mentor}"/></div>
                <h4>${ob.name}</h4>
            </div>
        </div>
       
    </div>`

    })
    console.log(clutter2);
    courseCard.innerHTML=clutter2

    }
    Coursecard()

var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function(e){
    cursor.style.top= e.y+"px";
    cursor.style.left= e.x+"px"
    console.log(e);

})