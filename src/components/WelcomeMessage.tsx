const WelcomeMessage = ({ username }: { username: string }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
      <h2 className="text-xl font-semibold text-green-400">
        Welcome to CyberGuard, {username}!
      </h2>
    </div>
  );
};
