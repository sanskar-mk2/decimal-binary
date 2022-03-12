const bin2dec = () => {
    let ibin = document.getElementById("bin").value;
    if (ibin.length > 36) {
        ibin = ibin.substring(0, ibin.length - 1);
        document.getElementById("bin").value = ibin;
        document.getElementById("bin").classList.add("error");
        document.getElementById("bininfo").classList.remove("info");
    }
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
    if (idec.length > 12) {
        idec = idec.substring(0, idec.length - 1);
        document.getElementById("dec").value = idec;
        document.getElementById("dec").classList.add("error");
        document.getElementById("decinfo").classList.remove("info");
    }
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
    document.getElementById("bin").value = tobits(idec);
    setTimeout(function () {
        document.getElementById("dec").classList.remove("error");
    }, 500);
};

const tobits = (dec) => {
    let bin = new String();
    while (dec > 0) {
        bin = (dec % 2).toString() + bin;
        dec = Math.floor(dec / 2);
    }
    return bin;
};

const populate_bits = () => {
    let bits = document.getElementById("bits");
    let bit = null;
    let containerdiv = null;
    for (let i = 0; i < 8; i++) {
        containerdiv = document.createElement("div");
        containerdiv.innerHTML = 0;
        containerdiv.setAttribute("onmousedown", "bit_flipped(this)");
        containerdiv.classList.add("bit");
        containerdiv.addEventListener("mouseenter", (ev) => {
            if (ev.buttons == 1) {
                bit_flipped(ev.target);
            }
        });
        bits.appendChild(containerdiv);
    }
    let equals = document.createElement("div");
    equals.classList.add("bit");
    equals.innerHTML = "=";
    equals.id = "equals";
    bits.appendChild(equals);

    let answer = document.createElement("div");
    answer.classList.add("bit");
    answer.id = "answer";
    answer.innerHTML = "0";
    bits.appendChild(answer);
};

const bit_flipped = (el) => {
    el.innerHTML = 1 - parseInt(el.innerHTML);
    const bits = document.getElementById("bits").getElementsByTagName("div");
    let bit_str = new String();
    for (let i = 0; i < 8; i++) {
        bit_str = bit_str + bits[i].innerHTML;
    }
    document.getElementById("answer").innerHTML = horners_scheme(bit_str);
};
