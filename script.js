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
          <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="optionsPaysystem" required placeholder="Введите все данные о настройках платёжной системы..."></textarea>
          <label>Настройка платёжной системы</label>
          <span class="error_message">Заполните данное поле</span>
        </div>
    </section>
    <section class="section-block">
      <div class="form-item">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="optionsPayconfig" required placeholder="Введите параметры и значения конфигурационных данных платёжной системы... (Также, можно дать краткое описание каждого параметра)"></textarea>
        <label>Настройка конфига платёжной системы</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
    </section>
    <section class="section-block">
      <div class="form-item">
        <input type="text" class="form_type_input" name="typePayment" required placeholder="Укажите, что поддерживает платёжная система - ДЕПОЗИТ/ВЫВОД">
        <label>Поддержка видов транзакций</label>
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
      <input type="text" class="form_type_input" name="supportConversion" required placeholder="Укажите, поддерживает ли платёжная система конвертацию - ПРИСУТСТВУЕТ/ОТСУТСТВУЕТ">
      <label>Поддержка конвертации с нашей стороны</label>
      <span class="error_message">Заполните данное поле</span>
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
            <input type="checkbox" value="" class="form_type_input" name="withdrawalNotPaytool">
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
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="requiredFieldsDeposit" required placeholder="Перечислите список required-полей для депозита средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>Required-поля при депозите средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="requiredFieldsWithdrawal" required  placeholder="Перечислите список required-полей для вывода средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>Required-поля при выводе средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <p class="list-toggle">AdditionalParams-поля:</p>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="additionalFieldsDeposit" required  placeholder="Перечислите список additionalParams-полей для депозита средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>additionalParams-поля при депозите средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="additionalFieldsWithdrawal" required placeholder="Перечислите список additionalParams-полей для вывода средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>additionalParams-поля при выводе средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
    </section>
    <section class="section-block">
      <div class="container-text">
        <p>Описание работы платёжной системы:</p>
      </div>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="descDeposit" required  placeholder="Опишите работу платёжной системы при ДЕПОЗИТЕ средств..."></textarea>
        <label>Описание работы при ДЕПОЗИТЕ средств</label>
        <span class="error_message">Заполните данное поле</span>
      </div>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="descWithdrawal" required placeholder="Опишите работу платёжной системы при ВЫВОДЕ средств..."></textarea>
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
const inputList = Array.from(formModal.querySelectorAll('.form_type_input'));
const textareaList = Array.from(
  formModal.querySelectorAll('.form_type_textarea')
);
// console.log(inputList, textareaList);
const errorMessage = Array.from(document.querySelectorAll('.error_message'));
// console.log(errorMessage);
const submitButton = document.querySelector('.form_payments_button');

const three = document.querySelector('.container-modal');

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
  const elementForm = Array.from(formModal.elements);
  formModal.addEventListener('submit', (event) => {
    event.preventDefault();

    //TODO: Общая валидация формы и сбор данных при отправке
    // console.log(elementForm);

    elementForm.forEach((itemElement) => {
      // console.log(itemElement);
      errorMessage.forEach((itemError) => {
        generalValidationForm(itemElement, itemError);
      });
    });
  });
  elementForm.forEach((itemElement) => {
    itemElement.addEventListener('input', () =>
      errorMessage.forEach((itemError) => {
        checkElementsValid(itemElement, itemError);
      })
    );
  });

  // elementForm.forEach((itemElement) => {
  //   itemElement.addEventListener('change', () => {
  //     errorMessage.forEach((itemError) => {
  //       checkElementsValid(itemElement, itemError);
  //     });
  //   });
  // });
}

// function validateForm() {
//   const elementForm = Array.from(formModal.elements);
//   elementForm.forEach((itemElement) => {
//     itemElement.addEventListener('input', checkElementsValid(itemElement));
//   });

// elementForm.forEach((itemElement) => {
//   itemElement.addEventListener('change', () => )
// })
// }

function checkElementsValid(itemElement, itemError) {
  // console.log(itemElement);
  if (itemElement.type == 'checkbox') return;
  if (itemElement.parentElement == itemError.parentElement) {
    if (itemElement.value == '') {
      elementStyleInvalid(itemElement, itemError);
    } else {
      elementStyleValid(itemElement, itemError);
    }
  }
}

// function changeElementsValid(itemElement) {
//   if (itemElement.value !== '') {
//     console.log(itemElement.value);
//     elementStyleValid(itemElement);
//   } else {
//     elementStyleInvalid(itemElement);
//   }
// }

function elementStyleInvalid(itemElement, itemError) {
  itemElement.style.border = '1px solid red';
  itemElement.style.boxShadow = 'inset 0px 0px 2px red';
  itemElement.style.transition = '0.7s';
  itemError.style.opacity = '1';
}

function elementStyleValid(itemElement, itemError) {
  itemElement.style.border = '1px solid green';
  itemElement.style.boxShadow = 'inset 0px 0px 2px green';
  itemElement.style.transition = '0.7s';
  itemError.style.opacity = '0';
}

function generalValidationForm(itemElement, itemError) {
  if (itemElement.type == 'checkbox') return;
  if (itemElement.parentElement == itemError.parentElement) {
    if (itemElement.value === '') {
      elementStyleInvalid(itemElement, itemError);
      return;
    } else {
      elementStyleValid(itemElement, itemError);
      console.log(itemElement.value);
    }
  }
}
