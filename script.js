
var arabic  = document.getElementById("arabic")
var english = document.getElementById("english")

var title = document.getElementById("title");

var address = document.getElementById("address");

var about = document.getElementById("about")

var set = document.getElementById("set")

arabic.addEventListener("click", ()=>{
    website("arabic");
    localStorage.setItem("langue", "arabic");
})
english.addEventListener("click", ()=>{
    website("english")
    localStorage.setItem("langue", "english");
})
function website(translate){
    if(translate == "arabic"){
        title.innerHTML = "مرحبا اسمي ابراهيم محسين احب البرمجة"
        address.innerHTML = "البريد الالكتروني: private.mouhsine@gmail.com"
        about.innerHTML = "اتصل بنا"
        set.style.direction = "rtl"
        address.style.direction = "rtl"
    }
    else if(translate == "english"){
        title.innerHTML = "hello my name is brahim i like coding"
        address.innerHTML = "email: private.mouhsine@gmail.com"
        about.innerHTML = "Contact - us"  
        set.style.direction = "ltr"
        address.style.direction = "ltr"
    }
}
onload = ()=>{
    website(localStorage.getItem("langue"));
}