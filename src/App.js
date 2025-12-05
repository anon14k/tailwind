// src/App.js

import React from 'react';
import './styles.css';  // Import the styles.css file with Tailwind and customizations

function App() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="card">
        <p className="text-lg text-white">
          This is an example of a custom styled component using Tailwind CSS and React.
        </p>

        {/* Custom button with @apply */}
        <button className="btn-primary mt-6">Custom Button</button>

        <div className="mt-4 p-50 bg-gray-200 rounded-lg text-center">
          <p className="text-xl">This section uses custom spacing (p-128).</p>
        </div>
      </div>
    </div>
  );
}

export default App;
