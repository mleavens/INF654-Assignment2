document.addEventListener("DOMContentLoaded", function(){
    //nav menu
    const menus = document.querySelector(".side-menu");
    M.Sidenav.init(menus, {edge: "left"});
    //add tasks
    const forms = document.querySelector(".side-form");
    M.Sidenav.init(forms, {edge: "right"});
})