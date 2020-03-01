class ProductNameValidation {
  static criteria = 'productName';
  static validation(inputValue) {
    return inputValue.length < 15;
  }
}

class ProductNumberValidation {
  static criteria = 'productNumber';
  static validation(imputValue) {
    return typeof !isNaN(imputValue);
  }
}

class AppendToDOM {
  constructor() {}
  static appendTo(parent, child) {
    parent.append(child);
  }
}

class CreateElement {
  constructor(tag) {
    this.tag = document.createElement(tag);
  }
  get currentElement() {
    return this.tag;
  }
  set innerHtml(innerhtml) {
    this.tag.innerHTML = innerhtml;
  }
  set className(classname) {
    this.tag.className = classname;
  }
}

class createParentDiv {
  static init() {
    let parent = new CreateElement('div');
    parent.className = 'parent';
    AppendToDOM.appendTo(products, parent.currentElement);
    return parent.currentElement;
  }
}

function formData(myForm) {
  let formData = new FormData(myForm);
  let obj = {};
  let errorArray = [ProductNameValidation, ProductNumberValidation];
  for (let data of formData) {
    let [key, value] = data;
    let isValid = errorArray.find(error => error.criteria === key);
    if (!isValid.validation(value)) {
      console.log('INVALID');
      return;
    }
    obj[key] = value;
  }
  return obj;
}

function sendData(obj) {
  return fetch('http://localhost:3000/userdata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(obj),
  });
}
function showInDOM(data) {
  let parent = createParentDiv.init();
  console.log(parent);
  for (let key of Object.keys(data)) {
    let child = new CreateElement('div');
    child.className = key;
    child.innerHtml = data[key];
    AppendToDOM.appendTo(parent, child.currentElement);
    console.log(child.currentElement);
  }
}
