import React from "react";

class LogoLoader extends React.Component {
  render() {
    const loaderStyle = {
      border: '8px solid #f3f3f3', /* Light grey */
      borderTop: '8px solid #3498db', /* Blue */
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      animation: 'spin 2s linear infinite',
      marginBottom: '20px',
    };

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0', /* Adjust as needed */
    };

    const titleStyle = {
      fontSize: '1.5rem',
      color: '#333', /* Dark grey */
    };

    return (
      <div style={containerStyle}>
        <div style={loaderStyle}></div>
        <div style={titleStyle}>Shivam Prajapati</div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }
}

export default LogoLoader;
