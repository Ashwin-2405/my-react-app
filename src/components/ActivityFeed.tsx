import React from 'react';

interface Activity {
  timestamp: string;
  activity: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <div>
      <h2>📋 Activity Feed</h2>
      <ul>
        {activities.map((act, index) => (
          <li key={index}>
            <strong>{act.timestamp}:</strong> {act.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
