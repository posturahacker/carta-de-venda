import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = ""
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
