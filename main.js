$(function () {
    /*input function*/
    // Отримуємо всі елементи <label> з атрибутом "for"
    const labels = document.querySelectorAll(".input-wrapper label");

    labels.forEach((label) => {
        const input = document.getElementById(label.getAttribute("for"));
        label.addEventListener("click", () => {
            input.style.display = input.style.display === "block" ? "none" : "block";
        });
    });
    /*input function*/
    /*burger*/
    let burger = document.getElementById("topnav");
    let iconBurger = document.querySelector("nav > .iconb");
    iconBurger.addEventListener("click", () => {
        if (burger.className === "inline-flex topnav") {
            burger.className += " responsive";
        } else {
            burger.className = "inline-flex topnav";
        }
    });
    /*burger*/


    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    });
    const iti = intlTelInput(input);

    //github api
    let apiUrl = "https://api.github.com/repos/yuriydobryanskiy/discover/contents/test.json";
    try {
        $.getJSON(apiUrl, function (data) {
            let content = atob(data.content);
            let jsonData = JSON.parse(content);

            // Заповнення полів форми з даними з jsonData
            $("#firstName").val(jsonData.firstName);
            $("#lastName").val(jsonData.lastName);
            $("#email").val(jsonData.email);
            iti.setNumber(jsonData.phone.countryCode + jsonData.phone.number);
        });
    } catch (error) {
        console.log("Помилка отримання даних: " + error.message);
    }

    // обробкa подій та відправкa форми
    $('#myForm').submit(function (event) {
        event.preventDefault();

        //перевірка полів на js
        let valid = true;
        if ($("#firstName").val() === "" || $("#lastName").val() === "" || $("#email").val() === "" || $("#phone").val() === "") {
            valid = false;
        }
        // Перевірка формату електронної пошти
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test($("#email").val())) {
            valid = false;
        }
		// Перевірка кількості цифр
		var phoneNumber = $("#phone").val().replace(/\D/g, "");
		if (phoneNumber.length < 9 || phoneNumber.length > 9) { 
			valid = false;
		}
        //якщо є помилки
        if (!valid) {
            alert("Будь ласка, заповніть обов'язкові поля правильно.");
        } else {
            //telegram
            //лише для прикладу реалізовую відправку даних через js щоб на github можна було перевірити роботу форми

            let firstName = $("#firstName").val();
            let lastName = $("#lastName").val();
            let email = $("#email").val();
            let phone = iti.getNumber();
            let message = `Ім'я: ${firstName}\nПрізвище: ${lastName}\nМейл: ${email}\nТелефон: ${phone}`;

            let botToken = '6226343677:AAEiuNOpXwOW0Jf0k449Pc23_laMewgQjI0';
            let chatId = '@dobr_test';

            fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        console.log("Дані успішно відправлені в телеграм-канал.");
                    } else {
                        console.log("Помилка під час відправки даних в TG.");
                    }
                })
                .catch(error => {
                    console.error("Помилка:", error);
                });

            //telegram 

            //php перевірка
            let formData = {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                email: $("#email").val(),
                phone: $("#phone").val()
            };
            // Відправляємо дані на бекенд через AJAX
            $.post("./process_form.php", formData, function (response) {
                if (response.startsWith("success")) {
                    console.log(response);
                } else {
                    console.log(response);
                }
            });
        }
    });

});
