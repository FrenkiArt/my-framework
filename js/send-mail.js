export function sendMail(allForm) {
    allForm.forEach(function (form) {
        form.addEventListener('submit', sendForm);
        //form.addEventListener('submit', sendForm2);
    });

    function sendForm(e) {
        e.preventDefault();
        const formElement = e.target;
        let request = new XMLHttpRequest();
        let formData = new FormData(formElement);
        /* request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {

                    console.log(request);
                    console.log(request.responseText);
                    console.log('Письмо успешно отправлено');
                    formElement.reset();

                } else {
                    console.log('Не удалось отправить почту: ' + request.status + ' ' + request.statusText);
                }
            } else {
                console.log(request.readyState);
                console.log('Письмо отправляется');
            }
        }; */
        
        request.addEventListener('readystatechange', () => {
            console.log(request.readyState);
            if (request.readyState !== 4) {
                console.log('Почта отправляется');
                return;
            }
    
            if (request.status !== 200) {
                console.log('error ' + request.readyState);
                console.log(request.responseText);
                console.log('Не удалось отправить почту: ' + request.status + ' ' + request.statusText);
            } else {
                //const output = JSON.parse(request.responseText);
                //output.results.forEach(function (film, i, array) {
                //});
                //console.log(request);
                console.log(request.responseText);
                console.log('Письмо успешно отправлено');
                formElement.reset();
                if (document.querySelector('.popup.popup_open') != null) {
                    document.querySelector('.popup.popup_open').classList.remove('popup_open');
                    document.querySelector('.overlay').classList.remove('popup_open');
                    document.body.classList.remove('popup_open');
                }
                
                document.querySelector('.popup_thanks').classList.add('popup_open');
                document.querySelector('.overlay').classList.add('popup_open');
                document.body.classList.add('popup_open');
            }
        });

        request.open("POST", "./mail.php");
        request.send(formData);
    }

    function sendForm2(e) {
        e.preventDefault();
        const request = new XMLHttpRequest();
        let method = 'POST';
        let url = './mail.php';
        
        request.addEventListener('readystatechange', () => {
            console.log(request.readyState);
            if (request.readyState !== 4) {
                console.log('Почта отправляется');
                return;
            }
    
            if (request.status !== 200) {
                console.log('error ' + request.readyState);
                console.log(request.responseText);
                console.log('Не удалось отправить почту: ' + request.status + ' ' + request.statusText);
            } else {
                /* const output = JSON.parse(request.responseText);
                output.results.forEach(function (film, i, array) {
                }); */
                //console.log(request);
                console.log(request.responseText);
                console.log('Письмо успешно отправлено');
                e.target.reset();
            }
        });
        request.open(method, url);
        request.send();
    }

}