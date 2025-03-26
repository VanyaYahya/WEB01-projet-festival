(function() {
    const form = document.querySelector('#sectionForm');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const radio = form.querySelectorAll('input[type=radio]');
    const checkboxLength = checkboxes.length;
    const radioLength = radio.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;
    const firstRadio = radioLength > 0 ? radio[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function init2() {
        if(firstRadio){
            for (let i = 0; i < radioLength; i++) {
                radio[i].addEventListener('change', checkValidity2);
            }

            checkValidity2();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function isChecked2(){
        for (let i = 0; i < radioLength; i++) {
            if (radio[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'Au moins une case doit être choisi' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    function checkValidity2(){
        const errorMessage = !isChecked2() ? 'Au moins une case doit être choisi' : '';
        firstRadio.setCustomValidity(errorMessage);
    }

    init();
    init2();
})();