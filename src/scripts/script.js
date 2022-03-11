const bin2dec = () => {
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
    document.getElementById("dec").value = horners_scheme(ibin);
    setTimeout(function () {
        document.getElementById("bin").classList.remove("error");
    }, 500);
};

const horners_scheme = (ibin) => {
    let dec = 0;
    for (let i = 0; i < ibin.length; i++) {
        dec = dec * 2 + parseInt(ibin[i]);
    }
    return dec;
};

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
    setTimeout(function () {
        document.getElementById("dec").classList.remove("error");
    }, 500);
};

const populate_bits = () => {
    let bits = document.getElementById("bits");
    let bit = null;
    let containerdiv = null;
    for (let i = 0; i < 8; i++) {
        containerdiv = document.createElement("div");
        bit = document.createElement("input");
        bit.classList.add("bit");
        bit.value = 0;
        bit.setAttribute("type", "text");
        bit.disabled = true;
        containerdiv.setAttribute("onclick", "bit_flipped(this)");
        containerdiv.appendChild(bit);
        bits.appendChild(containerdiv);
    }
    bit = document.createElement("input");
    bit.classList.add("bit");
    bit.value = "=";
    bit.setAttribute("type", "text");
    bit.disabled = true;
    bits.appendChild(bit);

    bit = document.createElement("input");
    bit.classList.add("bit");
    bit.id = "answer";
    bit.value = 0;
    bit.setAttribute("type", "text");
    bit.disabled = true;
    bits.appendChild(bit);
};

const bit_flipped = (el) => {
    el.firstChild.value = 1 - parseInt(el.firstChild.value);
    const bits = document.getElementById("bits").getElementsByTagName("input");
    let bit_str = new String();
    for (let i = 0; i < 8; i++) {
        bit_str = bit_str + bits[i].value;
    }
    document.getElementById("answer").value = horners_scheme(bit_str);
};
