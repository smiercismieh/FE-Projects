const arrowIcon = document.querySelector('.fas')
const arrowBtn = document.querySelector('.arrow')
const item1 = document.querySelector('.item1')

function showImage () {
        item1.classList.toggle('show');
        if (item1.classList.contains('show')) {
            // arrowIcon.style.rotate = '180deg'
            arrowIcon.style.transform = 'rotate(180deg)'
        }
        else {
            // arrowIcon.style.rotate = '180deg'
            arrowIcon.style.transform = 'rotate(0deg)'
        }
}

arrowBtn.addEventListener('click', showImage)