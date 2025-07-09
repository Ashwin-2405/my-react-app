import React from "react";

interface Alert {
  level: string;
  description: string;
}

interface AlertListProps {
  alerts: Alert[];
}

const AlertList: React.FC<AlertListProps> = ({ alerts }) => {
  return (
    <div className="bg-red-900 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 text-red-300">Alerts</h2>
      <ul className="space-y-1">
        {alerts.map((alert, index) => (
          <li key={index} className="bg-red-800 p-2 rounded">
            <strong>{alert.level}:</strong> {alert.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertList;
