import React from 'react';

type Log = {
  time: string;
  message: string;
};

type Props = {
  logs: Log[];
};

const SecurityLog: React.FC<Props> = ({ logs }) => {
  return (
    <div>
      <h3>Security Logs</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <strong>{log.time}</strong>: {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecurityLog;
