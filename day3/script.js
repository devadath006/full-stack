const menus = document.querySelectorAll('.menu');
menus.forEach(menu => {
    menu.addEventListener('mouseover', () =>{
        const dropdown = menu.querySelector('.dropdown');
        if(dropdown){
            dropdown.classList.add('show');
    } });
    menu.addEventListener('mouseout', () =>{
        const dropdown = menu.querySelector('.dropdown');
        if(dropdown){
            dropdown.classList.remove('show');
    } });
});
