type Log = {
  time: string;
  message: string;
};

type SecurityLogProps = {
  title: string;
  logs: Log[];
};

export default function SecurityLog({ title, logs }: SecurityLogProps) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <strong>{log.time}</strong>: {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
