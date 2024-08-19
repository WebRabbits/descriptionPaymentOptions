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
      <form class="form-modal">
      <section class="section-block">
        <div class="form-item">
            <input type="text" class="form_type_input" name="namePayment" placeholder="Введите название платёжной системы...">
            <label>Название платёжной системы</label>
        </div>
      </section>
      <section class="section-block">
        <div class="form-item">
          <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="optionsPaysystem" placeholder="Введите все данные о настройках платёжной системы..."></textarea>
          <label>Настройка платёжной системы</label>
        </div>
    </section>
    <section class="section-block">
      <div class="form-item">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="optionsPayconfig" placeholder="Введите параметры и значения конфигурационных данных платёжной системы... (Также, можно дать краткое описание каждого параметра)"></textarea>
        <label>Настройка конфига платёжной системы</label>
      </div>
    </section>
    <section class="section-block">
      <div class="form-item">
        <input type="text" class="form_type_input" name="typePayment" placeholder="Укажите, что поддерживает платёжная система - ДЕПОЗИТ/ВЫВОД">
        <label>Поддержка видов транзакций</label>
      </div>
    </section>
    <section class="section-block">
      <div class="form-item">
      <input type="text" class="form_type_input" name="supportCurrencies" placeholder="Укажите все поддерживаемые валюты...">
      <label>Поддерживаемые валюты</label>
      </div>
    </section>
    <section class="section-block">
      <div class="form-item">
      <input type="text" class="form_type_input" name="supportConversion" placeholder="Укажите, поддерживает ли платёжная система конвертацию - ПРИСУТСТВУЕТ/ОТСУТСТВУЕТ">
      <label>Поддержка конвертации с нашей стороны</label>
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
      <span class="list-toggle">Required-поля:</span>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="requiredFieldsDeposit" placeholder="Перечислите список required-полей для депозита средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>Required-поля при депозите средств</label>
      </div>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="requiredFieldsWithdrawal"  placeholder="Перечислите список required-полей для вывода средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>Required-поля при выводе средств</label>
      </div>
      <span class="list-toggle">AdditionalParams-поля:</span>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="additionalFieldsDeposit"  placeholder="Перечислите список additionalParams-полей для депозита средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>additionalParams-поля при депозите средств</label>
      </div>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="additionalFieldsWithdrawal" placeholder="Перечислите список additionalParams-полей для вывода средств (либо укажите 'НЕТ' при их отсутствие)"></textarea>
        <label>additionalParams-поля при выводе средств</label>
      </div>
    </section>
    <section class="section-block">
      <div class="container-text">
        <p>Описание работы платёжной системы:</p>
      </div>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="descDeposit"  placeholder="Опишите работу платёжной системы при ДЕПОЗИТЕ средств..."></textarea>
        <label>Описание работы при ДЕПОЗИТЕ средств</label>
      </div>
      <div class="form-item private-options">
        <textarea name="" id="" cols="30" rows="10" class="form_type_textarea" name="descWithdrawal" placeholder="Опишите работу платёжной системы при ВЫВОДЕ средств..."></textarea>
        <label>Описание работы при ДЕПОЗИТЕ средств</label>
      </div>
    </section>
    <button type="submit" class="form_payments_button">Получить данные</button>
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
console.log(inputList, textareaList);
const submitButton = document.querySelector('.form_payments_button');

const three = document.querySelector('.container-modal');

//TODO: Event logic

addButtonDescPayment.addEventListener('click', openModal);

buttonCloseModal.addEventListener('click', closeModal);

formModal.addEventListener('submit', (event) => {
  event.preventDefault();
  getDataForm();
});

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

// validationMessage: "Заполните это поле."
function validationFormData(arrayData) {
  // console.log(arrayData);
  // arrayData.filter((el) => {
  //   if (el.value == '') {
  //     el.style.border = '1px solid red';
  //   } else {
  //     el.style.border = '1px solid green';
  //   }
  // });1
}

function getDataForm() {
  const arrayDataForm = Array.from(formModal.elements);
  arrayDataForm.forEach((itemElement) => {
    if (itemElement.type !== 'checkbox') {
      return (itemElement.required = true);
    }
  });
  validationFormData(arrayDataForm);
  // console.log(arrayDataForm);111111
}

// (function threeRecursion(elem) {
//   const innerElements = elem.children;
//   let newArr = new Array();

//   function iteration(elem) {
//     Array.from(elem).forEach((item) => {
//       threeRecursion(item);
//       console.log(elem);
//     });
//   }
//   iteration(innerElements);
// })(three);

// let result = threeRecursion(three);
// console.log(result);

function sortingGetElements(elements) {
  // console.log(elements);
  // let newArr = [];
  // newArr.push(elements);
  // console.log(newArr);
  // let newArr = [].concat(elements);
  // console.log(newArr);
  // const newSortingElementsArr = new Array();
  // newSortingElementsArr.push(elements);
  // console.log(newSortingElementsArr);
}
