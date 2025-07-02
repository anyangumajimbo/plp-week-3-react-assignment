import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setError('Failed to load users. Please try again.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-gray-500 dark:text-gray-400">Loading users...</p>;
  }

  if (error) {
    return <p className="text-red-600 dark:text-red-400">{error}</p>;
  }

  return (
    <ul className="space-y-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 border rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition"
        >
          <strong className="text-lg block">{user.name}</strong>
          <p className="text-sm text-gray-700 dark:text-gray-300">{user.email}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user.company.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
