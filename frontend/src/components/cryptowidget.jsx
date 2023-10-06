import React, { useEffect } from 'react';

const CryptoWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.id = 'crypto';
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: 490,
      defaultColumn: 'overview',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      colorTheme: 'dark',
      locale: 'en',
    });
    // document.head.appendChild(script);
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

export default CryptoWidget;
