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
      <h4>This is main</h4>
      <div>
    <p>
      <search>search</search>
      <blockquote>This is a quote
      </blockquote>
        <cite>This is a citation: https://www.merriam-webster.com/dictionary/link</cite>
    </p>
    </div>
    <article>
      {articleDesc}
    </article>
    </main>
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
    <footer>
      <section><h3>This is the footer</h3>
      <button>Button</button>
      </section>
    </footer>
    </>
  );
}
