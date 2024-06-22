document.getElementById('pricing-toggle').addEventListener('change', function() {
    const isChecked = this.checked;
    document.querySelectorAll('.price').forEach(price => {
        if (price.classList.contains('monthly')) {
            price.style.display = isChecked ? 'none' : 'block';
        } else {
            price.style.display = isChecked ? 'block' : 'none';
        }
    });
});