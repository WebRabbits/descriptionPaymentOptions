'use strict';

'use strict';

//TODO: Add elements page

const divBlockButtonModal = document.createElement('div');
divBlockButtonModal.className = 'block-button-modal';

const divButton = document.createElement('div');
divButton.className = 'container-add-button';

const addButtonDescPayment = document.createElement('button');
addButtonDescPayment.className = 'add_button_description_payment';
addButtonDescPayment.innerText = 'Добавить описание платёжной системы';

const boxModalMain = document.createElement('div');
boxModalMain.className = 'box-modal-main';
const divModal = document.createElement('div');
divModal.className = 'container-modal';

divModal.insertAdjacentHTML(
  'afterbegin',
  `
      <div class="container-close-modal">
        <span class="close-modal">&#10006</span>
      </div>
      <form class="form-modal" novalidate>
      <!--<section class="section-block">
        <div class="form-item">
            <input type="text" class="form_type_input" name="namePayment" required placeholder="Введите название платёжной системы...">
            <label>Название платёжной системы</label>
            <span class="error_message">Заполните данное поле</span>
        </div>-->
      </section>
      <section class="section-block">
        <div class="form-item">
          <textarea cols="30" rows="10" class="form_type_input" name="optionsPaySystem" required placeholder="Введите все данные о настройках платёжной системы..."></textarea>
          <label>Настройка платёжной системы</label>
          <span class="error_message">Заполните данное поле</span>
        </div>
    </section>
    <section class="section-block">
      <div class="form-item">
        <textarea cols="30" rows="10" class="form_type_input" name="optionsPayConfig" required placeholder="Введите параметры и значения конфигурационных данных платёжной системы... (Также, можно дать краткое описание каждого параметра)"></textarea>
        <label>Настройка конфига платёжной системы</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
    </section>
    <section class="section-block">
      <div class="form-item">
      <input type="text" class="form_type_input" name="supportCurrencies" required placeholder="Укажите все поддерживаемые валюты...">
      <label>Поддерживаемые валюты</label>
      <span class="error_message">Заполните данное поле</span>
      </div>
    </section>
    <section class="section-block">
      <div class="form-item">
        <!--<input type="text" class="form_type_input" name="typePayment" required placeholder="Укажите, что поддерживает платёжная система - ДЕПОЗИТ/ВЫВОД">
        <label>Поддержка видов транзакций</label>
        <span class="error_message">Заполните данное поле</span>-->

        <div class=container_text>
          <div>
            <span>&#8226; Поддержка видов транзакций:</span>
            <select class="form_type_input typePayment" name="typePayment" required>
              <option value="" disabled selected>Выберите значение...</option>
              <option value="all">Депозит/Вывод</option>
              <option value="deposit">Депозит</option>
              <option value="withdraw">Вывод</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <section class="section-block">
      <div class="form-item">
      <!--<input type="text" class="form_type_input" name="supportConversion" required placeholder="Укажите, поддерживает ли платёжная система конвертацию - ПРИСУТСТВУЕТ/ОТСУТСТВУЕТ">
      <label>Поддержка конвертации с нашей стороны</label>
      <span class="error_message">Заполните данное поле</span>-->

      <div class=container_text>
          <div>
            <span>&#8226; Поддержка конвертации с нашей стороны:</span>
            <select class="form_type_input" name="supportConversion" required>
              <option value="" disabled selected>Выберите значение...</option>
              <option value="present">ПРИСУТСТВУЕТ</option>
              <option value="absent">ОТСУТСТВУЕТ</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <section class="section-block">
      <div class="form-item">
        <div class="container-text">
          <p>Поддержка функционала платёжной системы:</p>
          <div>
            <span>&#8226; Выплаты без наличия депозита <i>(НЕТ/ДА)</i>:</span>
            <input type="checkbox" value="" class="form_type_input check" name="withdrawalNotDeposit">
            <label for="checkbox" class="checkbox_label"></label>
          </div>
          <div>
            <span>&#8226; Выплаты без использования "PayTool" <i>(НЕТ/ДА)</i>:</span>
            <input type="checkbox" value="" class="form_type_input check" name="withdrawalNotPayTool">
            <label for="checkbox" class="checkbox_label"></label>
          </div>
        </div>
      </div>
    </section>
    <section class="section-block">
      <div class="container-text">
        <p>Поддерживаемые дополнительные поля:</p>
      </div>
      <p class="list-toggle">Required-поля:</p>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input" name="requiredFieldsDeposit" placeholder="Перечислите список required-полей для депозита средств (либо, оставьте поле пустым, если данные отсутствуют)"></textarea>
        <label>Required-поля при депозите средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input" name="requiredFieldsWithdrawal"  placeholder="Перечислите список required-полей для вывода средств (либо, оставьте поле пустым, если данные отсутствуют)"></textarea>
        <label>Required-поля при выводе средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <p class="list-toggle">AdditionalParams-поля:</p>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input" name="additionalFieldsDeposit"  placeholder="Перечислите список additionalParams-полей для депозита средств (либо, оставьте поле пустым, если данные отсутствуют)"></textarea>
        <label>additionalParams-поля при депозите средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input" name="additionalFieldsWithdrawal" placeholder="Перечислите список additionalParams-полей для вывода средств (либо, оставьте поле пустым, если данные отсутствуют)"></textarea>
        <label>additionalParams-поля при выводе средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
    </section>
    <section class="section-block">
      <div class="container-text">
        <p>Описание работы платёжной системы:</p>
      </div>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input descDeposit" name="descDeposit" required  placeholder="Опишите работу платёжной системы при ДЕПОЗИТЕ средств..."></textarea>
        <label>Описание работы при ДЕПОЗИТЕ средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input descWithdrawal" name="descWithdrawal" required placeholder="Опишите работу платёжной системы при ВЫВОДЕ средств..."></textarea>
        <label>Описание работы при ВЫВОДЕ средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
    </section>
    <section class="section-block">
      <div class="form-item link">
        <input type="text" class="form_type_input" name="linkWikiDocumentation" placeholder="Укажите ссылку на Wiki-документацию с ручной отправкой коллбэка">
        <label>Ссылка на страницу с описанием отправки коллбэка</label>
      </div>
      <div class="form-item link">
        <input type="text" class="form_type_input" name="linkIntegrationTask" required placeholder="Укажите ссылку на тикет с интеграцией платёжной системы">
        <label>Ссылка на интеграционный тикет</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item link">
        <input type="text" class="form_type_input" name="linkExternalDocumentation" placeholder="Укажите ссылку на внешнюю документацию платёжной системы">
        <label>Ссылка на внешнюю документацию</label>
      </div>
    </section>
    <section>
      <button type="submit" class="form_payments_button">Скопировать описание</button>
    </section>
    </form>
   `
);

document.body.prepend(divBlockButtonModal);
divBlockButtonModal.append(divButton);
divButton.append(addButtonDescPayment);
divBlockButtonModal.append(boxModalMain);
boxModalMain.append(divModal);

//TODO: Get elements

const buttonCloseModal = document.querySelector(
  '.container-close-modal>.close-modal'
);

const formModal = document.querySelector('.form-modal');
const inputTextList = Array.from(document.querySelectorAll('.form_type_input'));
const errorMessage = Array.from(document.querySelectorAll('.error_message'));
const elemTextDescDeposit = document.querySelector('.descDeposit');
const elemTextDescWithdrawal = document.querySelector('.descWithdrawal');
const submitButton = document.querySelector('.form_payments_button');

//TODO: Event logic

addButtonDescPayment.addEventListener('click', openModal);

buttonCloseModal.addEventListener('click', closeModal);

//TODO: Main logic

//TODO: Открытие модального окна
function openModal() {
  boxModalMain.classList.add('openModal');
  boxModalMain.style.backdropFilter = 'blur(5px)';
}

//TODO: Закрытие модального окна при нажатии на кнопку закрытия
function closeModal() {
  if (boxModalMain.classList.contains('openModal')) {
    boxModalMain.classList.remove('openModal');
    boxModalMain.style.backdropFilter = 'blur(0)';
  }
}

startValidationForm();

function startValidationForm() {
  formModal.addEventListener('submit', (event) => {
    event.preventDefault();

    let dataArrayInput = new Array();
    if (hasValidInput()) {
      inputTextList.forEach((itemElement) => {
        dataArrayInput.push({
          property: itemElement.name,
          value: itemElement.value || itemElement.checked,
        }); // Собираем данные в новый массив
        inputEventElement(itemElement);
        defaultInput(itemElement);
      });
      // event.target.reset(); // Очищаем форму при заполнении всех полей и отправки данных
    } else {
      inputTextList.forEach((itemElement) => inputEventElement(itemElement));
    }
    if (dataArrayInput.length == 0) return;
    getValidValueElementForm(dataArrayInput);

    event.target.reset(); // Очищаем форму при заполнении всех полей и отправки данных
  });

  inputTextList.forEach((itemElement) => {
    itemElement.addEventListener('input', () => {
      inputEventElement(itemElement);
    });
  });
}

function hasValidInput() {
  return inputTextList.every((item) => item.validity.valid);
}

function inputEventElement(item) {
  if (item.name == 'typePayment' && item.value == 'all') {
    elemTextDescDeposit.required = true;
    elemTextDescWithdrawal.required = true;
    elemTextDescDeposit.readOnly = false;
    elemTextDescWithdrawal.readOnly = false;
  } else if (item.name == 'typePayment' && item.value == 'deposit') {
    elemTextDescWithdrawal.required = false;
    elemTextDescWithdrawal.readOnly = true;
    elemTextDescWithdrawal.value = '';
    defaultInput(elemTextDescWithdrawal);
    showErrorMessage(elemTextDescWithdrawal);
    elemTextDescDeposit.required = true;
    elemTextDescDeposit.readOnly = false;
  } else if (item.name == 'typePayment' && item.value == 'withdraw') {
    elemTextDescDeposit.required = false;
    elemTextDescDeposit.readOnly = true;
    elemTextDescDeposit.value = '';
    defaultInput(elemTextDescDeposit);
    showErrorMessage(elemTextDescDeposit);
    elemTextDescWithdrawal.required = true;
    elemTextDescWithdrawal.readOnly = false;
  }

  if (
    (item.type !== 'text' &&
      item.type !== 'textarea' &&
      item.type !== 'select-one') ||
    item.required == false
  )
    return;

  if (item.value == '') {
    elementStyleInvalid(item);
    showErrorMessage(item);
  } else {
    elementStyleValid(item);
    showErrorMessage(item);
  }
}

function showErrorMessage(itemElement) {
  errorMessage.forEach((itemError) => {
    if (itemElement.parentElement == itemError.parentElement) {
      if (itemElement.value == '' && itemElement.required == true) {
        itemError.classList.add('error_message_show');
      } else {
        itemError.classList.remove('error_message_show');
      }
    }
  });
}

function elementStyleInvalid(itemElement) {
  itemElement.style.border = '1px solid red';
  itemElement.style.boxShadow = 'inset 0px 0px 2px red';
  itemElement.style.transition = '0.7s';
}

function elementStyleValid(itemElement) {
  itemElement.style.border = '1px solid #20f620';
  itemElement.style.boxShadow = 'inset 0px 0px 2px #20f620';
  itemElement.style.transition = '0.7s';
}

function defaultInput(itemElement) {
  itemElement.style.border = '1px solid #ccc';
  itemElement.style.boxShadow = 'none';
  itemElement.style.transition = '0.7s';
}

function getValidValueElementForm(itemArray) {
  for (const elem of itemArray) {
    if (elem.property == 'typePayment') {
      elem.value == 'all'
        ? (elem.value = 'ДЕПОЗИТ/ВЫВОД')
        : elem.value == 'deposit'
        ? (elem.value = 'ДЕПОЗИТ')
        : elem.value == 'withdraw'
        ? (elem.value = 'ВЫВОД')
        : null;
    }

    if (elem.property == 'supportConversion') {
      elem.value == 'present'
        ? (elem.value = 'ПРИСУТСТВУЕТ')
        : elem.value == 'absent'
        ? (elem.value = 'ОТСУТСТВУЕТ')
        : null;
    }

    if (
      elem.property == 'requiredFieldsDeposit' ||
      elem.property == 'requiredFieldsWithdrawal' ||
      elem.property == 'additionalFieldsDeposit' ||
      elem.property == 'additionalFieldsWithdrawal' ||
      elem.property == 'descDeposit' ||
      elem.property == 'descWithdrawal'
    ) {
      elem.value == undefined ? (elem.value = 'НЕТ') : elem.value;
    }
  }

  const processingNewArray = [...itemArray];

  getIndividualElementMap(processingNewArray);
}

function getIndividualElementMap(processingNewArray) {
  const propertyArray = processingNewArray.map((item) => item.property);
  const valueArray = processingNewArray.map((item) => item.value);

  const newObj = new Object();

  propertyArray.forEach((elem, index) => {
    valueArray.find((item, ind) => {
      if (index === ind) {
        newObj[elem] = typeof item == 'string' ? item.trim() : item;
      }
    });
  });

  console.log(newObj);

  viewResult(newObj);
}

const resultDataDescriptionPayment = document.createElement('div');

function viewResult(objData) {
  resultDataDescriptionPayment.insertAdjacentHTML(
    'afterbegin',
    `
    <style>*,.main_block_container_payment{margin:0;padding:0}.box_block_payment{display:flex;flex-direction:column;margin:14px 14px 0;padding-bottom:14px;border-bottom:1px solid #ccc}.box_block_payment p{margin:0;font-weight:600;font-size:16px}.block_description_1{display:flex;flex-direction:row;flex-wrap:nowrap;margin-top:10px;padding:10px;width:99%;border:1px solid #ccc;border-radius:5px}.block_description_1 .container_block_icon .icon_block_description,.block_description_2 .container_block_icon .icon_block_description{font-size:10px;font-weight:600;border:1px solid #4a6785;color:#4a6785;border-radius:100px;padding:1px 6px}.block_description_1>div:nth-child(2){margin-left:15px}.options_payment_systems{border-radius:7px}.options_payment_systems>pre{background:#23424c;color:#dfdddd;font-size:15px;padding:10px;border-radius:3px;white-space:pre-line;}.options_payment_systems span{white-space:pre-line}.options_payment_systems pre code{white-space:pre-line}.block_description_2{border:none;display:flex;flex-direction:column;flex-wrap:nowrap;margin-top:10px;width:99%}.block_description_2 p span{font-weight:600}.box_block_payment:nth-child(5) .block_description_2 p{margin-bottom:5px;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.block_description_2 p input{width:30px;height:18px}.block_description_2 a{font-size:17px;font-weight:600}.not_supported_option{border:1px solid #db1c1f;background:#e312121a;}</style>

    <div class="main_block_container_payment">
    <div class="box_block_payment">
      <p>Настройка платёжной системы</p>
      <div class="block_description_1">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <pre>${objData.optionsPaySystem}</pre>
        </div>
      </div>
    </div>
    <div class="box_block_payment">
      <p>Настройка конфига платёжной системы</p>
      <div class="block_description_1">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <pre>${objData.optionsPayConfig}</pre>
        </div>
      </div>
    </div>
  
    <div class="box_block_payment">
      <p>Поддержка видов транзакций</p>
      <div class="block_description_2">
        <p>
          Платёжная система поддерживает: <span>${
            objData.typePayment
          } средств</span>
        </p>
      </div>
    </div>
  
    <div class="box_block_payment">
      <p>Поддерживаемые валюты</p>
      <div class="block_description_2">
        <p>
          Список поддерживаемых валют: <span>${objData.supportCurrencies}</span>
        </p>
      </div>
    </div>
  
    <div class="box_block_payment">
      <p>Поддержка дополнительного функционала</p>
      <div class="block_description_2">
        <p>Функционал конвертации: <span>${objData.supportConversion}</span></p>
        <p>
          Функционал
          <strong>"Выплаты без наличия успешного депозита"</strong> -
          <input type="checkbox" value="" ${
            objData.withdrawalNotDeposit == true ? 'checked' : false
          }/>
        </p>
        <p>
          Функционал
          <strong>"Выплаты без использования 'PayTool'"</strong> -
          <input type="checkbox" value="" ${
            objData.withdrawalNotPayTool == true ? 'checked' : false
          }/>
        </p>
      </div>
    </div>
  
    <div class="box_block_payment">
      <p>Поддерживаемые дополнительные поля</p>
      ${
        objData.requiredFieldsDeposit !== 'НЕТ'
          ? ` 
    <p>
        - <strong style="color: orange">Required-поля</strong> при <strong>депозите средств</strong>:
      <div class="block_description_1">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <pre>${objData.requiredFieldsDeposit}</pre>
        </div>
      </div>
    `
          : `
    <div class="block_description_2">
      <p>
        - <strong style="color: orange">Required-поля</strong> при
        <strong>депозите средств</strong>:
        <span>${objData.requiredFieldsDeposit}</span>
      </p>
    </div>
    `
      }
      ${
        objData.requiredFieldsWithdrawal !== 'НЕТ'
          ? ` 
    <p>
        - <strong style="color: orange">Required-поля</strong> при <strong>выводе средств</strong>:
      <div class="block_description_1">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <pre>${objData.requiredFieldsWithdrawal}</pre>
        </div>
      </div>
    `
          : `
    <div class="block_description_2">
      <p>
        - <strong style="color: orange">Required-поля</strong> при
        <strong>выводе средств</strong>:
        <span>${objData.requiredFieldsWithdrawal}</span>
      </p>
    </div>
    `
      }
      ${
        objData.additionalFieldsDeposit !== 'НЕТ'
          ? ` 
    <p>
        - <strong style="color: orange">AdditionalParams-поля</strong> при <strong>депозите средств</strong>:
      <div class="block_description_1">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <pre>${objData.additionalFieldsDeposit}</pre>
        </div>
      </div>
    `
          : `
    <div class="block_description_2">
      <p>
        - <strong style="color: orange">AdditionalParams-поля</strong> при
        <strong>депозите средств</strong>:
        <span>${objData.additionalFieldsDeposit}</span>
      </p>
    </div>
    `
      }
      ${
        objData.additionalFieldsWithdrawal !== 'НЕТ'
          ? ` 
    <p>
        - <strong style="color: orange">AdditionalParams-поля</strong> при <strong>выводе средств</strong>:
      <div class="block_description_1">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <pre>${objData.additionalFieldsWithdrawal}</pre>
        </div>
      </div>
    `
          : `
    <div class="block_description_2">
      <p>
        - <strong style="color: orange">AdditionalParams-поля</strong> при
        <strong>выводе средств</strong>:
        <span>${objData.additionalFieldsWithdrawal}</span>
      </p>
    </div>
    `
      }
    </div>
    <div class="box_block_payment" style="margin-left:0px";>
      <p>Описание работы платёжной системы при ДЕПОЗИТЕ средств</p>
      ${
        objData.descDeposit == 'НЕТ'
          ? `
      <div class="block_description_1 not_supported_option">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <span>
            Платёжная система НЕ ПОДДЕРЖИВАЕТ данный функционал
          </span>
        </div>
      </div>
      `
          : `
      <div class="block_description_1">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <span>
            ${objData.descDeposit}
          </span>
        </div>
      </div>
      `
      }
    </div>
  
    <div class="box_block_payment" style="margin-left:0px";>
      <p>Описание работы платёжной системы при ВЫВОДЕ средств</p>
      ${
        objData.descWithdrawal == 'НЕТ'
          ? `
      <div class="block_description_1 not_supported_option">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <span>
            Платёжная система НЕ ПОДДЕРЖИВАЕТ данный функционал
          </span>
        </div>
      </div>
      `
          : `
      <div class="block_description_1">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <span>
            ${objData.descWithdrawal}
          </span>
        </div>
      </div>
      `
      }
    </div>
  
    <div class="box_block_payment">
      <p>Полезные ссылки:</p>
      <div class="block_description_2">
        <a href="${objData.linkWikiDocumentation}" style="${
      objData.linkWikiDocumentation !== false ? 'display:block' : 'display:none'
    }">Ссылка на ручную отправку callback-запроса (Postman)</a>
        <a href="${objData.linkIntegrationTask}" style="${
      objData.linkIntegrationTask !== false ? 'display:block' : 'display:none'
    }">Ссылка на интеграционный тикет</a>
        <a href="${objData.linkExternalDocumentation}" style="${
      objData.linkExternalDocumentation !== false
        ? 'display:block'
        : 'display:none'
    }">Ссылка на внешнюю документацию платёжной системы</a>
      </div>
    </div>
  </div>`
  );

  copyResultHTML(resultDataDescriptionPayment);
}

function copyResultHTML(resultHTML) {
  navigator.clipboard
    .writeText(resultHTML.innerHTML)
    .then((result) => {
      if (result == undefined) {
        closeModal();
        successMessage();
      }
    })
    .catch((err) => console.log(`Error>>> ${err}`));
}

function successMessage() {
  const divBlockMainMess = document.createElement('div');
  divBlockMainMess.className = 'block_main_mess';
  const divMess = document.createElement('div');
  divMess.className = 'div_message';
  const spanTextMess1 = document.createElement('span');
  spanTextMess1.className = 'span_text_mess';
  spanTextMess1.innerHTML = '&#10004';
  const spanTextMess2 = document.createElement('span');
  spanTextMess2.className = 'span_text_mess';
  spanTextMess2.innerHTML = 'Контент успешно скопирован!';

  spanTextMess2.style.color = '#2f2b2b';

  divBlockButtonModal.prepend(divBlockMainMess);
  divBlockMainMess.append(divMess);
  divMess.prepend(spanTextMess1);
  divMess.append(spanTextMess2);

  setTimeout(() => {
    divBlockMainMess.style.display = 'none';
  }, 2000);
}
