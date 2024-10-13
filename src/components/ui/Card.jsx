const Card = ({ children, className = '', ...props }) => {
  return <div className={`card ${className}`} {...props}>{children}</div>;
};

const CardContent = ({ children, className = '', ...props }) => {
  return <div className={`card-content ${className}`} {...props}>{children}</div>;
};

const CardHeader = ({ children, className = '', ...props }) => {
  return <div className={`card-header ${className}`} {...props}>{children}</div>;
};

const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h2 className={`card-title ${className}`} {...props}>
      {children || 'Untitled'} 
    </h2>
  );
};

export { Card, CardContent, CardHeader, CardTitle }; 
export default Card; 
