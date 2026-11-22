import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { birthdayContent as content } from './data/birthdayContent';
import './styles.css';

function Photo({ src, alt, className = '', number = '01' }) {
  const [failed, setFailed] = useState(false);
  return <div className={`photo ${className}`}>
    {src && !failed ? <img src={src.startsWith('/') ? src : `/assets/photos/${src}`} alt={alt} onError={() => setFailed(true)} /> : <div className="photo-placeholder"><span className="photo-mark">✳</span><span>[ADD PHOTO {number}]</span></div>}
  </div>;
}

function Flower({ className = '' }) { return <div className={`flower ${className}`} aria-hidden="true"><span>✿</span><i>✿</i><b>✿</b></div>; }
function Camera() { return <div className="camera" aria-hidden="true"><div className="camera-top"/><div className="camera-lens"/><div className="camera-flash"/><span>✦</span></div>; }

function Opening({ onOpen, opened }) {
  return <section className="opening" aria-label="Birthday card cover">
    <div className="opening-grain" />
    <span className="cover-kicker">A LITTLE SURPRISE FOR</span>
    <h1>{content.recipient}</h1>
    <p className="cover-note">{content.coverNote}</p>
    <div className="cover-stage">
      <div className="paper-scrap scrap-left">a day<br/>to remember</div>
      <Camera />
      <div className={`envelope-wrap ${opened ? 'envelope-opened' : ''}`}>
        <div className="envelope-shadow" />
        <div className="envelope">
          <div className="envelope-back" />
          <div className="mini-card"><span>For my</span><strong>favorite<br/>person</strong><i>♥</i></div>
          <div className="envelope-front" />
          <div className="envelope-flap" />
          <button className="open-button" onClick={onOpen}><span>✦</span> {content.openingPrompt} <span>✦</span></button>
        </div>
      </div>
      <div className="bouquet" aria-hidden="true"><div className="bouquet-wrap"/><i>✿</i><b>✾</b><span>❀</span><em>✿</em><small>✽</small></div>
      <div className="paper-scrap scrap-right">with love<br/><b>♡</b></div>
    </div>
    <div className="cover-bottom">TURN A LITTLE PAGE <span>↓</span></div>
  </section>;
}

function Book({ opened }) {
  return <section className={`book-scene ${opened ? 'is-open' : ''}`} id="book">
    <div className="book-shadow" />
    <div className="rings" aria-hidden="true"><span/><span/></div>
    <div className="book-spine" />
    <article className="book-page left-page">
      <span className="page-number">A LITTLE CELEBRATION · {content.recipient.toUpperCase()}</span>
      <div className="page-sprig">✿　✧　✿</div>
      <h2>{content.birthdayNumber}</h2>
      <div className="year-badge">✦ &nbsp; TODAY IS ALL YOURS &nbsp; ✦</div>
      <div className="intro-copy">{content.introduction}</div>
      <div className="tiny-heart">♡</div>
      <div className="page-footer"><span>made with love</span><span>01</span></div>
    </article>
    <article className="book-page right-page">
      <div className="tape tape-top" />
      <div className="photo-frame opening-frame"><Photo src={content.openingPhoto} alt="A photograph for Pratyusha" number="01" /></div>
      <p className="photo-caption">{content.openingCaption}</p>
      <div className="sticker-star">✦</div><div className="sticker-flower">✿</div>
      <div className="page-footer"><span>our little story</span><span>02</span></div>
    </article>
  </section>;
}

function Memories() {
  return <section className="memories section-wrap">
    <div className="section-heading"><span className="eyebrow">THE DAYS I KEEP CLOSE</span><h2>A few of my <em>favorite</em> things</h2><p>Little pieces of time, tucked safely in these pages.</p></div>
    {content.memories.map((memory, index) => <article className={`memory-row row-${index + 1}`} key={memory.label}>
      <div className="memory-photo-wrap"><div className="tape memory-tape"/><div className="polaroid"><Photo src={memory.image} alt={memory.caption} number={`0${index + 2}`} /><div className="polaroid-caption">{memory.caption}</div></div><span className="doodle">✧</span></div>
      <div className="memory-copy"><span className="eyebrow">{memory.label}</span><h3>{index === 0 ? 'A moment, held still' : index === 1 ? 'The ordinary magic' : 'A little more us'}</h3><p>{memory.note}</p><span className="hand-heart">♡</span></div>
    </article>)}
  </section>;
}

function FilmStrip() {
  return <section className="film-section"><div className="film-title"><span>SNIPPETS OF US</span><h2>Life, in little frames</h2></div><div className="film-strip"><div className="sprockets"/>
    {content.filmPhotos.map((src, i) => <div className="film-frame" key={i}><Photo src={src} alt={`Film memory ${i + 1}`} number={`0${i + 5}`} /><span>✦</span></div>)}
    <div className="sprockets bottom"/></div><p className="film-caption">every little thing, worth remembering</p></section>;
}

function Letter() {
  return <section className="letter-section"><div className="letter-paper"><div className="letter-tape"/><span className="letter-date">A NOTE FOR YOUR BIRTHDAY</span><div className="letter-flower">✿</div><h2>Dear {content.recipient.split(' ')[0]},</h2><p>{content.letter}</p><p className="letter-signoff">{content.signOff}<br/><span>{content.signature}</span></p><div className="letter-seal">♥</div></div></section>;
}

function App() {
  const [opened, setOpened] = useState(false);
  const reveal = () => { setOpened(true); window.setTimeout(() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 350); };
  return <main><Opening onOpen={reveal} opened={opened}/><div className="experience"><div className="book-intro"><span className="eyebrow">A BOOK OF LITTLE THINGS</span></div><Book opened={opened}/><Memories/><FilmStrip/><Letter/><footer className="closing"><Flower/><p>Happy birthday,</p><h2>{content.recipient}</h2><span>♡</span></footer></div></main>;
}

createRoot(document.getElementById('root')).render(<App />);
