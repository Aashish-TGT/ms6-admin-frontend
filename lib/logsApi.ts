export const fetchLogs = async () => {
  return [
    {
      id: '1',
      timestamp: '2025-07-02 14:30:00',
      type: 'info',
      message: 'System started successfully.',
    },
    {
      id: '2',
      timestamp: '2025-07-02 14:35:00',
      type: 'error',
      message: 'Database connection failed.',
    },
    {
      id: '3',
      timestamp: '2025-07-02 14:40:00',
      type: 'warning',
      message: 'Memory usage is high.',
    },
  ];
};
