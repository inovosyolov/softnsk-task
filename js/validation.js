(function () {
    function validation() {
        const form = document.querySelectorAll('form');

        const generateError = (message, parent) => {
            const error = document.createElement('div');
            error.className = 'error';
            error.textContent = message;
            parent.appendChild(error);

            const inputs = parent.querySelectorAll('input');
            inputs.forEach((input) => {
                input.style.outlineColor = 'crimson';
                input.style.outlineStyle = 'solid';
                input.style.outlineWidth = '1px';
            });

            return error;
        };

        const removeValidation = (form) => {
            const errors = form.querySelectorAll('.error');
            errors.forEach((error) => {
                error.remove();
            });

            const inputs = form.querySelectorAll('input');
            inputs.forEach((input) => {
                if (input.name === 'slider' || input.type === 'hidden') {
                    return 1;
                }
                // input.style.outlineColor = 'green';
                // input.style.outlineStyle = 'solid';
                // input.style.outlineWidth = '2px';

                input.style.outline = 'none';
            });
        };

        const checkInput = (input, regExp, message, parent) => {
            if (input.value.length === 0) {
                generateError('Заполните поле ввода', parent);
            } else if (!regExp.test(input.value)) {
                generateError(message, parent);
            } else {
                return 1;
            }
        };

        const checkName = (name) => {
            const regExpName = /^(?! )[a-zA-Zа-яА-Я ]+$/;
            return checkInput(name, regExpName, 'Имя должно содержать только буквы', name.parentElement);
        };

        const checkMail = (email) => {
            const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            return checkInput(email, regex, 'Email должен быть действующим', email.parentElement);
        };

        form.forEach((form) => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                removeValidation(form);
                const name = checkName(form.name);
                const email = checkMail(form.email);
                if (name && email) {
                    const preloader = document.createElement('img');
                    form.style = "position: relative";
                    preloader.src = 'img/preloader.gif';
                    preloader.alt = 'Preloader';
                    preloader.style.display = 'block';
                    preloader.style.margin = 'auto';
                    preloader.style.position = 'absolute';
                    preloader.style.top = '20%';
                    preloader.style.left = '0';
                    preloader.style.right = '0';
                    preloader.style.width = 'auto';
                    preloader.style.height = 'auto';
                    preloader.style.zIndex = '1000';
                    form.style.opacity = 0.5;
                    form.appendChild(preloader);
                    form.submit();
                    form.querySelectorAll('[type="submit"]').forEach(e => {
                        e.disabled = true;
                    });
                }
            });

            form.addEventListener('input', (event) => {
                event.preventDefault();
                removeValidation(form);
                checkName(form.name);
                checkMail(form.email);
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        validation();
    });
})();




