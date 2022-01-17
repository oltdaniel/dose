function switch_language(e) {
    if(e.value === default_language)
        window.location.href = "/"
    else
        window.location.href = "/" + e.value
}

function toggle_prefers_color() {
    localStorage.setItem('prefers-color', document.body.classList.contains('dark') ? 'light' : 'dark');
    evaluate_prefers_color();
}

function redirect(u) {
    window.location.href = u
}