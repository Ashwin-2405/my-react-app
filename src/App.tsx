// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import SecurityLog from './components/SecurityLog';
import DetectionEngine from './components/DetectionEngine';

const allMessages = [
  'Login from IP 192.168.1.2',
  'Failed login attempt',
  'Unauthorized access alert',
  'User logged out',
  'File accessed: confidential.pdf',
  'Brute-force attack detected',
  'Password change successful',
  'Unusual location login',
  'Login from IP 172.16.0.3'
];

function App() {
  const [logs, setLogs] = useState<{ time: string; message: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      const message = allMessages[Math.floor(Math.random() * allMessages.length)];
      setLogs(prev => [...prev.slice(-9), { time: now, message }]); // keep only last 10 logs
    }, 3000); // new log every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <WelcomeMessage />
      <SecurityLog logs={logs} />
      <DetectionEngine logs={logs} />
    </div>
  );
}

export default App;
