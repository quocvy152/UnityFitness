const { SocketMQTT } = require('./mqtt');
SocketMQTT();

const express = require('express');
const app = express();

// API Routes
app.get('/api/match', (req, res) => {
  // Lấy thông tin chung về trận đấu
  const matchInfo = {
    id: 1,
    competition: 'US Open Cup',
    team1: 'Team A',
    team2: 'Team B',
    score: '1-2',
    time: '23:17',
    status: 'Live'
  };
  res.json(matchInfo);
});

// Lấy đội hình thi đấu
app.get('/api/match/lineup', (req, res) => {
  const lineup = {
    team1: ['Player A1', 'Player A2', 'Player A3'],
    team2: ['Player B1', 'Player B2', 'Player B3']
  };
  res.json(lineup);
});

// Lấy thống kê trận đấu
app.get('/api/match/stats', (req, res) => {
  const stats = {
    possession: '60-40',
    shots: '10-8',
    fouls: '5-7',
    yellow_card: '0-1',
    red_card: '0-1',
  };
  res.json(stats);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});