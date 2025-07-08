import ActivityFeed from './components/ActivityFeed';

import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import SecurityLog from "./components/SecurityLog";

const loginLogs = [
  { time: "10:00 AM", message: "Login from IP 192.168.1.2" },
  { time: "10:10 AM", message: "Login from IP 10.0.0.5" },
];

const alertLogs = [
  { time: "10:15 AM", message: "Brute-force attack detected" },
  { time: "10:17 AM", message: "Unauthorized access alert" },
];

const activityData = [
  { timestamp: '10:20 AM', activity: 'User login from IP 10.0.0.1' },
  { timestamp: '10:25 AM', activity: 'Malware scan completed' },
  { timestamp: '10:30 AM', activity: 'Threat blocked: Trojan.Agent' },
];


function App() {
  return (
    <>
      <WelcomeMessage username="Ashwin" />
      <SecurityLog title="Login Logs" logs={loginLogs} />
      <SecurityLog title="Alerts" logs={alertLogs} />
      <ActivityFeed activities={activityData} />
    </>
  );
}

export default App;
