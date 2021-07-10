function load_student() {
 
  var infiniteList = document.getElementById('infinite-list');
  infiniteList.delegate = {
    createItemContent: function(i) {
      return ons.createElement('<ons-list-item>Item ' + i + '</ons-list-item>');
    },
    countItems: function() {
      return 10000;
    }
  };

  infiniteList.refresh();
};


document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.matches('student.html')) {
  
    fn.load_student
  }
});