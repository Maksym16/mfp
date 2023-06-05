import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
// generic set up for any framework;

const MarketingApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}/>
}

export default MarketingApp;