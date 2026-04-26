const poll = new Map();

// output helper
function print(msg) {
  document.getElementById("output").innerText = msg;
}

// Add option
function addOption(option) {
  if (!option || option.trim() === "") {
    return `Option cannot be empty`;
  }

  option = option.trim();

  if (poll.has(option)) {
    return `Option "${option}" already exists`;
  }

  poll.set(option, new Set());
  return `Option "${option}" added to the poll`;
}

// Vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}"`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}"`;
}

// Display results
function displayResults() {
  let result = "Poll Results:\n";

  for (const [option, voters] of poll) {
    result += `${option}: ${voters.size} votes\n`;
  }

  return result.trim();
}

// UI handlers (IMPORTANT FIX)
function handleAdd(option) {
  print(addOption(option));
}

function handleVote(option, voterId) {
  print(vote(option, voterId));
}

function showResults() {
  print(displayResults());
}

// preload required data
addOption("Turkey");
addOption("Morocco");
addOption("Egypt");

vote("Turkey", "user1");
vote("Turkey", "user2");
vote("Morocco", "user3");