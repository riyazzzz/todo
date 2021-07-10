window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) { 
  var content = document.getElementById('nav-main');
  var menu = document.getElementById('menu');
  content.resetToPage(page)
.then(menu.close.bind(menu));
};

window.fn.push = function(page) {
  var content = document.getElementById('nav-main');
  var menu = document.getElementById('menu');
  content.pushPage(page)
    .then(menu.close.bind(menu));
};

STORAGE = window.localStorage;

function save_student(){
  name = document.getElementById('name').value;
  age = document.getElementById('age').value;
  course= document.getElementById('course').value;
  fees= document.getElementById('fees').value;
  STORAGE.setItem('name', name);
  STORAGE.setItem('age', age);
  STORAGE.setItem('course',course);
  STORAGE.setItem('fees',fees);
  STORAGE.getItem('name');
  STORAGE.getItem('age');
  STORAGE.getItem('course');
  STORAGE.getItem('fees');   

}

function show_all()
{
  
  name = STORAGE.getItem('name');
  age= STORAGE.getItem('age');
  course = STORAGE.getItem('course');

  fees= STORAGE.getItem('fees');

  document.getElementById("name").value=name;
  document.getElementById("age").value=age;
  document.getElementById("course").value=course;
  document.getElementById("fees").value=fees;
  

}










const login = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    if (username === 'user' && password === 'pass') {
      // call the navigator to move to the new page
      fn.load('student.html');
    } else {
      ons.notification.alert('Wrong username/password combination');
    }
  }

function clear_all()
{
document.getElementById('name').value = "";
document.getElementById('age').value = "";
document.getElementById('course').value = "";
document.getElementById('fees').value = "";
  }

 








