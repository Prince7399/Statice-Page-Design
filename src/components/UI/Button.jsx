// components/ui/Button.js
import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    icon,
    onClick,
    ...props
}) => {
    const getButtonClass = () => {
        switch (variant) {
            case 'primary': return 'btn btn-primary';
            case 'secondary': return 'btn btn-secondary';
            default: return 'btn';
        }
    };

    return (
        <button
            className={getButtonClass()}
            onClick={onClick}
            {...props}
        >
            {icon && <span className="btn-icon">{icon === 'play' ? '▶' : icon}</span>}
            {children}
        </button>
    );
};

export default Button;