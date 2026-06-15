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
};
 
export default function App() {
  const pdesc ="This is a p";
  const divDesc = "this is div";
  const articleDesc = "This is an article";
  const asideDesc = "This is an aside";

  return (
    <>
    <hgroup>
    <header>
      <h1>This a header</h1>
      <h6>This is a subtitle</h6>
    </header>
    </hgroup>
    <main>
    <p>
      <search>search</search>
      {pdesc}
    </p>
    <div>
      {divDesc}
    </div>
    <article>
      {articleDesc}
    </article>
    <aside>
      <h3>This is the sidebar</h3>
      <nav>
        <ul>
          <li><a href="/">Some link</a></li>
          <li><a href="/">Another link</a></li>
        </ul>
      </nav>
      {asideDesc}
    </aside>
    </main>
    <footer>
      <section><h3>This is a section</h3>
      <button>Button</button>
      </section>
    </footer>
    </>
  );
}
