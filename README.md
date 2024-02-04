<h3>Project</h3>

Зробити адаптивний сайт згідно макету. Стек технологій: Bootstrap 4, CSS, Jquery, PHP<br/><br/>

На сайті повинна бути форма:<br/>
● ім'я<br/>
● прізвище<br/>
● мейл,<br/>
● номер телефону (для номера телефону використовувати бібліотекуintl-tel-input),<br/>
Автоматично заповнити форму наступними даними:<br/>
{<br/>
  "firstName": "Test firstname",<br/>
  "lastName": "Test lastname",<br/>
  "email": "test@gmail.com",<br/>
  "phone": {<br/>
    "countryCode": "+48",<br/>
    "number": "511235675"<br/>
  }<br/>
}<br/>
Цей JSON об’єкт треба зберегти у файл test.json на своєму GitHub.<br/>
Тепер треба прочитати json об’єкта через GitHub Api на JS/JQuery або PHP та заповнити форму.<br/><br/>

Форма повинна відправляти дані у телеграм канал через телеграм бота<br/>
(створити публічний канал для тесту і надати посилання).<br/>
Валідація форми має бути мінімально на фронтенді(HTML + Jquery) і повністю<br/>
перевірка всіх полів на бекенді PHP.<br/><br/>

В макеті потрібно зробити бургер меню.<br/><br/>

Макет для верстки:<br/>
https://www.figma.com/file/R6yLcwQBoT00DSHhx3vVus/Free-Travel-Design-Template-(Community)?type=design&mode=design
