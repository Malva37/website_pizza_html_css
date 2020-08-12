let menuLink = document.querySelectorAll('.menuLink a');

menuLink.forEach(elem => {
    elem.onclick = () => {
        menuLink.forEach(elem => {
            elem.className = '';
        })
        elem.className = 'active';
    }
})
