interface ChangeHistoryProps {
  history: Array<{
    id: string;
    content: string;
    timestamp: any;
  }>;
  loading: boolean;
}

const ChangeHistory: React.FC<ChangeHistoryProps> = ({ history, loading }) => {
  if (loading) return <p>Loading history...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-4">Change History</h2>
      {history.length === 0 ? (
        <p className="text-gray-500">No history available.</p>
      ) : (
        <ul className="space-y-4">
          {history.map((entry) => (
            <li key={entry.id} className="p-4 bg-gray-100 rounded shadow">
              <p className="text-sm text-gray-500">
                {new Date(entry.timestamp.toDate()).toLocaleString()}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: entry.content }}
                className="text-gray-700"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChangeHistory;
