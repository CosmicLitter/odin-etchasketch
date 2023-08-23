const sketch = document.querySelector('.sketch')
let canvasSize = 2;

const canvasSelect = document.querySelector('#canvas');
canvasSelect.addEventListener('change', setCanvas)

function setCanvas() {
    canvasSize = canvasSelect.value;
    sketch.innerHTML = ''

    for (let x = 0; x < canvasSize; x++) {
        const column = document.createElement('div');
        column.classList.add('column');
        for (let i = 0; i < canvasSize; i++) {
            const pixel = document.createElement('div')
            pixel.classList.add('pixel');
            column.append(pixel);
        }

        sketch.appendChild(column)
    }

}

setCanvas()

