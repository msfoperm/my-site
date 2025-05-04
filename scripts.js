const menuToggle = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('nav.dropdown-menu');
menuToggle.addEventListener('click', function() {
    dropdownMenu.classList.toggle('active');
    if(dropdownMenu.classList.contains('active')) {
        document.addEventListener('click', closeMenuOutside);
     } else {
        document.removeEventListener('click', closeMenuOutside);
    
     }

 });
function closeMenuOutside(e) {
    if(!e.target.closest('nav.dropdown-menu') &&
        !e.target.closest('.menu-toggle')) {
        dropdownMenu.classList.remove('active');
        document.removeEventListener('click', closeMenuOutside);
     }
 }