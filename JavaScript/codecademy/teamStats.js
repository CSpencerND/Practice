const team = {

    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pete', 
            lastName: 'Wheeler', 
            age: 54
        },
        {
            firstName: 'Chris',
            lastName: 'Wagon',
            age: 35
        },
    ],

    _games: [
        {
          opponent: 'Broncos',
          teamPoints: 42,
          opponentPoints: 27
        },
        {
          opponent: 'Koopas',
          teamPoints: 54,
          opponentPoints: 77
        },
        {
          opponent: 'Returners',
          teamPoints: 97,
          opponentPoints: 38
        },
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age)
    {
        const newPlayer = {
            firstName,
            lastName,
            age
        }
        this._players.push(newPlayer);
    },

    addGame(opponent, teamPoints, opponentPoints)
    {
        const newGame = {
            opponent,
            teamPoints,
            opponentPoints
        }
        this._games.push(newGame)
    },

}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Lilac", 87, 24);
team.addGame("Crimson", 55, 28);
team.addGame("Cerulean", 45, 76);

console.log(team.games);
