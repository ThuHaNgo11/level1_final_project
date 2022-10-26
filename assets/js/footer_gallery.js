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
        let smallImgs = document.getElementsByClassName
            ('footer-img')
        let closeBtn = document.getElementById('closeBtn')

        for (const img of smallImgs) {
            img.addEventListener('click', this.openFullImg(img.getAttribute('src')))

            closeBtn.addEventListener('click', this.closeFullImg)
        }
    }
}

window.addEventListener('load', function () {
    let g = new Gallery()
    g.setUpEvents()
})