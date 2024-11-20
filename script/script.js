let lang = navigator.language.slice(0, 2);

if (lang === 'en') {
    document.querySelectorAll('.ukrainian').forEach(elem => elem.style.display = 'none');
} else if (lang === 'ua')  {
    document.querySelectorAll('.english').forEach(elem => elem.style.display = 'none');
}
