console.log('Hello Javascript')

const element = document.createElement('p')
element.innerHTML = 'Hello Javascript!!!'

document.body.appendChild(element)

let count = 0

function append() {

    count += 1

    const oldElement = document.getElementById('p')
    if (oldElement !== null) {
        document.body.removeChild(oldElement)
    }

    const element = document.createElement('p')
    element.innerHTML = 'Clicked!'

    element.id = 'p'
    element.innerHTML = `${count} time${count === 1 ? ' ' : 's '}clicked!`

    document.body.appendChild(element)
}