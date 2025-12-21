/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
/* NDG AutoDeck V22 - SHARED CONTENT */
/* V22: Consolidated 22 slides, enhanced karaoke, full mobile support */

export const images = {
  background: '/images/1279.jpg',
  socratesEpic: '/images/socrates-epic.png',
  socratesSeated: '/images/socrates-seated.png',
  socratesContemplating: '/images/herocontemplating.png',
  socratesOrating: '/images/orating.png',
  socratesWriting: '/images/writing.png',
  socratesReading: '/images/reading.png',
  stMichael: '/images/stmichael.png',
  socratesHappy: '/images/thumbsup.png',
};

export const logoSets = [
  ['goldman-sachs.png', 'mckinsey.png', 'credit-suisse.png', 'societe-generale.png', 'bessemer.png', 'oak-investment.png'],
  ['lockheed-martin.png', 'darpa.png', 'usaf.png', 'navy-seals.png', 'white-house.png', 'nsc.png'],
  ['llnl.png', 'los-alamos.png', 'berkeley-eecs.png', 'l3-tech.png', 'honeywell.png', 'san-diego.png'],
  ['discovery.png', 'nbc-universal.png', 'sony.png', 'warner-music.png', 'directv.png', 'castle-rock.png'],
  ['microsoft.png', 'procter-gamble.png', 'omnicom.png', 'cosan.png', 'westlake.png', 'itt-sheraton.png'],
  ['denham-capital.png', 'usc-marshall.png', 'lockheed-martin.png', 'mckinsey.png', 'darpa.png', 'llnl.png']
];

// V22: Clean colors - NO textShadow blur
export const colors = {
  gold: '#fbbf24',
  goldDim: '#8b6914',       // Dimmer for better contrast on reveal
  white: '#ffffff',
  whiteDim: '#6b7280',      // Dimmer for better contrast
  red: '#ef4444',
  redDim: '#991b1b',
  orange: '#f59e0b',
  orangeDim: '#92400e',
  blue: '#60a5fa',
  blueLight: '#93c5fd',
  blueDim: '#1e40af',
};

// V22: Crawl unchanged
export const crawlContent = {
  header: 'IN THE ANNALS OF WISDOM...',
  paragraphs: [
    { text: 'Throughout history, in every age of crisis, there have emerged those who see what others cannot see—who discern truth when the world is blinded by chaos.', style: 'gold' },
    { text: 'The philosophers of Athens. The architects of nations. The guardians of civilization when institutions crumble.', style: 'gold' },
    { text: 'We are now in such an age.', style: 'white-large' },
    { text: 'The signs are unmistakable: The old order fractures. Powers wrestle in darkness. The future itself hangs in the balance.', style: 'gold' },
    { text: 'Into this turning has emerged a different kind of force.', style: 'gold' },
    { text: 'Not politicians. Not prophets. Not rebels.', style: 'white' },
    { text: 'Something rarer: Practitioners of ancient wisdom, armed with modern capability.', style: 'gold' },
    { text: 'They call it NOETIC DHARMA GROUP.', style: 'white-large' },
    { text: 'Their method is Socratic. Their execution, surgical. Their conviction, unwavering.', style: 'gold' },
    { text: 'They do not seek. They are sought. And they choose carefully.', style: 'white-large' },
    { text: 'This is their story...', style: 'white-italic' },
  ],
  footer: '★ ★ ★ ★',
  speed: 0.18,
  transitionAt: 100,
};

// V22: Enhanced timing for karaoke
export const timing = {
  wordsPerMinute: 240,
  absorptionPauseMs: 1500,        // Slightly longer pause
  minSlideDurationMs: 6000,       // Minimum 6s per slide
  blockPopDurationMs: 400,
  readingTransitionMs: 500,       // Slower transition for smoother karaoke
  pulseEffectMs: 300,             // Pulse animation duration
  logoCycleMs: 2500,              // Faster logo cycling
  logoFadeMs: 300,
};

export const msPerWord = 60000 / timing.wordsPerMinute;

// ═══════════════════════════════════════════════════════════════════════════
// V22: CONSOLIDATED 22 SLIDES
// Merged per specification for improved flow and emotional arc
// ═══════════════════════════════════════════════════════════════════════════

export const slideDefinitions = [
  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 1: OPENER
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'opener',
    content: {
      type: 'opener',
      title: 'NOETIC DHARMA',
      subtitle: 'GROUP',
      tagline: 'Wisdom for an Unstable Age',
      quote: '"The secret of change is to focus all of your energy not on fighting the old, but on building the new."',
      attribution: '— SOCRATES',
      website: 'www.noeticdharma.com'
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 2: SOCRATES INTRO (V21 Slide 2 + method tie-in)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'socrates-intro',
    content: {
      type: 'socrates-intro',
      pretitle: 'Twenty-Five Centuries Ago',
      title: 'SOCRATES',
      subtitle: '470 – 399 BCE',
      text: 'A man taught the world how to think. He asked questions others were afraid to ask.\nAnd for this... they killed him.',
      quote: '"The unexamined life is not worth living."',
      quoteAttrib: '— SOCRATES',
      conclusion: 'But his method survived. And we carry it forward.',
      keyEmphasis: ['SOCRATES', 'survived']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 3: SOCRATIC METHOD
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'method',
    content: {
      type: 'method',
      title: 'THE SOCRATIC METHOD',
      definition: 'Rigorous inquiry that reveals hidden assumptions, clarifies stakes, and enables better decisions.',
      bullets: ['Question assumptions', 'Expose contradictions', 'Seek first principles', 'Test every thesis'],
      ndgStatement: 'Noetic Dharma Group incorporates the Socratic Method into every engagement.',
      keyEmphasis: ['SOCRATIC METHOD']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 4: WISDOM / FOURTH TURNING (V21 Slides 4-5 merged)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wisdom-turning',
    content: {
      type: 'wisdom-turning',
      line1: 'And today — at this precise moment in history —',
      line2: 'HIS WISDOM HAS NEVER BEEN MORE ESSENTIAL.',
      pretitle: 'Every 80-120 Years',
      title: 'THE FOURTH TURNING',
      text: 'A moment when institutions crumble, old assumptions fail, and the future is rewritten by those who see clearly.',
      keyEmphasis: ['WISDOM', 'FOURTH TURNING']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 5: WE ARE IN IT NOW / WINTER IS HERE (V21 Slides 6-7 merged)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'crisis-winter',
    content: {
      type: 'crisis-winter',
      title: 'WE ARE IN IT NOW',
      items: [
        { label: 'Institutional Trust', state: 'COLLAPSING' },
        { label: 'Economic Systems', state: 'STRAINING' },
        { label: 'Political Structures', state: 'FRACTURING' },
        { label: 'Social Fabric', state: 'TEARING' }
      ],
      winterLine1: 'History is seasonal.',
      winterLine2: 'WINTER IS HERE.',
      winterLine3: 'The Fourth Turning is now.',
      keyEmphasis: ['WINTER IS HERE']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 6: WINTER BRINGS TRANSFORMATION
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'transformation',
    content: {
      type: 'transformation',
      title: 'BUT WINTER BRINGS TRANSFORMATION',
      lines: [
        'New leaders emerge.',
        'New institutions are built.',
        'The question is not whether change will come.',
        'It is who will shape what follows.'
      ],
      ndgAddition: 'Noetic Dharma Group builds the new.',
      keyEmphasis: ['TRANSFORMATION']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 7: AI REVOLUTION (V21 Slides 9-10 merged)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'ai-revolution',
    content: {
      type: 'ai-revolution',
      pretitle: 'For the First Time in Human History',
      title: 'THE AI REVOLUTION',
      text: 'A meta-technology that amplifies everything.',
      impactItems: ['Our jobs', 'Our culture', 'Our meaning', 'Our relationships', 'Our creativity', 'Our truth'],
      amplified: 'Everything will be transformed.',
      contrastPairs: [['Opportunity', 'Risk'], ['Clarity', 'Confusion'], ['Power', 'Danger']],
      warning: 'Every decision more consequential.',
      keyEmphasis: ['AI REVOLUTION']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 8: WISDOM DETERMINES USE (V21 Slides 11-12 merged)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'ai-wisdom',
    content: {
      type: 'ai-wisdom',
      line1: 'AI amplifies capability.',
      line2: 'WISDOM DETERMINES ITS USE.',
      equation: {
        left: 'Fourth Turning',
        plus: '+',
        right: 'AI Revolution',
        equals: '=',
        result: 'DEMANDS A DIFFERENT KIND OF PARTNER'
      },
      urgency: 'Those who navigate wisely will thrive. Those who don\'t will be left behind.',
      warning: 'The window is measured in months, not years.',
      keyEmphasis: ['WISDOM']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 9: NATURE OF THE STRUGGLE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'battle',
    content: {
      type: 'scripture',
      pretitle: 'The Scripture Warns',
      title: 'THE NATURE OF THE STRUGGLE',
      quote: '"For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places."',
      attribution: '— EPHESIANS 6:12',
      keyEmphasis: ['STRUGGLE']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 10: WARRIORS OF LIGHT / FULL ARMOR (V21 Slides 14-16 merged)
  // St. Michael dominant, armor list, dharma tie-in
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'warriors-armor',
    content: {
      type: 'warriors-armor',
      pretitle: 'In Every Generation',
      title: 'WARRIORS OF LIGHT',
      subtitle: 'Stand against the darkness',
      armorTitle: 'PUT ON THE FULL ARMOR OF GOD',
      armorItems: [
        'Belt of Truth',
        'Breastplate of Righteousness',
        'Shoes of Peace',
        'Shield of Faith',
        'Helmet of Salvation',
        'Sword of the Spirit'
      ],
      scriptureQuote: '"Stand therefore, having girded your waist with truth, having put on the breastplate of righteousness..."',
      scriptureAttrib: '— EPHESIANS 6:14-15',
      dharmaLink: 'Dharma is not passive acceptance. It is the active fulfillment of sacred duty against evil.',
      conclusion: 'We know which side we serve.',
      keyEmphasis: ['WARRIORS', 'ARMOR', 'EVIL']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 11: PROVEN AT HIGHEST LEVELS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'credentials',
    content: {
      type: 'credentials',
      pretitle: 'The Foundation of Excellence',
      title: 'PROVEN AT THE HIGHEST LEVELS',
      credentialsIntro: 'Our team has operated at the pinnacle of industry.',
      credentialsSub: 'Over $200 billion in transactions. World-class execution.',
      logos: true,
      keyEmphasis: ['$200 BILLION']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDES 12-18: SERVICES (7 slides + wisdom tie-in)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'service-pe',
    content: {
      type: 'service',
      sectionTitle: 'OUR CAPABILITIES',
      sectionSub: 'Ancient Wisdom. Modern Execution.',
      title: 'PRIVATE EQUITY & MERCHANT BANKING',
      description: 'Strategic capital deployment for companies navigating transformation.',
      tiein: 'Socratic rigor applied to every investment thesis.',
      items: ['Venture Capital', 'LBOs', 'Debt & Equity', 'Bridge Financings', 'Seed Capital', 'Growth Equity'],
      wisdomTiein: 'Powered by Socratic wisdom.'
    }
  },
  {
    id: 'service-ma',
    content: {
      type: 'service',
      title: 'MERGERS & ACQUISITIONS',
      description: 'Buy-side and sell-side advisory for transformational transactions.',
      tiein: 'We interrogate every assumption before capital moves.',
      items: ['Strategic Acquisitions', 'Divestitures', 'Carve-outs', 'Platform Roll-ups', 'Cross-border M&A', 'Hostile Defense'],
      wisdomTiein: 'Powered by Socratic wisdom.'
    }
  },
  {
    id: 'service-vc',
    content: {
      type: 'service',
      title: 'VENTURE CAPITAL',
      description: 'Early and growth-stage investment in transformative technologies.',
      tiein: 'We seek founders who question everything.',
      items: ['AI & Machine Learning', 'Enterprise SaaS', 'Deep Tech', 'Hardware Innovation', 'Platform Plays', 'Tech Commercialization'],
      wisdomTiein: 'Powered by Socratic wisdom.'
    }
  },
  {
    id: 'service-ai',
    content: {
      type: 'service',
      title: 'AI-POWERED DIGITAL TRANSFORMATION',
      description: 'Deploying AI to create sustainable competitive advantage.',
      tiein: 'Technology without wisdom is noise.',
      items: ['Agentic Systems', 'Predictive Analytics', 'Process Automation', 'Custom LLMs', 'Neural Networks', 'AI Data Analysis'],
      wisdomTiein: 'Powered by Socratic wisdom.'
    }
  },
  {
    id: 'service-marketing',
    content: {
      type: 'service',
      title: 'MARKETING AUTOMATION',
      description: 'Data-driven customer acquisition systems that scale.',
      tiein: 'Persuasion grounded in truth.',
      items: ['Full-funnel Automation', 'CRM Optimization', 'Lead Scoring', 'Predictive Intelligence', 'Attribution', 'Conversion'],
      wisdomTiein: 'Powered by Socratic wisdom.'
    }
  },
  {
    id: 'service-advisory',
    content: {
      type: 'service',
      title: 'STRATEGIC ADVISORY',
      description: 'Board-level counsel for discontinuous change.',
      tiein: 'The Socratic method in the boardroom.',
      items: ['Corporate Strategy', 'Restructuring', 'Crisis Management', 'Scenario Planning', 'Competitive Intel', 'Capital Optimization'],
      wisdomTiein: 'Powered by Socratic wisdom.'
    }
  },
  {
    id: 'service-dd',
    content: {
      type: 'service-dd',
      title: 'DUE DILIGENCE',
      description: 'First-principles analysis that reveals what others miss.',
      tiein: 'Every thesis must survive interrogation.',
      items: ['Commercial DD', 'Tech Assessment', 'Management Eval', 'Market Analysis', 'Competitive Position', 'Risk Analysis'],
      wisdomTiein: 'Powered by Socratic wisdom.'
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 19: FULL-SPECTRUM CAPABILITY
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'services-summary',
    content: {
      type: 'services-summary',
      title: 'FULL-SPECTRUM CAPABILITY',
      items: ['Private Equity', 'Merchant Banking', 'Venture Capital', 'M&A Advisory', 'AI Transformation', 'Marketing Automation', 'Strategic Consulting', 'Due Diligence']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 20: WE DO NOT SEEK / PRINCIPLES (V21 Slides 26-27 merged)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'selectivity-principles',
    content: {
      type: 'selectivity-principles',
      lines: ['We do NOT seek.', 'We are SOUGHT.', 'And we CHOOSE.'],
      subtext: 'Engagement is by introduction only. Our participation is a considered decision.',
      discretionLine1: 'Discretion is not a policy.',
      discretionLine2: 'IT IS OUR NATURE.',
      principlesTitle: 'OUR PRINCIPLES',
      principleItems: ['Discernment over volume', 'Wisdom before wealth', 'Conviction with humility', 'Legacy over transaction'],
      principlesConclusion: 'These are not slogans. They are how we operate.',
      keyEmphasis: ['SOUGHT', 'CHOOSE']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 21: TO FIND YOURSELF
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'first-principles',
    content: {
      type: 'quote-image',
      quote: '"To find yourself, think for yourself."',
      attribution: '— SOCRATES',
      subtext: 'First principles. First always.'
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 22: WE STAND WITH LIGHT / CTA / FINALE (V21 Slides 29-30 merged)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'finale',
    content: {
      type: 'finale',
      scriptureQuote: '"And there was war in heaven: Michael and his angels fought against the dragon; and the dragon fought and his angels..."',
      scriptureAttrib: '— REVELATION 12:7',
      ctaWarning: 'The Fourth Turning demands action. The AI revolution rewards the prepared.',
      ctaUrgency: 'Hesitation is the only guaranteed failure.',
      ctaLine1: 'If your opportunity aligns with our purpose...',
      ctaLine2: 'If you value wisdom over noise, and principle over transaction...',
      ctaMain: 'The future belongs to those who move now.',
      pretitle: 'The Examined Path',
      title: 'YOU FOUND US.',
      subtitle: 'Perhaps that was the point all along.',
      finalQuote: '"Wonder is the beginning of wisdom."',
      finalAttrib: '— SOCRATES',
      keyEmphasis: ['YOU FOUND US']
    }
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

export const countWords = (text) => text ? text.split(/\s+/).filter(w => w.length > 0).length : 0;

export const getSlideWordCount = (content) => {
  let count = 0;
  const textKeys = [
    'pretitle', 'title', 'subtitle', 'text', 'quote', 'attribution', 'subtext',
    'definition', 'line1', 'line2', 'line3', 'line4', 'conclusion', 'description',
    'tiein', 'dharmaLink', 'cta', 'amplified', 'left', 'right', 'center',
    'urgency', 'warning', 'finalCta', 'sectionTitle', 'sectionSub', 'ndgStatement',
    'quoteAttrib', 'discretionLine1', 'discretionLine2', 'deadline', 'urgencyLine',
    'credentialsIntro', 'credentialsSub', 'tagline', 'website', 'winterLine1',
    'winterLine2', 'winterLine3', 'ndgAddition', 'armorTitle', 'scriptureQuote',
    'scriptureAttrib', 'ctaWarning', 'ctaUrgency', 'ctaLine1', 'ctaLine2',
    'ctaMain', 'finalQuote', 'finalAttrib', 'principlesTitle', 'principlesConclusion',
    'wisdomTiein'
  ];
  
  textKeys.forEach(k => {
    if (content[k] && typeof content[k] === 'string') count += countWords(content[k]);
  });
  
  if (content.bullets) count += content.bullets.reduce((acc, b) => acc + countWords(b), 0);
  if (content.items) {
    content.items.forEach(item => {
      if (typeof item === 'string') count += countWords(item);
      else if (item.label) count += countWords(item.label) + countWords(item.state || '');
    });
  }
  if (content.lines) content.lines.forEach(l => count += countWords(l));
  if (content.contrastPairs) content.contrastPairs.forEach(p => count += countWords(p[0]) + countWords(p[1]));
  if (content.impactItems) content.impactItems.forEach(i => count += countWords(i));
  if (content.armorItems) content.armorItems.forEach(i => count += countWords(i));
  if (content.principleItems) content.principleItems.forEach(i => count += countWords(i));
  
  return count;
};

export const calcSlideDuration = (wordCount, slideId) => {
  // Special durations for specific slides
  if (slideId === 'opener') return 10000;
  if (slideId === 'credentials') return 18000;
  if (slideId === 'warriors-armor') return 15000;  // Complex merged slide
  if (slideId === 'finale') return 15000;          // Complex merged finale
  if (slideId === 'crisis-winter') return 12000;   // Merged crisis slide
  if (slideId === 'ai-revolution') return 14000;   // Merged AI slide
  if (slideId === 'selectivity-principles') return 12000; // Merged selectivity
  
  return Math.max(wordCount * msPerWord + timing.absorptionPauseMs, timing.minSlideDurationMs);
};

export const buildSlides = () => slideDefinitions.map(s => {
  const wc = getSlideWordCount(s.content);
  return { ...s, duration: calcSlideDuration(wc, s.id), wordCount: wc };
});

// ═══════════════════════════════════════════════════════════════════════════
// V22: ENHANCED ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════

export const baseAnimations = `
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 15px rgba(255,255,255,0.2); }
    50% { box-shadow: 0 0 25px rgba(255,255,255,0.35); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
  @keyframes logoFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes pulse {
    0% { filter: brightness(1); transform: scale(1); }
    50% { filter: brightness(1.5); transform: scale(1.05); }
    100% { filter: brightness(1); transform: scale(1); }
  }
  @keyframes revealIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes popIn {
    0% { opacity: 0; transform: scale(0.9); }
    70% { opacity: 1; transform: scale(1.02); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

// V22: NO glow filters on images - just drop shadow for depth
export const imageClasses = `
  .floating-image {
    animation: float 7s ease-in-out infinite;
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.5));
  }
  .static-image {
    filter: drop-shadow(0 8px 20px rgba(0,0,0,0.5));
  }
  .logo-card {
    animation: logoFade 0.3s ease forwards;
  }
  .pulse-emphasis {
    animation: pulse 0.3s ease-in-out;
  }
`;
