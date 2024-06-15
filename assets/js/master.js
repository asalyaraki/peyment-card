const cardNum = document.querySelectorAll('#cardNum>input')
const holder = document.getElementById('holder')
const date = document.querySelectorAll('#date>input')
const cvv2 = document.getElementById('cvv2')






cvv2.addEventListener('focus', () => {
    document.getElementById('card').style.transform = 'rotateY(360deg)'
    document.getElementById('front').style.opacity = 0
    document.getElementById('back').style.opacity = 1
})

cardNum.forEach((item) => {
    item.addEventListener('focus', () => {
        document.getElementById('card').style.transform = 'rotateY(0deg)'
        document.getElementById('front').style.opacity = 1
        document.getElementById('back').style.opacity = 0
    })
})

holder.addEventListener('focus', () => {
    document.getElementById('card').style.transform = 'rotateY(0deg)'
    document.getElementById('front').style.opacity = 1
    document.getElementById('back').style.opacity = 0
})

date.forEach((val) => {
    val.addEventListener('focus', () => {
        document.getElementById('card').style.transform = 'rotateY(0deg)'
        document.getElementById('front').style.opacity = 1
        document.getElementById('back').style.opacity = 0
    })
})






cardNum.forEach((item, i) => {
    item.addEventListener('keyup', (e) => {


        if (e.keyCode == 8) {
            if (item.value.length == 0 && i != 0) {
                item.previousElementSibling.focus()
            }
        } else {
            if (e.keyCode > 57 || e.keyCode < 48) {
                alert('please enter a number!')
            }
            else {
                if (item.value.length >= 4) {
                    item.value = item.value.substring(0, 4)


                    if (i != 3) {
                        item.nextElementSibling.focus()
                    } else {
                        holder.focus()
                    }
                }

            }

        }
        document.querySelectorAll('#printNum>h2')[i].innerHTML = e.target.value




    })

})






holder.addEventListener('keyup', (e) => {
    if (e.keyCode > 57 || e.keyCode < 48) {
        document.getElementById('name').innerHTML = e.target.value
    } else {
        alert('please enter a word!')
    }



})





date.forEach((val, i) => {
    val.addEventListener('keyup', (e) => {
        if (e.keyCode == 8) {
            if (val.value.length == 0 && i != 0) {
                val.previousElementSibling.focus()
            }
        } else {
            if (e.keyCode > 57 || e.keyCode < 48) {
                alert('please enter a number!')
            } else {
                if (val.value.length >= 2) {
                    val.value = val.value.substring(0, 2)

                    if (i == 0) {
                        val.nextElementSibling.focus()
                        document.querySelector('#valid>h3').style.paddingRight = '0px'
                    } else {
                        cvv2.focus()
                        document.getElementById('card').style.transform = 'rotateY(360deg)'
                        document.getElementById('front').style.opacity = 0
                        document.getElementById('back').style.opacity = 1

                    }

                }
            }
        }
        document.querySelectorAll('#valid>h2')[i].innerHTML = e.target.value
    })


})





    cvv2.addEventListener('keyup', (e) => {
        document.getElementById('printCvv2').innerHTML = e.target.value
    })
