import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import SecurityLog from './components/SecurityLog';

const sampleLogs = [
  { time: '10:01 AM', message: 'Login from IP 192.168.1.2' },
  { time: '10:05 AM', message: 'File uploaded to /secure_docs' },
  { time: '10:07 AM', message: 'Failed login attempt from 8.8.8.8' }
];

function App() {
  return (
    <div className="App">
      <WelcomeMessage name="Ashwin" />
      <SecurityLog logs={sampleLogs} />
    </div>
  );
}

export default App;
