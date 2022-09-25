function addPlayer(slots, isLady) {
    if (slots.length == 0) {
        slots = createArray();
        slots.forEach(
            (element) =>
            (document.getElementById("teams").getElementsByTagName("td")[
                element
            ].style.backgroundColor = "white")
        );
        return;
    }
    var index = Math.floor(Math.random() * slots.length);
    var value = slots[index];
    var color = getTeamColor(value);
    document.getElementById("teams").getElementsByTagName("td")[
        value
    ].style.backgroundColor = color;
    slots.splice(index, 1);
}
