function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleTheme() {
    var htmlTag = document.documentElement;
    if (htmlTag.getAttribute('data-bs-theme') === "light") {
        htmlTag.setAttribute('data-bs-theme', "dark");
    } else {
        htmlTag.setAttribute('data-bs-theme', "light");
    }
}