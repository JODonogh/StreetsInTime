import React, { useState } from 'react';
import './App.css';

// 1. Define our visual states (Simulating AI interpolation/decision paths)
const UI_THEMES = {
  calm: {
    background: '#e0f2f1',
    accent: '#00695c',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500', 
    description: 'AI Vision detected a calm mood. Adjusting UI to soft tones.'
  },
  energetic: {
    background: '#fff3e0',
    accent: '#d84315',
    image: 'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?w=500', 
    description: 'AI Vision detected high energy. Swapping to vibrant UI configurations.'
  }
};
 
export default function App() {
  // Start with the 'calm' state
  const [currentMood, setCurrentMood] = useState<'calm' | 'energetic'>('calm');
  const currentUI = UI_THEMES[currentMood];

  return (
    <div className="app-container" style={{ backgroundColor: currentUI.background }}>
      <header style={{ borderBottom: `2px solid ${currentUI.accent}` }}>
        <h1 style={{ color: currentUI.accent }}>Adaptive AI Interface</h1>
      </header>

      <main>
        <div className="image-frame" style={{ borderColor: currentUI.accent }}>
          {/* The image updates dynamically based on state */}
          <img src={currentUI.image} alt={currentMood} className="interpolated-image" />
        </div>

        <p className="status-text">{currentUI.description}</p>

        {/* Action Buttons to trigger the state change */}
        <div className="button-group">
          <button 
            className="action-btn"
            style={{ backgroundColor: currentMood === 'calm' ? currentUI.accent : '#ccc' }}
            onClick={() => setCurrentMood('calm')}
          >
            Trigger Calm State
          </button>
          
          <button 
            className="action-btn"
            style={{ backgroundColor: currentMood === 'energetic' ? currentUI.accent : '#ccc' }}
            onClick={() => setCurrentMood('energetic')}
          >
            Trigger Energetic State
          </button>
        </div>
      </main>
    </div>
  );
}
