/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
/* NDG AutoDeck V22 - DESKTOP */
/* V22: Consolidated 22 slides, enhanced karaoke (opacity+scale+pulse), bigger images */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { images, logoSets, colors, crawlContent, timing, buildSlides, baseAnimations, imageClasses } from '../shared/content';

export default function NDGAutoDeckDesktop() {
  const [phase, setPhase] = useState('cosmos');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [crawlProgress, setCrawlProgress] = useState(0);
  const [readProgress, setReadProgress] = useState(0);
  const [logoSetIndex, setLogoSetIndex] = useState(0);
  const [logoFadeIn, setLogoFadeIn] = useState(true);
  const [controlsActive, setControlsActive] = useState(false);

  const slides = useMemo(() => buildSlides(), []);

  // V22: LAYOUT - BIGGER IMAGES
  const L = {
    footerH: '50px',
    topM: '15px',
    botM: '10px',
    maxW: '1400px',
    pad: '0 3rem',
    imgHero: '400px',
    imgLarge: '450px',
    imgMedium: '380px',
    imgSmall: '300px',
    imgSeated: '280px',
    logoH: '80px',
    logoCols: 3,
    logoMaxW: '800px',
  };

  // V22: Enhanced fonts
  const F = {
    hero: 'clamp(5rem, 10vw, 7rem)',
    heroSub: '2rem',
    main: 'clamp(3.5rem, 7vw, 5rem)',
    keyEmphasis: 'clamp(5rem, 9vw, 6rem)',
    slide: 'clamp(2.8rem, 5.5vw, 4rem)',
    svc: 'clamp(2.2rem, 4.5vw, 3rem)',
    bodyL: 'clamp(1.6rem, 3vw, 2rem)',
    body: 'clamp(1.4rem, 2.5vw, 1.8rem)',
    bodyS: 'clamp(1.2rem, 2.2vw, 1.5rem)',
    quote: 'clamp(1.5rem, 2.8vw, 1.9rem)',
    pre: 'clamp(1rem, 1.8vw, 1.3rem)',
    attr: 'clamp(1rem, 1.6vw, 1.2rem)',
    box: '1.25rem',
    ndg: 'clamp(1.5rem, 2.8vw, 1.9rem)',
    frost: 'clamp(3.5rem, 7vw, 5rem)',
  };

  const SP = { sec: '1rem', el: '0.7rem', box: '0.6rem', tight: '0.4rem' };

  // V22: STYLES - ZERO textShadow
  const S = {
    mainT: { fontSize: F.main, fontWeight: 800, letterSpacing: '0.06em', color: colors.gold, textShadow: 'none' },
    slideT: { fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em', color: colors.gold, textShadow: 'none' },
    svcT: { fontSize: F.svc, fontWeight: 800, letterSpacing: '0.04em', color: colors.gold, textShadow: 'none' },
    pre: { fontSize: F.pre, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: colors.blueLight, textShadow: 'none' },
    body: { fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, lineHeight: 1.6, color: colors.white, textShadow: 'none' },
    bodyL: { fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, lineHeight: 1.6, color: colors.white, textShadow: 'none' },
    bodyS: { fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, lineHeight: 1.6, color: colors.white, textShadow: 'none' },
    quote: { fontFamily: "'Cormorant Garamond', serif", fontSize: F.quote, fontStyle: 'italic', color: colors.gold, textShadow: 'none' },
    scripture: { fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontStyle: 'italic', lineHeight: 1.7, color: colors.white, padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', textShadow: 'none' },
    attr: { fontSize: F.attr, fontWeight: 700, letterSpacing: '0.12em', color: colors.blueLight, textShadow: 'none' },
    ndg: { fontFamily: "'Cormorant Garamond', serif", fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic', color: colors.gold, textShadow: 'none' },
    svcBox: { padding: '0.8rem 1rem', background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.35)', borderRadius: '4px', color: colors.gold, fontSize: F.box, fontWeight: 600, textAlign: 'center', textShadow: 'none' },
  };

  // V22: ENHANCED KARAOKE - Opacity + Scale + Pulse
  const RT = ({ text, style = {}, idx = 0, total = 1, brightColor = colors.gold, dimColor = colors.goldDim, isKeyEmphasis = false }) => {
    if (!text) return null;
    const start = (idx / total) * 100;
    const segmentProgress = Math.max(0, Math.min(1, (readProgress - start) / (100 / total)));
    const isRevealed = readProgress >= start;
    const isActive = readProgress >= start && readProgress < ((idx + 1) / total) * 100;
    const opacity = isRevealed ? Math.min(1, segmentProgress * 2) : 0;
    const scale = isRevealed ? 0.95 + (0.05 * Math.min(1, segmentProgress * 2)) : 0.95;
    const currentColor = isRevealed ? brightColor : dimColor;
    const shouldPulse = isKeyEmphasis && isActive && segmentProgress > 0.3 && segmentProgress < 0.7;
    return (
      <span style={{ ...style, color: currentColor, opacity, transform: `scale(${scale})`, display: 'inline-block', transition: `all ${timing.readingTransitionMs}ms ease`, animation: shouldPulse ? `pulse ${timing.pulseEffectMs}ms ease-in-out` : 'none' }}>
        {text}
      </span>
    );
  };

  const RTW = ({ text, style = {}, idx = 0, total = 1, isKeyEmphasis = false }) => (
    <RT text={text} style={style} idx={idx} total={total} brightColor={colors.white} dimColor={colors.whiteDim} isKeyEmphasis={isKeyEmphasis} />
  );

  const PB = ({ children, style = {}, idx = 0, total = 1 }) => {
    const start = (idx / total) * 100;
    const isRevealed = readProgress >= start;
    const isActive = readProgress >= start && readProgress < ((idx + 1) / total) * 100;
    return (
      <div style={{ ...style, opacity: isRevealed ? 1 : 0, transform: isActive ? 'scale(1.04)' : isRevealed ? 'scale(1)' : 'scale(0.9)', background: isActive ? 'rgba(251,191,36,0.12)' : style.background, borderColor: isActive ? 'rgba(251,191,36,0.6)' : undefined, transition: `all ${timing.blockPopDurationMs}ms ease` }}>
        {children}
      </div>
    );
  };

  // NAVIGATION
  const goTo = useCallback((i) => {
    if (i >= 0 && i < slides.length) { setCurrentSlide(i); setReadProgress(0); setIsPaused(true); setControlsActive(true); setTimeout(() => setControlsActive(false), 2000); }
  }, [slides.length]);
  const goBack = useCallback(() => { if (currentSlide > 0) goTo(currentSlide - 1); }, [currentSlide, goTo]);
  const goFwd = useCallback(() => { if (currentSlide < slides.length - 1) goTo(currentSlide + 1); }, [currentSlide, slides.length, goTo]);
  const togglePause = useCallback(() => { setIsPaused(p => !p); setControlsActive(true); setTimeout(() => setControlsActive(false), 2000); }, []);

  useEffect(() => {
    const kd = (e) => {
      if (phase !== 'deck') return;
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); goBack(); }
      else if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goFwd(); }
      else if (e.key === 'Escape' || e.key === 'p') { e.preventDefault(); togglePause(); }
    };
    window.addEventListener('keydown', kd);
    return () => window.removeEventListener('keydown', kd);
  }, [phase, goBack, goFwd, togglePause]);

  useEffect(() => {
    if (phase !== 'deck') return;
    const sl = slides[currentSlide];
    if (!sl || !sl.content.logos) { setLogoSetIndex(0); return; }
    setLogoSetIndex(0); setLogoFadeIn(true);
    const cycle = () => { setLogoFadeIn(false); setTimeout(() => { setLogoSetIndex(p => (p + 1) % logoSets.length); setLogoFadeIn(true); }, timing.logoFadeMs); };
    const t = setInterval(cycle, timing.logoCycleMs);
    return () => clearInterval(t);
  }, [phase, currentSlide, slides]);

  useEffect(() => {
    if (phase !== 'crawl') return;
    const interval = setInterval(() => {
      setCrawlProgress(p => {
        const next = p + crawlContent.speed;
        if (next >= crawlContent.transitionAt) { clearInterval(interval); setTimeout(() => setPhase('deck'), 500); return crawlContent.transitionAt; }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'deck' || isPaused) return;
    setReadProgress(0);
    const sl = slides[currentSlide];
    if (!sl) { setPhase('end'); return; }
    const start = Date.now();
    const dur = sl.duration;
    const t = setInterval(() => {
      const prog = Math.min(((Date.now() - start) / dur) * 100, 100);
      setReadProgress(prog);
      if (prog >= 100) { clearInterval(t); setTimeout(() => { if (currentSlide < slides.length - 1) setCurrentSlide(p => p + 1); else setPhase('end'); }, timing.absorptionPauseMs); }
    }, 50);
    return () => clearInterval(t);
  }, [phase, currentSlide, isPaused, slides]);

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');
    html,body{overflow:hidden!important;height:100%!important;width:100%!important;position:fixed!important;margin:0;padding:0}
    *{box-sizing:border-box}
    ${baseAnimations}
    ${imageClasses}
  `;

  const BG = () => (
    <>
      <div className="fixed inset-0" style={{ backgroundImage: `url(${images.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(0,0,0,0.2) 100%)', zIndex: 5 }} />
    </>
  );

  // COSMOS
  if (phase === 'cosmos') {
    return (
      <div className="h-screen w-screen relative overflow-hidden flex items-center justify-center" style={{ fontFamily: "'Cinzel', serif" }}>
        <style>{css}</style>
        <BG />
        <button onClick={() => { setPhase('crawl'); setCrawlProgress(0); }} style={{ padding: '1.5rem 4rem', background: 'rgba(5,18,36,0.5)', border: '2px solid rgba(254,218,74,0.5)', color: '#feda4a', fontFamily: "'Cinzel', serif", fontSize: '1.3rem', fontWeight: 600, letterSpacing: '0.18em', cursor: 'pointer', animation: 'pulseGlow 3s ease-in-out infinite', position: 'relative', zIndex: 10 }}>
          BEGIN YOUR JOURNEY
        </button>
        <p className="absolute bottom-5 text-sm" style={{ color: 'rgba(147,197,253,0.35)', letterSpacing: '0.1em' }}>© 2025 Noetic Dharma Group™</p>
      </div>
    );
  }

  // CRAWL
  if (phase === 'crawl') {
    const crawlTop = 100 - (crawlProgress * 3);
    const crawlCss = `.crawl-wrap{position:fixed;inset:0;overflow:hidden}.crawl-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,rgba(5,18,36,1) 0%,rgba(5,18,36,0.7) 8%,rgba(5,18,36,0.3) 15%,transparent 25%,transparent 70%,rgba(5,18,36,0.2) 85%,rgba(5,18,36,0.6) 100%);pointer-events:none;z-index:10}.crawl-content{position:absolute;left:50%;transform:translateX(-50%);width:78%;max-width:950px;text-align:center}.crawl-h{font-family:'Cinzel',serif;font-size:2.6rem;color:#fbbf24;font-weight:700;letter-spacing:0.08em;margin-bottom:1.8rem}.crawl-p{font-family:'Cinzel',serif;font-size:1.7rem;font-weight:500;line-height:1.5;margin-bottom:1.2rem;letter-spacing:0.02em}.crawl-gold{color:#fbbf24}.crawl-white{color:#fff}.crawl-large{font-size:2.1rem;font-weight:700;margin-bottom:1.5rem}.crawl-italic{font-style:italic}`;
    return (
      <div className="h-screen w-screen relative overflow-hidden" style={{ fontFamily: "'Cinzel', serif" }}>
        <style>{css + crawlCss}</style>
        <BG />
        <div className="crawl-wrap">
          <div className="crawl-content" style={{ top: `${crawlTop}%` }}>
            <p className="crawl-h">{crawlContent.header}</p>
            {crawlContent.paragraphs.map((p, i) => (<p key={i} className={`crawl-p ${p.style.includes('gold') ? 'crawl-gold' : 'crawl-white'} ${p.style.includes('large') ? 'crawl-large' : ''} ${p.style.includes('italic') ? 'crawl-italic' : ''}`}>{p.text}</p>))}
            <p className="crawl-h" style={{ marginTop: '1.8rem' }}>{crawlContent.footer}</p>
          </div>
        </div>
        <button onClick={() => { setPhase('deck'); setCurrentSlide(0); }} style={{ position: 'fixed', bottom: '18px', right: '18px', zIndex: 100, padding: '10px 20px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(251,191,36,0.4)', color: '#fbbf24', fontFamily: "'Cinzel', serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', cursor: 'pointer' }}>SKIP →</button>
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '3px', background: 'rgba(0,0,0,0.3)', zIndex: 100 }}><div style={{ height: '100%', width: `${crawlProgress}%`, background: 'linear-gradient(90deg, #fbbf24, #fff, #fbbf24)' }} /></div>
      </div>
    );
  }

  // END
  if (phase === 'end') {
    return (
      <div className="h-screen w-screen relative overflow-hidden flex items-center justify-center" style={{ fontFamily: "'Cinzel', serif" }}>
        <style>{css}</style>
        <BG />
        <div className="text-center" style={{ position: 'relative', zIndex: 10 }}>
          <h1 style={{ ...S.mainT, fontSize: F.hero }}>NOETIC DHARMA GROUP</h1>
          <p style={{ ...S.bodyL, marginTop: SP.el }}>The journey continues.</p>
          <a href="https://www.noeticdharma.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: SP.sec, padding: '1rem 2.5rem', border: `2px solid ${colors.gold}`, color: colors.gold, textDecoration: 'none', fontWeight: 600, letterSpacing: '0.1em', fontSize: '1.1rem' }}>VISIT WEBSITE</a>
        </div>
        <p className="absolute bottom-4" style={{ fontSize: '0.75rem', color: 'rgba(74,85,104,0.35)' }}>© 2025 Noetic Dharma Group™</p>
      </div>
    );
  }

  // DECK
  const sl = slides[currentSlide];
  const c = sl?.content || {};
  const cont = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: L.maxW, padding: L.pad, gap: SP.tight };

  const render = () => {
    switch (c.type) {
      case 'opener':
        return (
          <div style={cont}>
            <img src={images.socratesEpic} alt="" className="static-image" style={{ height: L.imgHero, objectFit: 'contain', marginBottom: SP.el, borderRadius: '50%' }} />
            <h1 style={{ ...S.mainT, fontSize: F.hero, marginBottom: '0.2rem' }}><RT text={c.title} idx={0} total={6} style={{ fontSize: F.hero, fontWeight: 800, letterSpacing: '0.06em' }} isKeyEmphasis={true} /></h1>
            <h2 style={{ fontSize: F.heroSub, fontWeight: 400, letterSpacing: '0.3em', marginBottom: SP.tight }}><RTW text={c.subtitle} idx={1} total={6} style={{ fontSize: F.heroSub }} brightColor={colors.blueLight} dimColor={colors.blueDim} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontStyle: 'italic' }}><RTW text={c.tagline} idx={2} total={6} /></p>
            <blockquote style={{ ...S.quote, marginTop: SP.el, maxWidth: '850px' }}><RT text={c.quote} idx={3} total={6} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.quote, fontStyle: 'italic' }} /></blockquote>
            <p style={{ fontSize: F.attr, fontWeight: 700, letterSpacing: '0.12em' }}><RTW text={c.attribution} idx={4} total={6} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <p style={{ fontSize: '1.2rem', letterSpacing: '0.12em', marginTop: SP.tight }}><RT text={c.website} idx={5} total={6} /></p>
          </div>
        );

      case 'socrates-intro':
        return (
          <div style={cont}>
            <img src={images.socratesContemplating} alt="" className="floating-image" style={{ height: L.imgMedium, objectFit: 'contain', marginBottom: SP.el }} />
            <p style={{ fontSize: F.pre, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}><RTW text={c.pretitle} idx={0} total={7} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.main, fontWeight: 800, letterSpacing: '0.06em' }}><RT text={c.title} idx={1} total={7} style={{ fontSize: F.main, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontSize: F.body }}><RTW text={c.subtitle} idx={2} total={7} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, whiteSpace: 'pre-line', marginTop: SP.tight }}><RTW text={c.text} idx={3} total={7} /></p>
            <blockquote style={{ ...S.quote, marginTop: SP.el }}><RT text={c.quote} idx={4} total={7} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.quote, fontStyle: 'italic' }} /></blockquote>
            <p style={{ fontSize: F.attr, fontWeight: 700, letterSpacing: '0.12em' }}><RTW text={c.quoteAttrib} idx={5} total={7} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, fontWeight: 700, marginTop: SP.el }}><RT text={c.conclusion} idx={6} total={7} style={{ fontSize: F.bodyL, fontWeight: 700 }} isKeyEmphasis={true} /></p>
          </div>
        );

      case 'method': {
        const t = 3 + c.bullets.length;
        return (
          <div style={cont}>
            <img src={images.socratesOrating} alt="" className="static-image" style={{ height: L.imgSmall, objectFit: 'contain', marginBottom: SP.el }} />
            <h2 style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL }}><RTW text={c.definition} idx={1} total={t} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%', maxWidth: '650px', marginTop: SP.tight }}>
              {c.bullets.map((b, i) => <PB key={i} style={S.svcBox} idx={2+i} total={t}>{b}</PB>)}
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic', marginTop: SP.sec }}><RT text={c.ndgStatement} idx={2+c.bullets.length} total={t} style={{ fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic' }} /></p>
          </div>
        );
      }

      case 'wisdom-turning':
        return (
          <div style={cont}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL }}><RTW text={c.line1} idx={0} total={5} /></p>
            <h2 style={{ fontSize: F.keyEmphasis, fontWeight: 800, letterSpacing: '0.06em', marginBottom: SP.sec }}><RT text={c.line2} idx={1} total={5} style={{ fontSize: F.keyEmphasis, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <div style={{ width: '60px', height: '2px', background: colors.gold, marginBottom: SP.sec }} />
            <p style={{ fontSize: F.pre, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}><RTW text={c.pretitle} idx={2} total={5} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h3 style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.title} idx={3} total={5} style={{ fontSize: F.slide, fontWeight: 800 }} isKeyEmphasis={true} /></h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL }}><RTW text={c.text} idx={4} total={5} /></p>
          </div>
        );

      case 'crisis-winter': {
        const t = 4 + c.items.length;
        return (
          <div style={cont}>
            <h2 style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%', maxWidth: '700px', marginTop: SP.tight }}>
              {c.items.map((it, i) => (
                <PB key={i} style={{ ...S.svcBox, display: 'flex', flexDirection: 'column', padding: '0.9rem' }} idx={1+i} total={t}>
                  <span style={{ color: colors.white, fontSize: F.body }}>{it.label}</span>
                  <span style={{ color: colors.red, fontWeight: 800, fontSize: F.bodyL }}>{it.state}</span>
                </PB>
              ))}
            </div>
            <div style={{ marginTop: SP.sec, width: '100%', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL }}><RTW text={c.winterLine1} idx={1+c.items.length} total={t} /></p>
              <h3 style={{ fontSize: F.keyEmphasis, fontWeight: 900, letterSpacing: '0.1em', color: colors.blue }}><RT text={c.winterLine2} idx={2+c.items.length} total={t} style={{ fontSize: F.keyEmphasis, fontWeight: 900 }} brightColor={colors.blue} dimColor={colors.blueDim} isKeyEmphasis={true} /></h3>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.slide, fontWeight: 800 }}><RT text={c.winterLine3} idx={3+c.items.length} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></p>
            </div>
          </div>
        );
      }

      case 'transformation': {
        const t = 2 + c.lines.length;
        return (
          <div style={cont}>
            <h2 style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            {c.lines.map((ln, i) => (<p key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, marginBottom: SP.tight }}><RTW text={ln} idx={1+i} total={t} /></p>))}
            {c.ndgAddition && (<p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic', marginTop: SP.el }}><RT text={c.ndgAddition} idx={1+c.lines.length} total={t} style={{ fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic' }} /></p>)}
          </div>
        );
      }

      case 'ai-revolution': {
        const t = 6 + c.impactItems.length + c.contrastPairs.length;
        let idx = 0;
        return (
          <div style={cont}>
            <p style={{ fontSize: F.pre, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}><RTW text={c.pretitle} idx={idx++} total={t} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.main, fontWeight: 800, letterSpacing: '0.06em' }}><RT text={c.title} idx={idx++} total={t} style={{ fontSize: F.main, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL }}><RTW text={c.text} idx={idx++} total={t} /></p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: SP.box, maxWidth: '700px', marginTop: SP.tight }}>
              {c.impactItems.map((it, i) => <PB key={i} style={{ ...S.svcBox, maxWidth: '150px', padding: '0.6rem 0.9rem' }} idx={idx + i} total={t}>{it}</PB>)}
            </div>
            {(() => { idx += c.impactItems.length; return null; })()}
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, fontWeight: 700, marginTop: SP.el }}><RTW text={c.amplified} idx={idx++} total={t} /></p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: SP.tight, marginTop: SP.tight }}>
              {c.contrastPairs.map((p, i) => {
                const pairIdx = idx + i;
                const active = readProgress >= (pairIdx/t)*100 && readProgress < ((pairIdx+1)/t)*100;
                const pastActive = readProgress >= ((pairIdx+1)/t)*100;
                return (
                  <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', transform: active ? 'scale(1.03)' : 'scale(1)', transition: 'all 0.3s ease' }}>
                    <span style={{ fontSize: F.body, fontWeight: 700, color: (active || pastActive) ? colors.gold : colors.goldDim, transition: 'color 0.25s ease' }}>{p[0]}</span>
                    <span style={{ fontSize: '1rem', color: 'rgba(100,116,139,0.4)' }}>↔</span>
                    <span style={{ fontSize: F.body, fontWeight: 700, color: (active || pastActive) ? colors.red : colors.redDim, transition: 'color 0.25s ease' }}>{p[1]}</span>
                  </div>
                );
              })}
            </div>
            {(() => { idx += c.contrastPairs.length; return null; })()}
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, fontWeight: 700, marginTop: SP.tight }}><RTW text={c.warning} idx={idx} total={t} /></p>
          </div>
        );
      }

      case 'ai-wisdom':
        return (
          <div style={cont}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL }}><RTW text={c.line1} idx={0} total={6} /></p>
            <h2 style={{ fontSize: F.keyEmphasis, fontWeight: 800, letterSpacing: '0.06em', marginBottom: SP.el }}><RT text={c.line2} idx={1} total={6} style={{ fontSize: F.keyEmphasis, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: SP.el, flexWrap: 'wrap' }}>
              <span style={{ fontSize: F.body, fontWeight: 700 }}><RT text={c.equation.left} idx={2} total={6} style={{ fontSize: F.body, fontWeight: 700 }} brightColor={colors.blueLight} dimColor={colors.blueDim} /></span>
              <span style={{ fontSize: F.main, color: colors.gold }}>{c.equation.plus}</span>
              <span style={{ fontSize: F.body, fontWeight: 700 }}><RT text={c.equation.right} idx={2} total={6} style={{ fontSize: F.body, fontWeight: 700 }} brightColor={colors.blueLight} dimColor={colors.blueDim} /></span>
            </div>
            <h3 style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.equation.result} idx={3} total={6} style={{ fontSize: F.slide, fontWeight: 800 }} /></h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, marginTop: SP.el }}><RTW text={c.urgency} idx={4} total={6} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, fontWeight: 600, color: colors.orange, marginTop: SP.tight }}><RT text={c.warning} idx={5} total={6} style={{ fontSize: F.bodyL, fontWeight: 600 }} brightColor={colors.orange} dimColor={colors.orangeDim} /></p>
          </div>
        );

      case 'scripture': {
        const t = c.dharmaLink ? 5 : 4;
        return (
          <div style={cont}>
            <p style={{ fontSize: F.pre, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}><RTW text={c.pretitle} idx={0} total={t} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.title} idx={1} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <blockquote style={S.scripture}><RTW text={c.quote} idx={2} total={t} /></blockquote>
            <p style={{ fontSize: F.attr, fontWeight: 700, letterSpacing: '0.12em' }}><RTW text={c.attribution} idx={3} total={t} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            {c.dharmaLink && (<p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontWeight: 600, marginTop: SP.tight }}><RT text={c.dharmaLink} idx={4} total={t} style={{ fontSize: F.body, fontWeight: 600 }} /></p>)}
          </div>
        );
      }

      case 'warriors-armor': {
        const t = 8 + c.armorItems.length;
        let idx = 0;
        return (
          <div style={cont}>
            <img src={images.stMichael} alt="" className="static-image" style={{ height: L.imgLarge, objectFit: 'contain', marginBottom: SP.el }} />
            <p style={{ fontSize: F.pre, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}><RTW text={c.pretitle} idx={idx++} total={t} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.svc, fontWeight: 800, letterSpacing: '0.04em' }}><RT text={c.title} idx={idx++} total={t} style={{ fontSize: F.svc, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontStyle: 'italic' }}><RTW text={c.subtitle} idx={idx++} total={t} /></p>
            <div style={{ width: '50px', height: '2px', background: colors.gold, margin: `${SP.tight} 0` }} />
            <h3 style={{ fontSize: F.body, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.armorTitle} idx={idx++} total={t} style={{ fontSize: F.body, fontWeight: 800 }} /></h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: SP.box, width: '100%', maxWidth: '700px', marginTop: SP.tight }}>
              {c.armorItems.map((item, i) => <PB key={i} style={{ ...S.svcBox, maxWidth: '100%', padding: '0.6rem' }} idx={idx + i} total={t}>{item}</PB>)}
            </div>
            {(() => { idx += c.armorItems.length; return null; })()}
            <blockquote style={{ ...S.scripture, marginTop: SP.el, maxWidth: '750px' }}><RTW text={c.scriptureQuote} idx={idx++} total={t} /></blockquote>
            <p style={{ fontSize: F.attr, fontWeight: 700, letterSpacing: '0.12em' }}><RTW text={c.scriptureAttrib} idx={idx++} total={t} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontWeight: 600, marginTop: SP.tight }}><RT text={c.dharmaLink} idx={idx++} total={t} style={{ fontSize: F.body, fontWeight: 600 }} isKeyEmphasis={true} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, fontWeight: 700, marginTop: SP.tight }}><RTW text={c.conclusion} idx={idx} total={t} /></p>
          </div>
        );
      }

      case 'credentials': {
        const logos = logoSets[logoSetIndex];
        return (
          <div style={{ ...cont, maxWidth: '1000px' }}>
            <p style={{ fontSize: F.pre, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}><RTW text={c.pretitle} idx={0} total={4} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.title} idx={1} total={4} style={{ fontSize: F.slide, fontWeight: 800 }} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, marginBottom: SP.tight }}><RTW text={c.credentialsIntro} idx={2} total={4} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic', marginBottom: SP.el }}><RT text={c.credentialsSub} idx={3} total={4} style={{ fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic' }} isKeyEmphasis={true} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${L.logoCols}, 1fr)`, gap: '0.8rem', padding: '1rem', background: 'rgba(0,0,0,0.35)', borderRadius: '8px', width: '100%', maxWidth: L.logoMaxW, opacity: logoFadeIn ? 1 : 0, transition: 'opacity 0.3s ease' }}>
              {logos.map((lg, i) => (<div key={i} className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem', background: 'rgba(255,255,255,0.95)', borderRadius: '5px', height: L.logoH }}><img src={`/images/logos/${lg}`} alt="" style={{ maxWidth: '85%', maxHeight: '55px', objectFit: 'contain' }} /></div>))}
            </div>
            <div style={{ display: 'flex', gap: '0.3rem', marginTop: SP.tight }}>{logoSets.map((_, i) => <div key={i} style={{ width: i === logoSetIndex ? '14px' : '5px', height: '5px', borderRadius: '3px', background: i === logoSetIndex ? colors.gold : 'rgba(255,255,255,0.2)', transition: 'all 0.3s ease' }} />)}</div>
          </div>
        );
      }

      case 'service': {
        const hasH = !!c.sectionTitle;
        const base = hasH ? 6 : 4;
        const t = base + c.items.length;
        let x = 0;
        return (
          <div style={cont}>
            {hasH && (<><h2 style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.sectionTitle} idx={x++} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></h2><p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontStyle: 'italic', marginBottom: SP.el }}><RTW text={c.sectionSub} idx={x++} total={t} /></p><div style={{ width: '50px', height: '2px', background: colors.gold, marginBottom: SP.el }} /></>)}
            <h3 style={{ fontSize: F.svc, fontWeight: 800, letterSpacing: '0.04em' }}><RT text={c.title} idx={x++} total={t} style={{ fontSize: F.svc, fontWeight: 800 }} /></h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.description} idx={x++} total={t} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, fontStyle: 'italic', marginBottom: SP.tight }}><RT text={c.tiein} idx={x++} total={t} style={{ fontSize: F.bodyS, fontStyle: 'italic' }} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: SP.box, width: '100%', maxWidth: '850px' }}>{c.items.map((it, i) => <PB key={i} style={{ ...S.svcBox, maxWidth: '100%' }} idx={x+i} total={t}>{it}</PB>)}</div>
            {c.wisdomTiein && (<p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, fontWeight: 600, color: colors.gold, marginTop: SP.el }}><RT text={c.wisdomTiein} idx={x + c.items.length} total={t} style={{ fontSize: F.bodyS, fontWeight: 600 }} /></p>)}
          </div>
        );
      }

      case 'service-dd': {
        const t = 4 + c.items.length;
        return (
          <div style={cont}>
            <img src={images.socratesWriting} alt="" className="floating-image" style={{ height: L.imgSmall, objectFit: 'contain', marginBottom: SP.el }} />
            <h3 style={{ fontSize: F.svc, fontWeight: 800, letterSpacing: '0.04em' }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.svc, fontWeight: 800 }} /></h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.description} idx={1} total={t} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, fontStyle: 'italic', marginBottom: SP.tight }}><RT text={c.tiein} idx={2} total={t} style={{ fontSize: F.bodyS, fontStyle: 'italic' }} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: SP.box, width: '100%', maxWidth: '850px' }}>{c.items.map((it, i) => <PB key={i} style={{ ...S.svcBox, maxWidth: '100%' }} idx={3+i} total={t}>{it}</PB>)}</div>
            {c.wisdomTiein && (<p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, fontWeight: 600, color: colors.gold, marginTop: SP.el }}><RT text={c.wisdomTiein} idx={3 + c.items.length} total={t} style={{ fontSize: F.bodyS, fontWeight: 600 }} /></p>)}
          </div>
        );
      }

      case 'services-summary': {
        const t = 1 + c.items.length;
        return (
          <div style={cont}>
            <img src={images.socratesSeated} alt="" className="floating-image" style={{ height: L.imgSeated, objectFit: 'contain', marginBottom: SP.el }} />
            <h2 style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: SP.box, width: '100%', maxWidth: '900px' }}>{c.items.map((it, i) => <PB key={i} style={{ ...S.svcBox, maxWidth: '100%', padding: '0.7rem' }} idx={1+i} total={t}>{it}</PB>)}</div>
          </div>
        );
      }

      case 'selectivity-principles': {
        const t = 8 + c.principleItems.length;
        let idx = 0;
        return (
          <div style={cont}>
            {c.lines.map((ln, i) => {
              const isGold = i === 1 || i === 2;
              return (<p key={i} style={{ fontSize: F.slide, fontWeight: isGold ? 800 : 600, marginBottom: SP.tight }}>{isGold ? (<RT text={ln} idx={idx++} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} isKeyEmphasis={true} />) : (<RTW text={ln} idx={idx++} total={t} style={{ fontSize: F.slide, fontWeight: 600 }} />)}</p>);
            })}
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, marginTop: SP.tight }}><RTW text={c.subtext} idx={idx++} total={t} /></p>
            <div style={{ width: '50px', height: '2px', background: colors.gold, margin: `${SP.el} 0` }} />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.discretionLine1} idx={idx++} total={t} /></p>
            <p style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.discretionLine2} idx={idx++} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></p>
            <div style={{ width: '50px', height: '2px', background: colors.gold, margin: `${SP.el} 0` }} />
            <h3 style={{ fontSize: F.body, fontWeight: 800, letterSpacing: '0.05em' }}><RT text={c.principlesTitle} idx={idx++} total={t} style={{ fontSize: F.body, fontWeight: 800 }} /></h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%', maxWidth: '700px', marginTop: SP.tight }}>{c.principleItems.map((it, i) => <PB key={i} style={{ ...S.svcBox, maxWidth: '100%', padding: '1rem', fontSize: F.body, fontWeight: 700 }} idx={idx+i} total={t}>{it}</PB>)}</div>
            {(() => { idx += c.principleItems.length; return null; })()}
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontStyle: 'italic', marginTop: SP.el }}><RTW text={c.principlesConclusion} idx={idx} total={t} /></p>
          </div>
        );
      }

      case 'quote-image':
        return (
          <div style={cont}>
            <img src={images.socratesReading} alt="" className="floating-image" style={{ height: L.imgMedium, objectFit: 'contain', marginBottom: SP.el }} />
            <blockquote style={{ ...S.quote, fontSize: F.bodyL }}><RT text={c.quote} idx={0} total={3} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, fontStyle: 'italic' }} /></blockquote>
            <p style={{ fontSize: F.attr, fontWeight: 700, letterSpacing: '0.12em' }}><RTW text={c.attribution} idx={1} total={3} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, fontWeight: 700, marginTop: SP.tight }}><RTW text={c.subtext} idx={2} total={3} /></p>
          </div>
        );

      case 'finale':
        return (
          <div style={cont}>
            <blockquote style={{ ...S.scripture, maxWidth: '800px' }}><RTW text={c.scriptureQuote} idx={0} total={12} /></blockquote>
            <p style={{ fontSize: F.attr, fontWeight: 700, letterSpacing: '0.12em', marginBottom: SP.el }}><RTW text={c.scriptureAttrib} idx={1} total={12} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.ctaWarning} idx={2} total={12} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyL, fontWeight: 700, color: colors.red, marginTop: SP.tight }}><RT text={c.ctaUrgency} idx={3} total={12} style={{ fontSize: F.bodyL, fontWeight: 700 }} brightColor={colors.red} dimColor={colors.redDim} /></p>
            <div style={{ width: '50px', height: '2px', background: colors.gold, margin: `${SP.el} 0` }} />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.ctaLine1} idx={4} total={12} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.ctaLine2} idx={5} total={12} /></p>
            <p style={{ fontSize: F.slide, fontWeight: 800, letterSpacing: '0.05em', marginTop: SP.el }}><RT text={c.ctaMain} idx={6} total={12} style={{ fontSize: F.slide, fontWeight: 800 }} /></p>
            <div style={{ width: '80px', height: '2px', background: colors.gold, margin: `${SP.sec} 0` }} />
            <img src={images.socratesHappy} alt="" className="static-image" style={{ height: L.imgSmall, objectFit: 'contain', marginBottom: SP.el }} />
            <p style={{ fontSize: F.pre, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}><RTW text={c.pretitle} idx={7} total={12} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.main, fontWeight: 800, letterSpacing: '0.06em' }}><RT text={c.title} idx={8} total={12} style={{ fontSize: F.main, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontStyle: 'italic' }}><RTW text={c.subtitle} idx={9} total={12} /></p>
            <blockquote style={{ ...S.quote, marginTop: SP.el }}><RT text={c.finalQuote} idx={10} total={12} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.quote, fontStyle: 'italic' }} /></blockquote>
            <p style={{ fontSize: F.attr, fontWeight: 700, letterSpacing: '0.12em' }}><RTW text={c.finalAttrib} idx={11} total={12} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
          </div>
        );

      default:
        return <p style={{ color: colors.white }}>Unknown slide type: {c.type}</p>;
    }
  };

  // FOOTER CONTROLS
  const cOp = controlsActive || isPaused ? 0.8 : 0.4;
  const cCol = controlsActive || isPaused ? colors.gold : 'rgba(251,191,36,0.6)';
  const btnS = { background: 'transparent', border: 'none', color: cCol, fontFamily: "'Cinzel', serif", fontSize: '14px', cursor: 'pointer', opacity: cOp, transition: 'all 0.3s ease', padding: '3px 6px' };
  const arrS = { padding: '3px 9px', background: 'rgba(0,0,0,0.25)', border: `1px solid rgba(251,191,36,${cOp * 0.3})`, borderRadius: '3px', color: cCol, fontFamily: "'Cinzel', serif", fontSize: '10px', cursor: 'pointer', opacity: cOp, transition: 'all 0.3s ease' };

  return (
    <div className="h-screen w-screen relative overflow-hidden" style={{ fontFamily: "'Cinzel', serif" }}>
      <style>{css}</style>
      <BG />
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center" style={{ paddingTop: L.topM, paddingBottom: `calc(${L.footerH} + ${L.botM})` }}>
        {render()}
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-center" style={{ height: L.footerH, background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)' }} onMouseEnter={() => setControlsActive(true)} onMouseLeave={() => !isPaused && setControlsActive(false)}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px' }}>
          <button onClick={togglePause} style={{ ...btnS, color: isPaused ? colors.gold : cCol }} aria-label={isPaused ? 'Play' : 'Pause'}>{isPaused ? '▶' : '❚❚'}</button>
          <button onClick={goBack} disabled={currentSlide === 0} style={{ ...arrS, color: currentSlide === 0 ? 'rgba(251,191,36,0.1)' : cCol }} aria-label="Previous slide">◀</button>
          <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>{slides.map((_, i) => (<button key={i} onClick={() => goTo(i)} style={{ width: i === currentSlide ? '8px' : '4px', height: i === currentSlide ? '8px' : '4px', borderRadius: '50%', border: 'none', cursor: 'pointer', background: i === currentSlide ? cCol : i < currentSlide ? `rgba(251,191,36,${cOp * 0.35})` : `rgba(147,197,253,${cOp * 0.25})`, transition: 'all 0.3s ease', opacity: cOp }} aria-label={`Go to slide ${i + 1}`} />))}</div>
          <button onClick={goFwd} disabled={currentSlide === slides.length - 1} style={{ ...arrS, color: currentSlide === slides.length - 1 ? 'rgba(251,191,36,0.1)' : cCol }} aria-label="Next slide">▶</button>
          <span style={{ fontFamily: 'monospace', fontSize: '9px', color: cCol, opacity: cOp }}>{currentSlide + 1}/{slides.length}</span>
        </div>
      </div>
      <p className="fixed bottom-1 right-2 z-20" style={{ fontSize: '7px', color: 'rgba(74,85,104,0.2)' }}>© 2025 Noetic Dharma Group™</p>
    </div>
  );
}
