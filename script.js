window.addEventListener('DOMContentLoaded', function() {
  var documents = document.getElementsByClassName('document');

  Array.prototype.forEach.call(documents, function(documentElement) {
    documentElement.addEventListener('click', function() {
      this.classList.toggle('expanded');
      var contentElement = this.querySelector('.document-content');
      contentElement.style.display = contentElement.style.display === 'none' ? 'block' : 'none';
    });
  });
});
