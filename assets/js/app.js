class App {

    constructor() {
    }

    turnOnMask() {
        let lmask = document.getElementById('lmask')
        lmask.classList.toggle('off-mask')
        document.getElementsByTagName('body')[0].classList.toggle('onMask')
    }

    turnOffMask() {
        lmask.classList.toggle('off-mask')
        document.getElementsByTagName('body')[0].classList.toggle('onMask')
    }

    loadMap(address) {
        let newLocationUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDaOulQACiJzBfqumbsqg_-vKha8fCnL-s&q=' + encodeURIComponent(address)

        console.log(newLocationUrl)

        let gmapIframe = document.getElementById('gmapIframe')
        gmapIframe.src = newLocationUrl
    }

    loadMapPopup(app, address) {
        app.turnOnMask()
        app.loadMap(address)
    }

    setUpEvents() {
        let lmask = document.getElementById('lmask')
        lmask.addEventListener('click', this.turnOffMask)

        let receptionML = document.getElementById('map-link-reception')
        
        receptionML.addEventListener('click', this.loadMapPopup.bind(receptionML, this, document.getElementById('receptionAddr').innerText))

    }    
}


window.addEventListener('load', function (){
    let a = new App()
    a.setUpEvents()
})