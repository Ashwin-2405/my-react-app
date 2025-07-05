// src/components/DetectionEngine.tsx
import React from 'react';

interface DetectionEngineProps {
  logs: { time: string; message: string }[];
}

const DetectionEngine: React.FC<DetectionEngineProps> = ({ logs }) => {
  const suspiciousKeywords = ['failed', 'unauthorized', 'alert', 'attack'];
  
  const detected = logs.filter(log =>
    suspiciousKeywords.some(keyword =>
      log.message.toLowerCase().includes(keyword)
    )
  );

  return (
    <div>
      <h3>🛡️ Threat Detection</h3>
      {detected.length === 0 ? (
        <p>✅ No threats detected.</p>
      ) : (
        <ul>
          {detected.map((log, index) => (
            <li key={index}>
              <strong>{log.time}</strong>: {log.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DetectionEngine;
