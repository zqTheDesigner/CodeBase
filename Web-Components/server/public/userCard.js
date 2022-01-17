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

        <form>
            <label for='data'>Data</label><br>
            <input type='text' id='data' name='data'><br>
            <input type='submit' value='Submit' id='submitData'>
        </form>

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

        // Pass props to elements
        this.shadowRoot.querySelector('h3').innerText =
            this.getAttribute('name')
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')

        console.log(window.origin)
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

    submitData() {
        const data = this.shadowRoot.querySelector('#data')
        console.log(data.value)
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector('#toggleInfo')
            .addEventListener('click', () => {
                this.toggleInfo()
            })

        this.shadowRoot
            .querySelector('#submitData')
            .addEventListener('click', (event) => {
                event.preventDefault()
                this.submitData()
            })
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggleInfo').removeEventListener()
        this.shadowRoot.querySelector('#submitData').removeEventListener()
    }
}

window.customElements.define('user-card', UserCard)
