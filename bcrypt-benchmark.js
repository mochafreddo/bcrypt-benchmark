const bcrypt = require('bcrypt');

const testRounds = async (rounds) => {
  const startTime = Date.now();
  const hash = await bcrypt.hash('password123', rounds);
  const endTime = Date.now();
  const duration = endTime - startTime;
  console.log(`Rounds: ${rounds}, Duration: ${duration}ms`);
};

const findOptimalRounds = async () => {
  for (let rounds = 8; rounds <= 16; rounds++) {
    await testRounds(rounds);
  }
};

findOptimalRounds();
