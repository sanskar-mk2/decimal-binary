const horners_scheme = () => {
    let ibin = document.getElementById("bin").value;
    ibin.toString();
    old_ibin = ibin;
    let bin = new String();
    for (let i = 0; i < ibin.length; i++) {
        if (ibin[i] == "0" || ibin[i] == "1") {
            bin = bin + ibin[i];
        }
    }
    if (bin != old_ibin) {
        document.getElementById("bin").classList.add("error");
        document.getElementById("bininfo").classList.remove("info");
    }
    document.getElementById("bin").value = bin;
    ibin = document.getElementById("bin").value;
    ibin.toString();
    let dec = 0;
    for (let i = 0; i < ibin.length; i++) {
        dec = dec * 2 + parseInt(ibin[i]);
    }
    document.getElementById("dec").value = dec;
    setTimeout(function(){
        document.getElementById("bin").classList.remove("error");
    }, 500);
}

const dec2bin = () => {
    let idec = document.getElementById("dec").value;
    old_idec = idec;
    idec = parseInt(idec, 10);
    if (old_idec != idec && !isNaN(idec)) {
        document.getElementById("dec").classList.add("error");
        document.getElementById("decinfo").classList.remove("info");
    }
    
    if (isNaN(idec)) {
        idec = 0;
    }
    document.getElementById("dec").value = idec;
    let bin = new String();
    while (idec > 0) {
        bin = (idec % 2).toString() + bin;
        idec = Math.floor(idec / 2);
    }
    document.getElementById("bin").value = bin;
    setTimeout(function(){
        document.getElementById("dec").classList.remove("error");
    }, 500);
}