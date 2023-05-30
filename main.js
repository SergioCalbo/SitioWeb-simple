const switcher = document.querySelector(".btn"
);
switcher.addEventListener('click', function() {
    document.body.classList.toggle("tema-oscuro")
    var ClassName = document.body.ClassName;
    if  (ClassName == "tema-claro" ){
        this.textContent = "Oscuro" ;
    }
    else {
        this.textContent = "claro";
    }
}) ;
