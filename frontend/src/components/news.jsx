import React, { useEffect } from 'react';

const NewsWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      colorTheme: 'dark',
      isTransparent: false,
      displayMode: 'regular',
      width: '100%',
      height: 830,
      locale: 'en',
    });

    const container = document.querySelector('.tradingview-widget-container__widget');
    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
              container.removeChild(script);
            }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default NewsWidget;
