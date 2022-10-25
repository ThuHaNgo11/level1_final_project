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

        //click "see location" of reception
        let receptionML = document.getElementById('map-link-reception')
        
        receptionML.addEventListener('click', this.loadMapPopup.bind(receptionML, this, document.getElementById('receptionAddr').innerText))

        //click "see location" of ceremony
        let ceremonyML = document.getElementById('map-link-ceremony')
        
        ceremonyML.addEventListener('click', this.loadMapPopup.bind(ceremonyML, this, document.getElementById('ceremonyAddr').innerText))

        //click "see location" of party
        let partyML = document.getElementById('map-link-party')
        
        partyML.addEventListener('click', this.loadMapPopup.bind(partyML, this, document.getElementById('partyAddr').innerText))
    }    
}


window.addEventListener('load', function (){
    let a = new App()
    a.setUpEvents()
})