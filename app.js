const display = document.querySelector('.display')
const circle = document.querySelector('.circle')


function showBtn(btn){
    display.innerHTML += btn 
}

function result(){
    display.innerHTML = eval(display.innerHTML)
}

function reset(){
    display.innerHTML = ""
}

function del(){
    display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-1)
}

function toggle(){
    const one = document.querySelector('.one')
    const two = document.querySelector('.two')
    const three = document.querySelector('.three')

    one.addEventListener('click',function(){
        circle.style.left = "5%"
        document.body.classList.remove('second')
        document.body.classList.remove('third')
    })
    two.addEventListener('click',function(){
        circle.style.left = "39%"
        document.body.classList.remove('third')
        document.body.classList.add('second')
    })
    three.addEventListener('click',function(){
        circle.style.left = "72%"
        document.body.classList.remove('second')
        document.body.classList.add('third')
    })
}

toggle()