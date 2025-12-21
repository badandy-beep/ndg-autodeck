/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
/* NDG AutoDeck V22 - Main Page */

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic imports to prevent SSR issues
const NDGAutoDeckDesktop = dynamic(() => import('../components/NDGAutoDeckDesktop'), { ssr: false });
const NDGAutoDeckMobile = dynamic(() => import('../components/NDGAutoDeckMobile'), { ssr: false });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Loading state
  if (!isClient) {
    return (
      <div style={{ 
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fbbf24',
        fontFamily: "'Cinzel', serif"
      }}>
        <Head>
          <title>NOETIC DHARMA GROUP | Wisdom for an Unstable Age</title>
          <meta name="description" content="Noetic Dharma Group - Private Equity, Merchant Banking, and Strategic Advisory powered by Socratic wisdom." />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="author" content="Noetic Dharma Group, LLC" />
          <meta name="copyright" content="© 2025 Noetic Dharma Group, LLC" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>NOETIC DHARMA GROUP</h1>
          <p style={{ color: '#94a3b8' }}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>NOETIC DHARMA GROUP | Wisdom for an Unstable Age</title>
        <meta name="description" content="Noetic Dharma Group - Private Equity, Merchant Banking, and Strategic Advisory powered by Socratic wisdom." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="author" content="Noetic Dharma Group, LLC" />
        <meta name="copyright" content="© 2025 Noetic Dharma Group, LLC" />
        <meta property="og:title" content="Noetic Dharma Group" />
        <meta property="og:description" content="Wisdom for an Unstable Age - Private Equity, Merchant Banking, Strategic Advisory" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      {isMobile ? <NDGAutoDeckMobile /> : <NDGAutoDeckDesktop />}
    </>
  );
}
