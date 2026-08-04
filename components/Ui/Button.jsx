import React from 'react';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'default',
  className = '',
  ...props 
}) {
  const baseStyles = "inline-block font-medium transition-all duration-500 ease-out whitespace-nowrap border-0 cursor-pointer";
  
  const sizeStyles = {
    small: { 
      paddingLeft: '28px', 
      paddingRight: '28px', 
      paddingTop: '12px', 
      paddingBottom: '12px',
      fontSize: '14px',
    },
    default: { 
      paddingLeft: '48px', 
      paddingRight: '48px', 
      paddingTop: '18px', 
      paddingBottom: '18px',
      fontSize: '16px',
    },
    large: { 
      paddingLeft: '64px', 
      paddingRight: '64px', 
      paddingTop: '24px', 
      paddingBottom: '24px',
      fontSize: '18px',
    },
  };

  const getStyles = () => {
    const base = sizeStyles[size];
    if (variant === 'primary') {
      return {
        ...base,
        backgroundColor: '#ffffff',
        color: '#000000',
      };
    } else {
      return {
        ...base,
        backgroundColor: 'transparent',
        border: '2px solid #ffffff',
        color: '#ffffff',
      };
    }
  };

  const handleMouseEnter = (e) => {
    if (variant === 'primary') {
      e.target.style.backgroundColor = '#000000';
      e.target.style.color = '#ffffff';
      e.target.style.outline = '2px solid #ffffff';
      e.target.style.outlineOffset = '0px';
    } else {
      e.target.style.backgroundColor = '#ffffff';
      e.target.style.color = '#000000';
    }
  };

  const handleMouseLeave = (e) => {
    if (variant === 'primary') {
      e.target.style.backgroundColor = '#ffffff';
      e.target.style.color = '#000000';
      e.target.style.outline = 'none';
    } else {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.color = '#ffffff';
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${className}`}
      style={getStyles()}
      {...props}
    >
      {children}
    </button>
  );
}