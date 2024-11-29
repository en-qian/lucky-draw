import { useState } from 'react';
import { Styles as style } from '@constants/styles';

const wrapperStyle = {
  padding: '0 20px',
  backgroundColor: style.black,
} as const;

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',
} as const;

const h1Style = {
  fontSize: '150px',
  color: style.white,
  fontWeight: 'bold',
  lineHeight: '1em',
  margin: 0,
} as const;

const h2Style = {
  margin: '5px 0 25px 0',
  fontSize: style.h2FontSize,
  lineHeight: style.h2LineHeight,
  fontWeight: style.h2FontWeight,
  color: style.white,
} as const;

const NotFound = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    padding: '10px 30px',
    borderRadius: '30px',
    backgroundColor: isHovered ? style.darkGreen : style.white,
    color: isHovered ? style.white : style.black,
    fontSize: style.buttonFontSize,
    fontWeight: style.buttonFontWeight,
    lineHeight: style.buttonLineHeight,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-out',
  };

  return (
    <div style={wrapperStyle} className="not-found-wrapper">
      <div style={containerStyle} className="not-found-container">
        <h1 style={h1Style}>404</h1>
        <h2 style={h2Style}>Page Not Found</h2>
        <span
          style={buttonStyle}
          onClick={() => {
            window.location.href = '/';
          }}
          onMouseEnter={e => setIsHovered(true)}
          onMouseLeave={e => setIsHovered(false)}
        >
          Go to home
        </span>
      </div>
    </div>
  );
};

export default NotFound;
