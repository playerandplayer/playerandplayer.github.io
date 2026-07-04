const game=new Game();

const nation=new Nation("Republic");

nation.addParty(
    new Party(
        "Social Democrats",
        "#d73027",
        -30
    )
);

nation.addParty(
    new Party(
        "Conservatives",
        "#4575b4",
        40
    )
);

nation.addParty(
    new Party(
        "Greens",
        "#66bd63",
        -60
    )
);

nation.parties[0].popularity=34;
nation.parties[1].popularity=31;
nation.parties[2].popularity=18;

game.nation=nation;

game.start();