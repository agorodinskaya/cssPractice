const team = {
  _players: [],
  _games: [],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName, 
      age
    }
    this._players.push(player)
  },
  addGame(opponent, myScore, oppScore){
    const game = {
      opponent: opponent,
      teamScore: myScore,
      opponentPoints: oppScore 
    };
    this._games.push(game)
  }
}

team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
team.addPlayer('Steph', 'Curry', 84)

team.addGame('Bugs', 270, 214)

