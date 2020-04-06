import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <div>
      <Helmet>
        <style>
          {'body { background: "images/americanflag.png"; }'}
        </style>
        {/* <style>{'body { background-color: #EEEDE7; }'}</style> */}
      </Helmet>
      <Navigation />
    </div>
  );
};

export default Header;
