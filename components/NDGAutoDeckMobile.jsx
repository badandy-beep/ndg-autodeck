        <button onClick={() => { setPhase('deck'); setCurrentSlide(0); }} style={{ position: 'fixed', bottom: '15px', right: '15px', zIndex: 100, padding: '8px 16px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(251,191,36,0.4)', color: '#fbbf24', fontFamily: "'Cinzel', serif", fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>SKIP →</button>
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
        <div className="text-center" style={{ position: 'relative', zIndex: 10, padding: '1rem' }}>
          <h1 style={{ ...S.mainT, fontSize: F.hero }}>NOETIC DHARMA GROUP</h1>
          <p style={{ ...S.bodyL, marginTop: SP.el }}>The journey continues.</p>
          <a href="https://www.noeticdharma.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: SP.sec, padding: '0.8rem 1.5rem', border: `2px solid ${colors.gold}`, color: colors.gold, textDecoration: 'none', fontWeight: 600, letterSpacing: '0.08em', fontSize: '0.9rem' }}>VISIT WEBSITE</a>
        </div>
        <p className="absolute bottom-3" style={{ fontSize: '0.65rem', color: 'rgba(74,85,104,0.35)' }}>© 2025 Noetic Dharma Group™</p>
      </div>
    );
  }

  // DECK - Mobile slide rendering
  const sl = slides[currentSlide];
  const c = sl?.content || {};
  const cont = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%', maxWidth: '100%', padding: L.pad, gap: SP.tight, overflowY: 'auto', maxHeight: '100%' };

  const render = () => {
    switch (c.type) {
      case 'opener':
        return (
          <div style={cont}>
            <img src={images.socratesEpic} alt="" className="static-image" style={{ height: L.imgHero, objectFit: 'contain', marginBottom: SP.el, borderRadius: '50%' }} />
            <h1 style={{ ...S.mainT, fontSize: F.hero, marginBottom: '0.1rem' }}><RT text={c.title} idx={0} total={6} style={{ fontSize: F.hero, fontWeight: 800 }} isKeyEmphasis={true} /></h1>
            <h2 style={{ fontSize: F.heroSub, fontWeight: 400, letterSpacing: '0.2em', marginBottom: SP.tight }}><RTW text={c.subtitle} idx={1} total={6} brightColor={colors.blueLight} dimColor={colors.blueDim} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, fontStyle: 'italic' }}><RTW text={c.tagline} idx={2} total={6} /></p>
            <blockquote style={{ ...S.quote, marginTop: SP.el }}><RT text={c.quote} idx={3} total={6} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.quote, fontStyle: 'italic' }} /></blockquote>
            <p style={{ fontSize: F.attr }}><RTW text={c.attribution} idx={4} total={6} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
          </div>
        );

      case 'socrates-intro':
        return (
          <div style={cont}>
            <img src={images.socratesContemplating} alt="" className="floating-image" style={{ height: L.imgMedium, objectFit: 'contain', marginBottom: SP.el }} />
            <p style={{ fontSize: F.pre }}><RTW text={c.pretitle} idx={0} total={7} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.main, fontWeight: 800 }}><RT text={c.title} idx={1} total={7} style={{ fontSize: F.main, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontSize: F.bodyS }}><RTW text={c.subtitle} idx={2} total={7} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, whiteSpace: 'pre-line' }}><RTW text={c.text} idx={3} total={7} /></p>
            <blockquote style={{ ...S.quote }}><RT text={c.quote} idx={4} total={7} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.quote, fontStyle: 'italic' }} /></blockquote>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontWeight: 700, marginTop: SP.el }}><RT text={c.conclusion} idx={6} total={7} style={{ fontSize: F.body, fontWeight: 700 }} /></p>
          </div>
        );

      case 'method': {
        const t = 3 + c.bullets.length;
        return (
          <div style={cont}>
            <img src={images.socratesOrating} alt="" className="static-image" style={{ height: L.imgSmall, objectFit: 'contain', marginBottom: SP.el }} />
            <h2 style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.definition} idx={1} total={t} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%', marginTop: SP.tight }}>
              {c.bullets.map((b, i) => <PB key={i} style={S.svcBox} idx={2+i} total={t}>{b}</PB>)}
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic', marginTop: SP.el }}><RT text={c.ndgStatement} idx={2+c.bullets.length} total={t} style={{ fontSize: F.ndg }} /></p>
          </div>
        );
      }

      case 'wisdom-turning':
        return (
          <div style={cont}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.line1} idx={0} total={5} /></p>
            <h2 style={{ fontSize: F.keyEmphasis, fontWeight: 800, marginBottom: SP.el }}><RT text={c.line2} idx={1} total={5} style={{ fontSize: F.keyEmphasis, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <div style={{ width: '40px', height: '2px', background: colors.gold, marginBottom: SP.el }} />
            <p style={{ fontSize: F.pre }}><RTW text={c.pretitle} idx={2} total={5} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h3 style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.title} idx={3} total={5} style={{ fontSize: F.slide, fontWeight: 800 }} /></h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.text} idx={4} total={5} /></p>
          </div>
        );

      case 'crisis-winter': {
        const t = 4 + c.items.length;
        return (
          <div style={cont}>
            <h2 style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%', marginTop: SP.tight }}>
              {c.items.map((it, i) => (
                <PB key={i} style={{ ...S.svcBox, display: 'flex', flexDirection: 'column', padding: '0.6rem' }} idx={1+i} total={t}>
                  <span style={{ color: colors.white, fontSize: F.bodyS }}>{it.label}</span>
                  <span style={{ color: colors.red, fontWeight: 800, fontSize: F.body }}>{it.state}</span>
                </PB>
              ))}
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, marginTop: SP.el }}><RTW text={c.winterLine1} idx={1+c.items.length} total={t} /></p>
            <h3 style={{ fontSize: F.keyEmphasis, fontWeight: 900, color: colors.blue }}><RT text={c.winterLine2} idx={2+c.items.length} total={t} style={{ fontSize: F.keyEmphasis, fontWeight: 900 }} brightColor={colors.blue} dimColor={colors.blueDim} isKeyEmphasis={true} /></h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.slide, fontWeight: 800 }}><RT text={c.winterLine3} idx={3+c.items.length} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></p>
          </div>
        );
      }

      case 'transformation': {
        const t = 2 + c.lines.length;
        return (
          <div style={cont}>
            <h2 style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            {c.lines.map((ln, i) => (<p key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, marginBottom: SP.tight }}><RTW text={ln} idx={1+i} total={t} /></p>))}
            {c.ndgAddition && (<p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic', marginTop: SP.el }}><RT text={c.ndgAddition} idx={1+c.lines.length} total={t} /></p>)}
          </div>
        );
      }

      case 'ai-revolution': {
        const t = 5 + c.impactItems.length;
        let idx = 0;
        return (
          <div style={cont}>
            <p style={{ fontSize: F.pre }}><RTW text={c.pretitle} idx={idx++} total={t} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.main, fontWeight: 800 }}><RT text={c.title} idx={idx++} total={t} style={{ fontSize: F.main, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.text} idx={idx++} total={t} /></p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: SP.box, width: '100%', marginTop: SP.tight }}>
              {c.impactItems.map((it, i) => <PB key={i} style={{ ...S.svcBox, padding: '0.4rem 0.6rem', fontSize: F.bodyS }} idx={idx + i} total={t}>{it}</PB>)}
            </div>
            {(() => { idx += c.impactItems.length; return null; })()}
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontWeight: 700, marginTop: SP.el }}><RTW text={c.amplified} idx={idx++} total={t} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontWeight: 700 }}><RTW text={c.warning} idx={idx} total={t} /></p>
          </div>
        );
      }

      case 'ai-wisdom':
        return (
          <div style={cont}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body }}><RTW text={c.line1} idx={0} total={6} /></p>
            <h2 style={{ fontSize: F.keyEmphasis, fontWeight: 800, marginBottom: SP.el }}><RT text={c.line2} idx={1} total={6} style={{ fontSize: F.keyEmphasis, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <h3 style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.equation.result} idx={3} total={6} style={{ fontSize: F.slide, fontWeight: 800 }} /></h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, marginTop: SP.el }}><RTW text={c.urgency} idx={4} total={6} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontWeight: 600, color: colors.orange }}><RT text={c.warning} idx={5} total={6} brightColor={colors.orange} dimColor={colors.orangeDim} /></p>
          </div>
        );

      case 'scripture':
        return (
          <div style={cont}>
            <p style={{ fontSize: F.pre }}><RTW text={c.pretitle} idx={0} total={4} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.title} idx={1} total={4} style={{ fontSize: F.slide, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <blockquote style={S.scripture}><RTW text={c.quote} idx={2} total={4} /></blockquote>
            <p style={{ fontSize: F.attr }}><RTW text={c.attribution} idx={3} total={4} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
          </div>
        );

      case 'warriors-armor': {
        const t = 6 + c.armorItems.length;
        let idx = 0;
        return (
          <div style={cont}>
            <img src={images.stMichael} alt="" className="static-image" style={{ height: L.imgLarge, objectFit: 'contain', marginBottom: SP.el }} />
            <h2 style={{ fontSize: F.svc, fontWeight: 800 }}><RT text={c.title} idx={idx++} total={t} style={{ fontSize: F.svc, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, fontStyle: 'italic' }}><RTW text={c.subtitle} idx={idx++} total={t} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%', marginTop: SP.tight }}>
              {c.armorItems.map((item, i) => <PB key={i} style={{ ...S.svcBox, padding: '0.4rem', fontSize: F.bodyS }} idx={idx + i} total={t}>{item}</PB>)}
            </div>
            {(() => { idx += c.armorItems.length; return null; })()}
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, fontWeight: 600, marginTop: SP.el }}><RT text={c.dharmaLink} idx={idx++} total={t} isKeyEmphasis={true} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontWeight: 700 }}><RTW text={c.conclusion} idx={idx} total={t} /></p>
          </div>
        );
      }

      case 'credentials': {
        const logos = logoSets[logoSetIndex];
        return (
          <div style={cont}>
            <p style={{ fontSize: F.pre }}><RTW text={c.pretitle} idx={0} total={4} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <h2 style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.title} idx={1} total={4} style={{ fontSize: F.slide, fontWeight: 800 }} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS }}><RTW text={c.credentialsIntro} idx={2} total={4} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.ndg, fontWeight: 600, fontStyle: 'italic', marginBottom: SP.el }}><RT text={c.credentialsSub} idx={3} total={4} isKeyEmphasis={true} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${L.logoCols}, 1fr)`, gap: '0.5rem', padding: '0.7rem', background: 'rgba(0,0,0,0.35)', borderRadius: '6px', width: '100%', opacity: logoFadeIn ? 1 : 0, transition: 'opacity 0.3s ease' }}>
              {logos.map((lg, i) => (<div key={i} className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', background: 'rgba(255,255,255,0.95)', borderRadius: '4px', height: L.logoH }}><img src={`/images/logos/${lg}`} alt="" style={{ maxWidth: '90%', maxHeight: '40px', objectFit: 'contain' }} /></div>))}
            </div>
          </div>
        );
      }

      case 'service': {
        const hasH = !!c.sectionTitle;
        const t = (hasH ? 4 : 3) + c.items.length;
        let x = 0;
        return (
          <div style={cont}>
            {hasH && (<><h2 style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.sectionTitle} idx={x++} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></h2><div style={{ width: '40px', height: '2px', background: colors.gold, marginBottom: SP.el }} /></>)}
            <h3 style={{ fontSize: F.svc, fontWeight: 800 }}><RT text={c.title} idx={x++} total={t} style={{ fontSize: F.svc, fontWeight: 800 }} /></h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS }}><RTW text={c.description} idx={x++} total={t} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%', marginTop: SP.tight }}>{c.items.map((it, i) => <PB key={i} style={{ ...S.svcBox, fontSize: F.bodyS }} idx={x+i} total={t}>{it}</PB>)}</div>
            {c.wisdomTiein && (<p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, fontWeight: 600, color: colors.gold, marginTop: SP.el }}><RT text={c.wisdomTiein} idx={x + c.items.length} total={t} /></p>)}
          </div>
        );
      }

      case 'service-dd': {
        const t = 3 + c.items.length;
        return (
          <div style={cont}>
            <img src={images.socratesWriting} alt="" className="floating-image" style={{ height: L.imgSmall, objectFit: 'contain', marginBottom: SP.el }} />
            <h3 style={{ fontSize: F.svc, fontWeight: 800 }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.svc, fontWeight: 800 }} /></h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS }}><RTW text={c.description} idx={1} total={t} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%', marginTop: SP.tight }}>{c.items.map((it, i) => <PB key={i} style={{ ...S.svcBox, fontSize: F.bodyS }} idx={2+i} total={t}>{it}</PB>)}</div>
          </div>
        );
      }

      case 'services-summary': {
        const t = 1 + c.items.length;
        return (
          <div style={cont}>
            <img src={images.socratesSeated} alt="" className="floating-image" style={{ height: L.imgSeated, objectFit: 'contain', marginBottom: SP.el }} />
            <h2 style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.title} idx={0} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%' }}>{c.items.map((it, i) => <PB key={i} style={{ ...S.svcBox, fontSize: F.bodyS }} idx={1+i} total={t}>{it}</PB>)}</div>
          </div>
        );
      }

      case 'selectivity-principles': {
        const t = 6 + c.principleItems.length;
        let idx = 0;
        return (
          <div style={cont}>
            {c.lines.map((ln, i) => {
              const isGold = i === 1 || i === 2;
              return (<p key={i} style={{ fontSize: F.slide, fontWeight: isGold ? 800 : 600, marginBottom: SP.tight }}>{isGold ? (<RT text={ln} idx={idx++} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} isKeyEmphasis={true} />) : (<RTW text={ln} idx={idx++} total={t} />)}</p>);
            })}
            <div style={{ width: '40px', height: '2px', background: colors.gold, margin: `${SP.el} 0` }} />
            <p style={{ fontSize: F.slide, fontWeight: 800 }}><RT text={c.discretionLine2} idx={idx++} total={t} style={{ fontSize: F.slide, fontWeight: 800 }} /></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: SP.box, width: '100%', marginTop: SP.el }}>{c.principleItems.map((it, i) => <PB key={i} style={{ ...S.svcBox, fontSize: F.bodyS }} idx={idx+i} total={t}>{it}</PB>)}</div>
          </div>
        );
      }

      case 'quote-image':
        return (
          <div style={cont}>
            <img src={images.socratesReading} alt="" className="floating-image" style={{ height: L.imgMedium, objectFit: 'contain', marginBottom: SP.el }} />
            <blockquote style={{ ...S.quote }}><RT text={c.quote} idx={0} total={3} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontStyle: 'italic' }} /></blockquote>
            <p style={{ fontSize: F.attr }}><RTW text={c.attribution} idx={1} total={3} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontWeight: 700 }}><RTW text={c.subtext} idx={2} total={3} /></p>
          </div>
        );

      case 'finale':
        return (
          <div style={cont}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.body, fontWeight: 700, color: colors.red }}><RT text={c.ctaUrgency} idx={0} total={8} brightColor={colors.red} dimColor={colors.redDim} /></p>
            <p style={{ fontSize: F.slide, fontWeight: 800, marginTop: SP.el }}><RT text={c.ctaMain} idx={1} total={8} style={{ fontSize: F.slide, fontWeight: 800 }} /></p>
            <div style={{ width: '60px', height: '2px', background: colors.gold, margin: `${SP.el} 0` }} />
            <img src={images.socratesHappy} alt="" className="static-image" style={{ height: L.imgSmall, objectFit: 'contain', marginBottom: SP.el }} />
            <h2 style={{ fontSize: F.main, fontWeight: 800 }}><RT text={c.title} idx={4} total={8} style={{ fontSize: F.main, fontWeight: 800 }} isKeyEmphasis={true} /></h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.bodyS, fontStyle: 'italic' }}><RTW text={c.subtitle} idx={5} total={8} /></p>
            <blockquote style={{ ...S.quote, marginTop: SP.el }}><RT text={c.finalQuote} idx={6} total={8} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: F.quote, fontStyle: 'italic' }} /></blockquote>
            <p style={{ fontSize: F.attr }}><RTW text={c.finalAttrib} idx={7} total={8} brightColor={colors.blueLight} dimColor={colors.blueDim} /></p>
          </div>
        );

      default:
        return <p style={{ color: colors.white }}>Unknown slide type: {c.type}</p>;
    }
  };

  // FOOTER CONTROLS (larger for touch)
  const cOp = controlsActive || isPaused ? 0.9 : 0.5;
  const cCol = controlsActive || isPaused ? colors.gold : 'rgba(251,191,36,0.6)';
  const btnS = { background: 'transparent', border: 'none', color: cCol, fontFamily: "'Cinzel', serif", fontSize: '18px', cursor: 'pointer', opacity: cOp, padding: '8px 12px', minWidth: '44px', minHeight: '44px' };
  const arrS = { padding: '8px 14px', background: 'rgba(0,0,0,0.3)', border: `1px solid rgba(251,191,36,${cOp * 0.4})`, borderRadius: '4px', color: cCol, fontFamily: "'Cinzel', serif", fontSize: '14px', cursor: 'pointer', opacity: cOp, minWidth: '44px', minHeight: '44px' };

  return (
    <div className="h-screen w-screen relative overflow-hidden" style={{ fontFamily: "'Cinzel', serif" }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <style>{css}</style>
      <BG />
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center" style={{ paddingTop: L.topM, paddingBottom: `calc(${L.footerH} + ${L.botM})`, paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        {render()}
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-center" style={{ height: L.footerH, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)', paddingBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <button onClick={togglePause} style={{ ...btnS, color: isPaused ? colors.gold : cCol }} aria-label={isPaused ? 'Play' : 'Pause'}>{isPaused ? '▶' : '❚❚'}</button>
          <button onClick={goBack} disabled={currentSlide === 0} style={{ ...arrS, opacity: currentSlide === 0 ? 0.2 : cOp }} aria-label="Previous slide">◀</button>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', color: cCol, opacity: cOp, minWidth: '40px', textAlign: 'center' }}>{currentSlide + 1}/{slides.length}</span>
          <button onClick={goFwd} disabled={currentSlide === slides.length - 1} style={{ ...arrS, opacity: currentSlide === slides.length - 1 ? 0.2 : cOp }} aria-label="Next slide">▶</button>
        </div>
      </div>
      <p className="fixed bottom-1 right-2 z-20" style={{ fontSize: '6px', color: 'rgba(74,85,104,0.2)' }}>© 2025 Noetic Dharma Group™</p>
    </div>
  );
}
