const teams = [
  "ARI", "ATL", "BAL", "BUF", "CAR", "CHI", "CIN", "CLE",
  "DAL", "DEN", "DET", "GB", "HOU", "IND", "JAX", "KC",
  "LV", "LAC", "LAR", "MIA", "MIN", "NE", "NO", "NYG",
  "NYJ", "PHI", "PIT", "SEA", "SF", "TB", "TEN", "WAS"
];

// 100 real-ish NCAA freshmen players
const topPlayers = [
  { name: "Dylan Raiola", position: "QB", rank: 1 },
  { name: "Jeremiah Smith", position: "WR", rank: 2 },
  { name: "Ellis Robinson IV", position: "CB", rank: 3 },
  { name: "Williams Nwaneri", position: "DL", rank: 4 },
  { name: "Julian Sayin", position: "QB", rank: 5 },
  { name: "Colin Simmons", position: "EDGE", rank: 6 },
  { name: "Cam Coleman", position: "WR", rank: 7 },
  { name: "KJ Bolden", position: "S", rank: 8 },
  { name: "David Stone", position: "DL", rank: 9 },
  { name: "Sammy Brown", position: "LB", rank: 10 },
  { name: "Brandon Baker", position: "OL", rank: 11 },
  { name: "Eddy Pierre-Louis", position: "OL", rank: 12 },
  { name: "Mike Matthews", position: "WR", rank: 13 },
  { name: "DJ Lagway", position: "QB", rank: 14 },
  { name: "Jordan Seaton", position: "OL", rank: 15 },
  { name: "Terry Bussey", position: "ATH", rank: 16 },
  { name: "Ryan Wingo", position: "WR", rank: 17 },
  { name: "Xadavien Sims", position: "DL", rank: 18 },
  { name: "Peyton Woodyard", position: "S", rank: 19 },
  { name: "Zaquan Patterson", position: "S", rank: 20 },
  { name: "Nate Frazier", position: "RB", rank: 21 },
  { name: "Christian Clark", position: "RB", rank: 22 },
  { name: "Jonah-Ajonye", position: "DL", rank: 23 },
  { name: "Zion Kearney", position: "WR", rank: 24 },
  { name: "Tyler Atkinson", position: "LB", rank: 25 },
  { name: "Elijah Rushing", position: "EDGE", rank: 26 },
  { name: "Micah Hudson", position: "WR", rank: 27 },
  { name: "Myles Graham", position: "LB", rank: 28 },
  { name: "LJ McCray", position: "DL", rank: 29 },
  { name: "Josiah Thompson", position: "OL", rank: 30 },
  { name: "Dakorien Moore", position: "WR", rank: 31 },
  { name: "Noah Carter", position: "EDGE", rank: 32 },
  { name: "Kaleb Beasley", position: "CB", rank: 33 },
  { name: "Kameron Davis", position: "RB", rank: 34 },
  { name: "Tysheem Johnson", position: "S", rank: 35 },
  { name: "Elias Williams", position: "DL", rank: 36 },
  { name: "Omarion Robinson", position: "CB", rank: 37 },
  { name: "Aydin Breland", position: "DL", rank: 38 },
  { name: "Jojo Trader", position: "WR", rank: 39 },
  { name: "Kelby Collins", position: "EDGE", rank: 40 },
  { name: "Zalance Heard", position: "OL", rank: 41 },
  { name: "Jerod Smith", position: "DL", rank: 42 },
  { name: "Cameron Lenhardt", position: "EDGE", rank: 43 },
  { name: "Jadyn Davis", position: "QB", rank: 44 },
  { name: "Tony Mitchell", position: "S", rank: 45 },
  { name: "Quinton Martin", position: "RB", rank: 46 },
  { name: "Jordan Hall", position: "LB", rank: 47 },
  { name: "Bryce West", position: "CB", rank: 48 },
  { name: "Kendrick Gilbert", position: "DL", rank: 49 },
  { name: "Tyler Scott", position: "OL", rank: 50 },

  { name: "Marcus Ellis", position: "WR", rank: 51 },
  { name: "Jalen Thompson", position: "CB", rank: 52 },
  { name: "Owen Wright", position: "LB", rank: 53 },
  { name: "Travis Monroe", position: "QB", rank: 54 },
  { name: "Isaiah Green", position: "S", rank: 55 },
  { name: "Devin Clark", position: "OL", rank: 56 },
  { name: "Carlos Johnson", position: "EDGE", rank: 57 },
  { name: "Ethan Brown", position: "WR", rank: 58 },
  { name: "Brandon Harris", position: "RB", rank: 59 },
  { name: "Micah Taylor", position: "DL", rank: 60 },
  { name: "Noah Johnson", position: "S", rank: 61 },
  { name: "Jaxon Lee", position: "OL", rank: 62 },
  { name: "Cameron Wright", position: "WR", rank: 63 },
  { name: "Trevon Smith", position: "CB", rank: 64 },
  { name: "Derek Harris", position: "LB", rank: 65 },
  { name: "Caleb Mitchell", position: "EDGE", rank: 66 },
  { name: "Austin King", position: "QB", rank: 67 },
  { name: "Hunter Jones", position: "RB", rank: 68 },
  { name: "Zachary Roberts", position: "OL", rank: 69 },
  { name: "Jordan Lewis", position: "WR", rank: 70 },
  { name: "Malik Carter", position: "S", rank: 71 },
  { name: "Riley Walker", position: "DL", rank: 72 },
  { name: "Jace Morgan", position: "LB", rank: 73 },
  { name: "Isaac Scott", position: "WR", rank: 74 },
  { name: "Elijah Jones", position: "CB", rank: 75 },
  { name: "Colton White", position: "OL", rank: 76 },
  { name: "Jaylen Bennett", position: "EDGE", rank: 77 },
  { name: "Brady Mitchell", position: "QB", rank: 78 },
  { name: "Xavier Turner", position: "RB", rank: 79 },
  { name: "Miles Clark", position: "WR", rank: 80 },
  { name: "Kendall Davis", position: "S", rank: 81 },
  { name: "Trenton Carter", position: "DL", rank: 82 },
  { name: "Jalen Harris", position: "LB", rank: 83 },
  { name: "Cade Evans", position: "OL", rank: 84 },
  { name: "Bryson Walker", position: "WR", rank: 85 },
  { name: "Tyson Wilson", position: "CB", rank: 86 },
  { name: "Jeremiah Brooks", position: "EDGE", rank: 87 },
  { name: "Colby Young", position: "QB", rank: 88 },
  { name: "Sawyer Nelson", position: "RB", rank: 89 },
  { name: "Logan Peterson", position: "WR", rank: 90 },
  { name: "Darius King", position: "S", rank: 91 },
  { name: "Maxwell Green", position: "DL", rank: 92 },
  { name: "Gavin Thomas", position: "LB", rank: 93 },
  { name: "Hunter Carter", position: "OL", rank: 94 },
  { name: "Marcus Allen", position: "WR", rank: 95 },
  { name: "Dylan Evans", position: "CB", rank: 96 },
  { name: "Tanner Scott", position: "EDGE", rank: 97 },
  { name: "Bryce Mitchell", position: "QB", rank: 98 },
  { name: "Austin Brooks", position: "RB", rank: 99 },
  { name: "Zion James", position: "WR", rank: 100 },
];

// Simulated draft order: 32 teams x 3 rounds = 96 picks total
const draftOrder = [];
for (let round = 1; round <= 3; round++) {
  for (let i = 0; i < teams.length; i++) {
    draftOrder.push({ round, team: teams[i] });
  }
}

let userTeam = null;
let currentPickIndex = 0;
let availablePlayers = [...topPlayers];
let userPicks = [];

const teamNeeds = {
  // Example needs, you can customize per team; format is positions user "needs"
  ARI: ["QB", "WR", "OL"],
  ATL: ["EDGE", "CB", "RB"],
  BAL: ["LB", "DL", "S"],
  BUF: ["QB", "WR", "DL"],
  CAR: ["RB", "CB", "OL"],
  CHI: ["QB", "EDGE", "WR"],
  CIN: ["WR", "LB", "OL"],
  CLE: ["QB", "S", "DL"],
  DAL: ["OL", "RB", "CB"],
  DEN: ["EDGE", "WR", "S"],
  DET: ["QB", "LB", "WR"],
  GB:  ["RB", "CB", "OL"],
  HOU: ["QB", "DL", "WR"],
  IND: ["WR", "LB", "S"],
  JAX: ["EDGE", "RB", "OL"],
  KC:  ["QB", "WR", "DL"],
  LV:  ["CB", "LB", "WR"],
  LAC: ["RB", "OL", "S"],
  LAR: ["QB", "EDGE", "WR"],
  MIA: ["WR", "LB", "OL"],
  MIN: ["QB", "RB", "CB"],
  NE:  ["WR", "S", "DL"],
  NO:  ["QB", "EDGE", "RB"],
  NYG: ["OL", "CB", "WR"],
  NYJ: ["RB", "LB", "S"],
  PHI: ["QB", "WR", "OL"],
  PIT: ["EDGE", "RB", "CB"],
  SEA: ["QB", "LB", "WR"],
  SF:  ["WR", "S", "DL"],
  TB:  ["QB", "RB", "EDGE"],
  TEN: ["OL", "CB", "WR"],
  WAS: ["QB", "LB", "S"]
};

const container = document.getElementById("container");
const teamSelectDiv = document.getElementById("teamSelect");
const draftBoardDiv = document.getElementById("draftBoard");
const availablePlayersDiv = document.getElementById("availablePlayers");
const messageDiv = document.getElementById("message");
const draftGradeDiv = document.getElementById("draftGrade");

// Helper to create HTML elements for teams to select
function showTeamSelection() {
  teamSelectDiv.innerHTML = "<h2>Select Your NFL Team</h2>";
  teams.forEach(team => {
    const btn = document.createElement("button");
    btn.textContent = team;
    btn.classList.add("team-btn");
    btn.addEventListener("click", () => {
      userTeam = team;
      startDraft();
    });
    teamSelectDiv.appendChild(btn);
  });
  draftBoardDiv.style.display = "none";
  availablePlayersDiv.style.display = "none";
  draftGradeDiv.style.display = "none";
  messageDiv.textContent = "";
}

// Start the draft after user selects team
function startDraft() {
  teamSelectDiv.style.display = "none";
  draftBoardDiv.style.display = "block";
  availablePlayersDiv.style.display = "block";
  messageDiv.textContent = `Your team: ${userTeam}`;
  renderDraftBoard();
  renderAvailablePlayers();
  pickNext();
}

// Render the draft board showing picks and teams
function renderDraftBoard() {
  draftBoardDiv.innerHTML = "<h3>Draft Board</h3>";
  const board = document.createElement("ol");
  draftOrder.forEach((pick, idx) => {
    const li = document.createElement("li");
    li.textContent = `Round ${pick.round} - ${pick.team}`;
    if (idx < currentPickIndex) {
      li.textContent += " - Picked";
    }
    if (pick.team === userTeam && idx === currentPickIndex) {
      li.style.fontWeight = "bold";
      li.style.color = "blue";
    }
    board.appendChild(li);
  });
  draftBoardDiv.appendChild(board);
}

// Show available players to pick for the user
function renderAvailablePlayers() {
  availablePlayersDiv.innerHTML = "<h3>Available Players</h3>";
  availablePlayers.forEach(player => {
    const btn = document.createElement("button");
    btn.textContent = `${player.name} (${player.position}) [Rank: ${player.rank}]`;
    btn.classList.add("player-btn");
    btn.disabled = true; // Initially disabled, enable only on user's turn
    btn.addEventListener("click", () => {
      if (draftOrder[currentPickIndex].team === userTeam) {
        userSelectPlayer(player);
      }
    });
    availablePlayersDiv.appendChild(btn);
  });
}

// Enable available players buttons on user's turn, disable otherwise
function togglePlayerButtons(enable) {
  const buttons = availablePlayersDiv.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = !enable);
}

// Handle user picking a player
function userSelectPlayer(player) {
  userPicks.push({ ...player, team: userTeam, pickNumber: currentPickIndex + 1 });
  removePlayerFromAvailable(player);
  currentPickIndex++;
  nextPickOrRound();
}

// Remove player from available list and re-render
function removePlayerFromAvailable(player) {
  availablePlayers = availablePlayers.filter(p => p.name !== player.name);
  renderAvailablePlayers();
}

// Simulate picks for other teams or full rounds if user’s team doesn’t have a pick
function simulatePick() {
  const pickInfo = draftOrder[currentPickIndex];
  const team = pickInfo.team;

  if (availablePlayers.length === 0) {
    currentPickIndex++;
    nextPickOrRound();
    return;
  }

  // Pick best available player (lowest rank)
  const bestPlayer = availablePlayers.reduce((best, p) => p.rank < best.rank ? p : best, availablePlayers[0]);
  if (team === userTeam) {
    // On user's turn but user hasn't picked, enable player buttons
    togglePlayerButtons(true);
    messageDiv.textContent = `Your turn! Select a player for ${team} (Pick ${currentPickIndex + 1})`;
    return;
  } else {
    userPicks.push({ ...bestPlayer, team, pickNumber: currentPickIndex + 1 });
    removePlayerFromAvailable(bestPlayer);
    currentPickIndex++;
    nextPickOrRound();
  }
}

// Check if user’s team has a pick in the current round
function userHasPickThisRound(round) {
  return draftOrder.some((pick, idx) => pick.round === round && pick.team === userTeam && idx >= currentPickIndex);
}

// Simulate entire round if user has no picks in it
function simulateFullRound(round) {
  while (currentPickIndex < draftOrder.length && draftOrder[currentPickIndex].round === round) {
    const bestPlayer = availablePlayers.reduce((best, p) => p.rank < best.rank ? p : best, availablePlayers[0]);
    const team = draftOrder[currentPickIndex].team;
    userPicks.push({ ...bestPlayer, team, pickNumber: currentPickIndex + 1 });
    removePlayerFromAvailable(bestPlayer);
    currentPickIndex++;
  }
  nextPickOrRound();
}

// Called after every pick to decide next action
function nextPickOrRound() {
  renderDraftBoard();
  renderAvailablePlayers();

  if (currentPickIndex >= draftOrder.length) {
    endDraft();
    return;
  }

  const currentRound = draftOrder[currentPickIndex].round;
  if (!userHasPickThisRound(currentRound) && draftOrder[currentPickIndex].team !== userTeam) {
    simulateFullRound(currentRound);
    return;
  }

  const currentTeam = draftOrder[currentPickIndex].team;
  if (currentTeam === userTeam) {
    togglePlayerButtons(true);
    messageDiv.textContent = `Your turn! Select a player for ${userTeam} (Pick ${currentPickIndex + 1})`;
  } else {
    togglePlayerButtons(false);
    messageDiv.textContent = `Simulating pick for ${currentTeam} (Pick ${currentPickIndex + 1})...`;
    setTimeout(simulatePick, 1000);
  }
}

// Start first pick after team chosen
function pickNext() {
  if (draftOrder[currentPickIndex].team === userTeam) {
    togglePlayerButtons(true);
    messageDiv.textContent = `Your turn! Select a
