function switch_language(e) {
    if(e.value === default_language)
        window.location.href = "/"
    else
        window.location.href = "/" + e.value
}

function redirect(u) {
    window.location.href = u
}