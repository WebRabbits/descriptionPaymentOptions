'use strict';

//TODO: Add elements page

// const section = document.createElement('section');
// section.classList = 'section-block';
// const div = document.createElement('div');
// div.className = 'div-block';1

const divBlockButtonModal = document.createElement('div');
divBlockButtonModal.className = 'block-button-modal';

const divButton = document.createElement('div');
divButton.className = 'container-add-button';

const addButtonDescPayment = document.createElement('button');
addButtonDescPayment.className = 'add_button_description_payment';
addButtonDescPayment.innerText = 'Добавить описание платёжной системы';

const divModal = document.createElement('div');
divModal.className = 'container-modal';
// divModal.textContent = 'This test text message the modal'; // TODO: потом убрать

divModal.insertAdjacentHTML(
  'afterbegin',
  `
      <div class="container-close-modal">
        <span class="close-modal">&#10006</span>
      </div>
      <form class="form-modal" novalidate>
      <section class="section-block">
        <div class="form-item">
            <input type="text" class="form_type_input" name="namePayment" required placeholder="Введите название платёжной системы...">
            <label>Название платёжной системы</label>
            <span class="error_message">Заполните данное поле</span>
        </div>
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
            <select class="form_type_input" name="typePayment" required>
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
            <span>&#8226; Выплаты без наличия депозита <i>(ДА/НЕТ)</i>:</span>
            <input type="checkbox" value="" class="form_type_input" name="withdrawalNotDeposit">
          </div>
          <div>
            <span>&#8226; Выплаты без использования "PayTool" <i>(ДА/НЕТ)</i>:</span>
            <input type="checkbox" value="" class="form_type_input" name="withdrawalNotPayTool">
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
        <textarea cols="30" rows="10" class="form_type_input" name="requiredFieldsDeposit" required placeholder="Перечислите список required-полей для депозита средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>Required-поля при депозите средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input" name="requiredFieldsWithdrawal" required  placeholder="Перечислите список required-полей для вывода средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>Required-поля при выводе средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <p class="list-toggle">AdditionalParams-поля:</p>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input" name="additionalFieldsDeposit" required  placeholder="Перечислите список additionalParams-полей для депозита средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>additionalParams-поля при депозите средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input" name="additionalFieldsWithdrawal" required placeholder="Перечислите список additionalParams-полей для вывода средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>additionalParams-поля при выводе средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
    </section>
    <section class="section-block">
      <div class="container-text">
        <p>Описание работы платёжной системы:</p>
      </div>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input" name="descDeposit" required  placeholder="Опишите работу платёжной системы при ДЕПОЗИТЕ средств..."></textarea>
        <label>Описание работы при ДЕПОЗИТЕ средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item private-options">
        <textarea cols="30" rows="10" class="form_type_input" name="descWithdrawal" required placeholder="Опишите работу платёжной системы при ВЫВОДЕ средств..."></textarea>
        <label>Описание работы при ДЕПОЗИТЕ средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
    </section>
    <section>
      <button type="submit" class="form_payments_button">Получить данные</button>
    </section>
    </form>
   `
);

document.body.prepend(divBlockButtonModal);
divBlockButtonModal.append(divButton);
divButton.append(addButtonDescPayment);
divBlockButtonModal.append(divModal);

//TODO: Get elements

const buttonCloseModal = document.querySelector(
  '.container-close-modal>.close-modal'
);

const formModal = document.querySelector('.form-modal');
// console.dir(formModal);
const inputTextList = Array.from(document.querySelectorAll('.form_type_input'));
// const textareaList = Array.from(formModal.querySelectorAll('.form_type_input'));
console.log(inputTextList);
const errorMessage = Array.from(document.querySelectorAll('.error_message'));
// console.log(errorMessage);
const submitButton = document.querySelector('.form_payments_button');

// const three = document.querySelector('.container-modal');

//TODO: Event logic

addButtonDescPayment.addEventListener('click', openModal);

buttonCloseModal.addEventListener('click', closeModal);

//TODO: Main logic

//TODO: Открытие модального окна
function openModal() {
  divModal.classList.add('openModal');
}

//TODO: Закрытие модального окна при нажатии на кнопку закрытия
function closeModal() {
  divModal.classList.contains('openModal')
    ? divModal.classList.remove('openModal')
    : null;
}

//https://doka.guide/recipes/validation/

startValidationForm();

function startValidationForm() {
  formModal.addEventListener('submit', (event) => {
    event.preventDefault();

    let dataArrayInput = new Array();
    if (hasValidInput()) {
      inputTextList.forEach((itemElement) => {
        console.log(`${itemElement.name}: ${itemElement.value}`);
        dataArrayInput.push({
          property: itemElement.name,
          value: itemElement.value || itemElement.checked,
        }); // Собираем данные в новый массив
        // inputEventElement(itemElement);
        defaultInput(itemElement);
      });
      event.target.reset(); // Очищаем форму при заполнении всех полей и отправки данных
    } else {
      inputTextList.forEach((itemElement) => inputEventElement(itemElement));
    }
    if (dataArrayInput.length == 0) return;
    getValidValueElementForm(dataArrayInput);
    // console.log(dataArrayInput);
  });

  inputTextList.forEach((itemElement) => {
    itemElement.addEventListener('input', () => {
      inputEventElement(itemElement);
      // showErrorMessage(itemElement);
      // errorMessage.forEach((itemError) => {
      //   showErrorMessage(itemElement, itemError);
      // });
    });
  });
}

function hasValidInput() {
  return inputTextList.every((item) => item.validity.valid);
}

function inputEventElement(item) {
  // console.log(item.name + '->' + item.value);
  if (
    item.type !== 'text' &&
    item.type !== 'textarea' &&
    item.type !== 'select-one'
  )
    return;

  if (item.value == '') {
    // console.log(hasValidInput());
    elementStyleInvalid(item);
    showErrorMessage(item);
  } else {
    // console.log(hasValidInput());
    elementStyleValid(item);
    showErrorMessage(item);
  }
}

function showErrorMessage(itemElement) {
  // console.log(itemElement);
  // console.log(itemElement, itemError);
  errorMessage.forEach((itemError) => {
    if (itemElement.parentElement == itemError.parentElement) {
      if (itemElement.value == '') {
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
  // itemError.style.opacity = '1';
}

function elementStyleValid(itemElement) {
  itemElement.style.border = '1px solid green';
  itemElement.style.boxShadow = 'inset 0px 0px 2px green';
  itemElement.style.transition = '0.7s';
  // itemError.style.opacity = '0';
}

function defaultInput(itemElement) {
  itemElement.style.border = '1px solid #ccc';
  itemElement.style.boxShadow = 'none';
  itemElement.style.transition = '0.7s';
}

function getValidValueElementForm(itemArray) {
  for (const elem of itemArray) {
    // console.log(key + '->' + value);
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
    // console.log(elem);
  }

  const processingNewArray = [...itemArray];
  // console.log(processingNewArray);

  getIndividualElementMap(processingNewArray);
  // console.log(processingNewArray);

  // const correctDataArray = itemArray.map()

  // const map = new Map();
  // map.set('namePayment', itemArray[0]);
  // map.set('optionsPaySystem', itemArray[1]);
  // map.set('optionsPayConfig', itemArray[2]);
  // map.set('typePayment', itemArray[3]);
  // map.set('supportCurrencies', itemArray[4]);
  // map.set('supportConversion', itemArray[5]);
  // map.set('withdrawalNotDeposit', itemArray[6]);
  // map.set('withdrawalNotPayTool', itemArray[7]);
  // map.set('requiredFieldsDeposit', itemArray[8]);
  // map.set('requiredFieldsWithdrawal', itemArray[9]);
  // map.set('additionalFieldsDeposit', itemArray[10]);
  // map.set('additionalFieldsWithdrawal', itemArray[11]);
  // map.set('descDeposit', itemArray[12]);
  // map.set('descWithdrawal', itemArray[13]);

  // console.log(map);

  // viewResult(map);

  // МОЭНО КОПИРОВАТЬ В БУФЕР ОБМЕНА ЗНАЧЕНИЕ ЦЕЛОЙ ПЕРЕМЕННОЙ СТАНДАРТНЫМ ОБРАЗОМ  через navigator и объекта clipboard с методом .writeText
  // let param = map.get('descWithdrawal');
  // console.log(map.get('descDeposit'), map.get('namePayment'));

  // navigator.clipboard
  //   .writeText(param)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.log(`Error>>> ${err}`));
}

function getIndividualElementMap(processingNewArray) {
  // console.log(processingNewArray);
  // const map = new Map();
  const propertyArray = processingNewArray.map((item) => item.property);
  console.log(propertyArray);
  const valueArray = processingNewArray.map((item) => item.value);
  console.log(valueArray);

  const newObj = new Object();

  propertyArray.forEach((elem, index) => {
    valueArray.find((item, ind) => {
      console.log(item);
      if (index === ind) {
        newObj[elem] = typeof item == 'string' ? item.trim() : item;
      }
    });
  });

  console.log(newObj);

  console.log(newObj.typePayment, newObj.descDeposit);

  viewResult(newObj);
}

const resultDataDescriptionPayment = document.createElement('div');
document.body.append(resultDataDescriptionPayment);

// Описать условия для чекбоксов:
//"Выплаты без наличия успешного депозита"
//"Выплаты без использования 'PayTool'"

// Подставить <pre><code></code></pre> в части вывода required/additionalParams-полей. Сделать условие проверки вывода информации в данные блоки, если есть информация, и НЕ ВЫВОДИТЬ, если в качестве значение передано "НЕТ"
function viewResult(objData) {
  resultDataDescriptionPayment.insertAdjacentHTML(
    'afterend',
    `<div class="main_block_container_payment">
    <div class="box_block_payment">
      <p>Настройка платёжной системы</p>
      <div class="block_description_1">
        <div class="container_block_icon">
          <span class="icon_block_description">i</span>
        </div>
        <div class="options_payment_systems">
          <pre>
             <code>
             ${objData.optionsPaySystem}
              </code>
          </pre>
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
          <pre>
             <code>
             ${objData.optionsPayConfig}
              </code>
          </pre>
        </div>
      </div>
    </div>
  
    <div class="box_block_payment">
      <p>Поддержка видов транзакций</p>
      <div class="block_description_2">
        <p>
          Платёжная система поддерживает: <span>${objData.typePayment} средств</span>
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
          <input type="checkbox" value="" checked="${objData.withdrawalNotDeposit}"/>
        </p>
        <p>
          Функционал
          <strong>"Выплаты без использования 'PayTool'"</strong> -
          <input type="checkbox" value="" checked="${objData.withdrawalNotPayTool}"/>
        </p>
      </div>
    </div>
  
    <div class="box_block_payment">
      <p>Поддерживаемые дополнительные поля</p>
      <div class="block_description_2">
        <p>
          - <strong style="color: orange">Required-поля</strong> при
          <strong>депозите средств</strong>:
          <span>${objData.requiredFieldsDeposit}</span>
        </p>
        <p>
          - <strong style="color: orange">Required-поля</strong> при
          <strong>выводе средств</strong>:
          <span>${objData.requiredFieldsWithdrawal}</span>
        </p>
        <p>
          - <strong style="color: orange">AdditionalParams-поля</strong> при
          <strong>депозите средств</strong>:
          <span>${objData.additionalFieldsDeposit}</span>
        </p>
        <p>
          - <strong style="color: orange">AdditionalParams-поля</strong> при
          <strong>выводе средств</strong>:
          <span>${objData.additionalFieldsWithdrawal}</span>
        </p>
      </div>
    </div>
  
    <div class="box_block_payment">
      <p>Описание работы платёжной системы при ДЕПОЗИТЕ средств</p>
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
    </div>
  
    <div class="box_block_payment">
      <p>Описание работы платёжной системы при ВЫВОДЕ средств</p>
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
    </div>
  
    <div class="box_block_payment">
      <p>Полезные ссылки:</p>
      <div class="block_description_2">
        <a href="">Ссылка на ручную отправку callback-запроса (Postman)</a>
        <a href="">Ссылка на интеграционный тикет</a>
        <a href="">Ссылка на внешнюю документацию платёжной системы</a>
      </div>
    </div>
  </div>`
  );
}

// function toggleButtonSubmit() {
//   submitButton.disabled = false;
//   submitButton.style.cursor = 'pointer';
// }
