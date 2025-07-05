// src/App.tsx
import React from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import SecurityLog from './components/SecurityLog';
import DetectionEngine from './components/DetectionEngine';

const sampleLogs = [
  { time: '10:01 AM', message: 'Login from IP 192.168.1.2' },
  { time: '10:05 AM', message: 'Failed login attempt' },
  { time: '10:10 AM', message: 'Unauthorized access alert' }
];

function App() {
  return (
    <div>
      <WelcomeMessage />
      <SecurityLog logs={sampleLogs} />
      <DetectionEngine logs={sampleLogs} />
    </div>
  );
}

export default App;
