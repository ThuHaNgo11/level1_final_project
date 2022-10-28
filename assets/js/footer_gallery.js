class Gallery {
    constructor() {
    }

    openFullImg(imgUrl) {
        return () => {
            let fullImgBox = document.getElementById('fullImgBox');
            let fullImg = document.getElementById('fullImg');

            fullImgBox.style.display = "flex";

            fullImg.src = imgUrl;
        }
    }

    closeFullImg() {
        fullImgBox.style.display = "none";
    }

    setUpEvents() {
        //close full img when click close button or anywhere on screen
        let fullImgBox = document.getElementById('fullImgBox')
        fullImgBox.addEventListener('click', this.closeFullImg)
        let closeBtn = document.getElementById('closeBtn')
        closeBtn.addEventListener('click', this.closeFullImg)

        //get small img objects and add events for each img
        let smallImgs = document.getElementsByClassName
            ('footer-img')

        for (const img of smallImgs) {
            img.addEventListener('click', this.openFullImg(img.getAttribute('src')))
        }
    }
}

window.addEventListener('load', function () {
    let g = new Gallery()
    g.setUpEvents()
})