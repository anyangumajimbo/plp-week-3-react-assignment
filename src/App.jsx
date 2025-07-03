import { useState } from 'react';
import './App.css';

// Import your components here
import Layout from './components/Layout'
 import Button from './components/Button';

 //No need to import Navbar and Footer directly since I have Layout component
//import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import Card from './components/Card';
import UserList from './components/UserList';


function App() {
  const [count, setCount] = useState(0);
return (
  
  <Layout>
  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg mb-4">
        Keep track of your tasks and stay productive!
      </p>

      <div className="flex items-center gap-4 my-4">
        <button
          onClick={() => setCount((count) => count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>

      <p className="text-gray-500 dark:text-gray-400 mt-4">
        Stay organized – start adding your tasks!
      </p>
      <TaskManager />

    </div>
  </div>

  {/* 🟢 Sample Cards Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="React Components"
          description="Build encapsulated UI pieces using JSX and props."
        />
        <Card
          title="Tailwind Styling"
          description="Style quickly using utility-first CSS classes for layouts, themes, and responsiveness."
        />
        <Card
          title="Reusable Design"
          description="Make UI scalable by turning UI patterns into flexible components."
        />
      </div>

      {/* API Placeholder */}
      <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">API Data</h2>
        <UserList />
      </div>
    </Layout>
  );
}

export default App; 