function NumRandom() {
    setInterval(function() {
        var numeroactual = Math.floor(Math.random() * 100); 
        if (numeroactual > 50) {
            console.log(`${numeroactual}º ALERTA`);
        } else {
            console.log(`${numeroactual}º`);
        }
    }, 1000);
}

NumRandom();

