import React from 'react';

const Error = () => {
  const handleGoBack = () => {
    window.history.back(); 
  };
  return (
    <section className="lead-error-page">
    <div className="lead-error-content error-font-style">
        <p>404</p>
        <p>page not found</p>
        <p>We’re sorry, the page you requested could not be found. Please go back to the homepage</p>
        <button onClick={handleGoBack}>Go back</button>
    </div>
</section>
  )
}

export default Error