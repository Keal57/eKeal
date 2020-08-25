

function pressHomeTab() {
    var table = document.getElementById('HomeTab');
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].onclick = function () {
            switchView(this.textContent);
            };
        }
    }
}

function switchView(tab){
    switch (tab) {
        case "Snake":
            window.location = 'Snake/snakegame.html';
            break
        case "Home":
            window.location = 'home.html';
            break
    }
}
