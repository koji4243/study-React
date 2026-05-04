import React from 'react';

export function Footer({siteTitle = 'Reactの基礎を学ぼう', currentYear = new Date().getFullYear()}) {

    return (
        <footer>
        <p>&copy; {currentYear} {siteTitle}</p>
        </footer>
    );
}