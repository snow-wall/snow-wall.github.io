var toggle_menu = function() {
    var menu = document.getElementById('main-menu');
    var togg = document.getElementById('toggle-menu');

    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        togg.textContent = '> SNOWWALL_'; 
    } 
    else
    {
        menu.style.display = 'block';
        togg.textContent = '⌄ SNOWWALL_'; 
    }
}

document.getElementById('toggle-menu').onclick = toggle_menu;