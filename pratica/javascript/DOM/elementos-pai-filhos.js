window.onload = function() {
    let h1 = document.getElementsByTagName('div')

    for (let h of h1) {
        console.log(h)
        h.addEventListener('click', qop)
    }

    function qop() {
        let t = this
        console.log(t.children[1])
    }
}