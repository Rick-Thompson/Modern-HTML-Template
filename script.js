window.addEventListener('DOMContentLoaded', function () {

    //add things to do after the page is loaded here

});

/*-----------------Web Components---------------------------*/
//nav
fetch("Components/nav.html")
    .then(stream => stream.text())
    .then(text => define(text, "nav-menu"));
//header
fetch("Components/header.html")
    .then(stream => stream.text())
    .then(text => define(text, "header-component"));//nav
//footer
fetch("Components/footer.html")
    .then(stream => stream.text())
    .then(text => define(text, "footer-component"));
/* To add more components just duplicate one of the other sections, make sure the name has a dash - in it to be valid */
function define(html, navpart) {
    class NavComponent extends HTMLElement {
        set value(value) {
            this._value = value;
            this.valueElement.innerText = this._value;
        }
        get value() {
            return this._value;
        }
        constructor() {
            super();
            this._value = 0;
            var shadow = this.attachShadow({ mode: 'open' });
            shadow.innerHTML = html;
        }
    }
    customElements.define(navpart, NavComponent);
}
/* -- end web components -- */




//everything else goes here