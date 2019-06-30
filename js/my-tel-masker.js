export function my_tel_masker(all_phone_selector_array) {
    all_phone_selector_array.forEach(function (item) {
        item.addEventListener('keydown', inputCheck);
    });

    function inputCheck(e) {
        if ((e.keyCode > 48 && e.keyCode < 58) || (e.keyCode > 95 && e.keyCode < 106 ) || (e.keyCode === 48) || (e.keyCode === 107) || (e.keyCode === 109)) {
            /* goodInput += String.fromCharCode(e.charCode);
            e.target.value = goodInput; */
        } else if ((e.keyCode === 8) || (e.keyCode === 46) || (e.keyCode === 37) || (e.keyCode === 39) || (e.keyCode === 32)) {
        } else {
            e.preventDefault();
        }
        //console.log(e.keyCode);
    }
    //String.fromCharCode(e.keyCode || e.charCode)
}
