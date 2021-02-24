import * as React from 'react';

interface IWorkDescription {
    items: string[];
}

export function List({ items }: IWorkDescription) {
    return (
        <ul>
            {items.map((d,i ) => <li key={i}>{d}</li>)}
        </ul>
    );
}