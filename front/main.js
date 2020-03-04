class ProductNameValidation {
  static criteria = 'productName';
  static validation(inputValue) {
    return inputValue.length > 0 && inputValue.length < 15;
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
    parent.className = 'parent d-flex justify-content-around';
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
  return fetch('http://localhost:3000/addproduct', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(obj),
  });
}

function getAllData() {
  return fetch('http://localhost:3000/showallproducts');
}

function showInDOM(data) {
  data.forEach(item => {
    let parent = createParentDiv.init();
    let child1 = new CreateElement('div');
    child1.className = 'productName';
    child1.innerHtml = item.productName;
    AppendToDOM.appendTo(parent, child1.currentElement);
    let child2 = new CreateElement('div');
    child2.className = 'productNumber';
    child2.innerHtml = item.productNumber;
    AppendToDOM.appendTo(parent, child2.currentElement);
  });
}
