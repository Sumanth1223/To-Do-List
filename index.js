let form = document.getElementById("form")
console.log(form);
let demo = document.getElementById("demo")
console.log(demo);
let data = document.getElementById("data")
console.log(data);

form.addEventListener("click",(e) => {
    e.preventDefault()
    // console.log("its working");
if(e.target.innerHTML == "Add"){
    console.log(e.target);
    data.innerHTML += `<div>
    <p>${demo.value}</p>
    <button id="hm">edit</button>
    <button id="hm">delete</button>
    </div>`
    demo.value =""
}else if(e.target.innerHTML =="delete"){
    console.log(e.target);
    e.target.parentElement.remove()
}else if(e.target.innerHTML =="edit"){
    console.log(e.target);
    console.log(e.target.previousElementSibling);
    demo.value = e.target.previousElementSibling.textContent
    e.target.innerHTML ="update"
}else if(e.target.innerHTML =="update"){
    console.log(e.target);
    e.target.previousElementSibling.textContent = demo.value
    e.target.innerHTML ="edit"
    demo.value =""
}
})