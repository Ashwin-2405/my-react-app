import React from "react";

interface Activity {
  timestamp: string;
  activity: string;
}

interface Props {
  activities: Activity[];
}

const ActivityFeed: React.FC<Props> = ({ activities }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Activity Feed</h2>
      <ul className="space-y-2">
        {activities.map((act, idx) => (
          <li key={idx} className="border-b border-gray-700 pb-2">
            <span className="font-bold">{act.timestamp}:</span> {act.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
