const icon = document.getElementsByTagName('i')[0];
const form = document.getElementsByTagName("form")[0];

icon.addEventListener('click', function () {
    //select password input
    const pswInput = this.parentElement.children[1];
    const currentType = pswInput.getAttribute("type");
    let currentClass = (currentType == "password"? "fa-eye-slash": "fa-eye");
    let newClass = (currentClass == "fa-eye"? "fa-eye-slash": "fa-eye");

    pswInput.setAttribute("type", (currentType == "text"? "password": "text"));
    this.classList.remove(currentClass);
    this.classList.add(newClass);
})

// prevent form submit
form.addEventListener("submit", function(e) {
    e.preventDefault();
})