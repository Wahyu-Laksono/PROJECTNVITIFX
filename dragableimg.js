    // JavaScript to handle the drag event
    document.querySelector('img').addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', event.target.src);
    });