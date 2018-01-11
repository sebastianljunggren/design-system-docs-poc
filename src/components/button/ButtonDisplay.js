import React from 'react';

export default function ButtonDisplay({options}) {
    return <button type="button" className={getClassName(options)}>Button</button>;
}

function getClassName({type, outline, size}) {
    const typeClass = outline ? `btn-outline-${type}` : `btn-${type}`;
    const  sizeClass = size ? ` btn-${size}` : '';
    return `btn ${typeClass}${sizeClass}`;
}