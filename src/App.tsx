import React from "react";
import ActivityFeed from "./components/ActivityFeed";

const activityData = [
  { timestamp: "11:00 PM", activity: "System scan completed" },
  { timestamp: "11:05 PM", activity: "User logged in from IP 10.0.0.2" },
  { timestamp: "11:07 PM", activity: "Malware detected in /tmp" }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">🛡️ CyberGuard Dashboard</h1>
      <ActivityFeed activities={activityData} />
    </div>
  );
}

export default App;
