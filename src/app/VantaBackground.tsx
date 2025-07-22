'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let NET: any;

    const loadVanta = async () => {
      const vantaModule = await import('vanta/dist/vanta.net.min');
      NET = vantaModule.default;

      if (!vantaEffect) {
        const effect = NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xcf587d,            
          backgroundColor: 0x1b0a2a,  
          points: 10.0,
          maxDistance: 25.0,
          spacing: 18.0,
        });

        setVantaEffect(effect);
      }
    };

    loadVanta();

    return () => {
        vantaEffect?.destroy?.();
      };
    }, [vantaEffect]);
  
    return <div ref={vantaRef} className="fixed inset-0 -z-10" />;

  }