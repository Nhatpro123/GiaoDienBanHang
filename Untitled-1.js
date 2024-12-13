document.querySelectorAll('input[name="category"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        let selectedCategory = this.nextSibling.nodeValue.trim();
        console.log("Selected category: " + selectedCategory);
    });
});

document.querySelector('button.ml-2').addEventListener('click', function() {
    let searchTerm = document.querySelector('input[type="text"]').value;
    alert('Search term: ' + searchTerm);
});
