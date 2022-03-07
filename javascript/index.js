function gameInfoToggle(gameCard) {
    let gameInfo = document.getElementById(gameCard).getElementsByTagName("p");
    let count = 0;
    for (let i = 0; i < gameInfo.length; i++) {
        if (!gameInfo[i].classList.contains('hidden')) {
            count = i + 1;
            gameInfo[i].classList.toggle('hidden');
        }
    }
    if (count >= gameInfo.length) {
        count = 0;
    }
    gameInfo[count].classList.toggle('hidden');
}