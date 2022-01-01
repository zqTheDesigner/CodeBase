const template = document.createElement('template')
template.innerHTML = `
<style>
 h3{
	 color: coral
 }
</style>

<div class='user-card'>
	<img />
	<div>
		<h3></h3>
		<div class='info'>
			<p><slot name='email' /></p>
			<p><slot name='phone' /></p>
		</div>

		<button id='toggleInfo'>Hide Info</button>

	</div>
	

</div>
`

class UserCard extends HTMLElement {
    constructor() {
        super()

        this.showInfo = true

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.shadowRoot.querySelector('h3').innerText =
            this.getAttribute('name')

        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
    }

    toggleInfo() {
        this.showInfo = !this.showInfo

        const info = this.shadowRoot.querySelector('.info')
        const toggleBtn = this.shadowRoot.querySelector('#toggleInfo')

        if (this.showInfo) {
            info.style.display = 'block'
            toggleBtn.innerText = 'Hide Info'
        } else {
            info.style.display = 'none'
            toggleBtn.innerText = 'Show Info'
        }
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector('#toggleInfo')
            .addEventListener('click', () => {
                this.toggleInfo()
            })
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggleInfo').removeEventListener()
    }
}

window.customElements.define('user-card', UserCard)
