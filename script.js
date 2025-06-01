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
  { name: "Tyler Scott", position: "OL", rank: 50 }
];

// Simplified positional needs for demo (you can expand as needed)
const teamNeeds = {
  "49ers": ["OL", "CB", "WR"],
  "Bears": ["QB", "WR", "DL"],
  "Bengals": ["OL", "CB", "S"],
  "Bills": ["WR", "CB", "DL"],
  "Broncos": ["QB", "LB", "WR"],
  "Browns": ["DL", "RB", "CB"],
  "Buccaneers": ["WR", "OL", "S"],
  "Cardinals": ["CB", "DL", "OL"],
  "Chargers": ["EDGE", "WR", "QB"],
  "Chiefs": ["OL", "S", "WR"],
  "Colts": ["QB", "OL", "LB"],
  "Commanders": ["CB", "DL", "WR"],
  "Cowboys": ["WR", "OL", "LB"],
  "Dolphins": ["QB", "WR", "DL"],
  "Eagles": ["OL", "CB", "S"],
  "Falcons": ["WR", "LB", "QB"],
  "Giants": ["CB", "OL", "RB"],
  "Jaguars": ["DL", "WR", "S"],
  "Jets": ["QB", "OL", "CB"],
  "Lions": ["WR", "LB", "DL"],
  "Packers": ["CB", "OL", "WR"],
  "Panthers": ["DL", "S", "QB"],
  "Patriots": ["OL", "WR", "LB"],
  "Raiders": ["WR", "CB", "DL"],
  "Rams": ["QB", "OL", "WR"],
  "Ravens": ["S", "DL", "LB"],
  "Saints": ["WR", "OL", "CB"],
  "Seahawks": ["QB", "DL", "WR"],
  "Steelers": ["LB", "OL", "CB"],
  "Texans": ["WR", "QB", "DL"],
  "Titans": ["OL", "RB", "CB"],
  "Vikings": ["CB", "WR", "S"],
};

let userTeam = "";
let userPicks = [];
let currentPickIndex = 0;
let draftOrder = [];
const totalRounds = 3;

function startDraft() {
  const select = document.getElementById("teamSelect");
  userTeam = select.value;
  if (!userTeam) {
    alert("Please select a team.");
    return;
  }

  // Reset state
  userPicks = [];
  currentPickIndex = 0;

  // Generate draft order (simple order: all teams per round)
  draftOrder = generateDraftOrder();

  // Reset player pool (deep copy to prevent mutation)
  resetPlayers();

  document.getElementById("team-selection").classList.add("hidden");
  document.getElementById("results").classList.add("hidden");
  document.getElementById("draft-section").classList.remove("hidden");

  runDraft();
}

function generateDraftOrder() {
  const teams = Object.keys(teamNeeds);
  const order = [];
  for (let round = 1; round <= totalRounds; round++) {
    for (const team of teams) {
      order.push({ team, round });
    }
  }
  return order;
}

let availablePlayers = [];

function resetPlayers() {
  availablePlayers = topPlayers.map(p => ({ ...p }));
}

function runDraft() {
  if (currentPickIndex >= draftOrder.length) {
    endDraft();
    return;
  }

  const { team, round } = draftOrder[currentPickIndex];
  document.getElementById("round-status").textContent = `Round ${round}`;
  document.getElementById("pick-status").textContent = `Pick ${currentPickIndex + 1} - ${team}`;

  // Check if this round has any user picks
  const picksInRound = draftOrder.filter(p => p.round === round);
  const userHasPickThisRound = picksInRound.some(p => p.team === userTeam);

  if (!userHasPickThisRound && roundHasUserPick(round)) {
    // If user has pick this round somewhere else, continue normal pick
    // (edge case, but just in case)
  }

  if (!userHasPickThisRound && team === userTeam) {
    // If user's team has no pick this round (shouldn't happen since team pick exists),
    // just simulate and continue
    simulatePick(team);
    currentPickIndex++;
    runDraft();
    return;
  }

  if (team !== userTeam) {
    // Simulate the pick for other teams
    simulatePick(team);
    currentPickIndex++;
    // If user's team has no pick
