// CHALLENGE 1

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [ [ 'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski' ], 
    [ 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze' ] ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },

    printGoals (...players) {
        console.log(`${players.length} goals were scored`);
        for (let i = 0; i < players.length; i++) {
            console.log(players[i]);
        };
    },
}
/*
const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { odds: { team1, x:draw, team2 } } = game;
console.log(team1, draw, team2);

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals('Davies', 'Muller', 'Kimmich');

game.printGoals(...game.scored);

// 7.
team1 < team2 && console.log("Team 1 is more likely to win");

team2 < team1 && console.log("Team 2 is more likely to win");
*/

// 1.
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let sum = 0;
for ( const value of Object.values(game.odds) ) {
    sum += value;
}

console.log(`The average odd is ${sum / Object.values(game.odds).length}`);

// 3.
console.log(Object.entries(game.odds));
for ( [key, value] of Object.entries(game.odds)) {
    const msg = `Odd of ${key === 'x' ? 'draw' : (`victory ${game[key]}`)} `;
    console.log(`${msg} ${value}`);
    //console.log(`${msg} ${value}`);
}

// Bonus.
const scorers = {};

for (const scorer of game.scored) {
    scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
};

console.log(scorers);

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1.
const setEvents = new Set (gameEvents.values());
console.log(setEvents);
const events = [...setEvents];
console.log(events);
// const events = [...new Set (gameEvents.values())]
// console.log(events);

// 2.
gameEvents.delete(64)
console.log(gameEvents);

// 3. 
// let average = 0;
// let lastTime = 0;

// for (const time of gameEvents.keys()) {
//     let difference = 0;
//     difference = time - lastTime;
//     lastTime = time;
//     average += difference;
// };
// console.log(gameEvents.size);
// average /= gameEvents.size;
// console.log(`An event happend, on average, every ${average} minutes`);
// // 3. Another solution (shorter and better)
time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happend, on average, every ${time / gameEvents.size} minutes`);

// 4.

for (const [min, event] of gameEvents) {
    console.log(`${min <= 45 ? `[FIRST HALF]` : `[SECOND HALF]`} ${min}: ${event}`);
    // another option
    // const half = min <= 45 ? `FIRST` : `SECOND`;
    // console.log(`[${half} HALF] ${min}: ${event}`); 
}
