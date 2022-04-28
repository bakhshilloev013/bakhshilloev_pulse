document.addEventListener("DOMContentLoaded", () => {
    let forms = document.querySelectorAll("#form");
    forms.forEach(item => {
        item.addEventListener("submit", formSend);

        function formSend(e) {
            // e.preventDefault();

            let error = formValidate(item);
        }

        function formValidate(item) {
            let error = 0;
            let formReq = document.querySelectorAll("._req");

            for (let i = 0; i < formReq.length; i++) {
                const input = formReq[i];
                formRemoveError(input);

                if (input.classList.contains("_email")) {
                    if (emailTest(input)) {
                        formAdError(input);
                        error++;
                    } else if (input.value == "") {
                        formAdError(error);
                        error++;
                    }
                }
            }
        }

        function formAdError(input) {
            input.classList.add("_error");
        }
        function formRemoveError(input) {
            input.classList.remove("_error")
        }
        function emailTest(input) {
            return !/^w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,8})+$/.test(input.value);
        }
    })

})