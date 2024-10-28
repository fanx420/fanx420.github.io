var colorMode = "light";
function changeTheme(){

    var body = document.getElementById("body");
    var btnMode = document.getElementById("btnMode");
    var btnWebpage = document.getElementById("btnWebpage");
    var btnGithub = document.getElementById("btnGithub");
    var btnWebpage2 = document.getElementById("btnWebpage2")
    var btnGithub2 = document.getElementById("btnGithub2");

    if (colorMode == "light"){
        body.setAttribute("data-bs-theme", "light");
        btnMode.innerHTML = "Dark Mode";
        btnMode.classList.remove("btn-outline-light");
        btnMode.classList.add("btn-outline-dark");
        btnWebpage.classList.replace("btn-light", "btn-dark");
        btnGithub.classList.replace("btn-light", "btn-dark");
        btnWebpage2.classList.replace("btn-light", "btn-dark");
        btnGithub2.classList.replace("btn-light", "btn-dark");
        colorMode = "dark";

    }
    else{
        body.setAttribute("data-bs-theme", "dark");
        btnMode.innerHTML = "Light Mode";
        btnMode.classList.remove("btn-outline-dark");
        btnMode.classList.add("btn-outline-light");
        btnWebpage.classList.replace("btn-dark", "btn-light");
        btnGithub.classList.replace("btn-dark", "btn-light");
        btnWebpage2.classList.replace("btn-dark", "btn-light");
        btnGithub2.classList.replace("btn-dark", "btn-light");
        colorMode = "light";
    }

}