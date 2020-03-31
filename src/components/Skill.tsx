import * as React from 'react';

interface ISkill {
    category: string,
    examples: string[]
}

export function Skill( { category, examples  }: ISkill ) {
    return (
    <div className="pb-1">
        <b>{category}. </b>
        {examples.join(", ")}
    </div>);
}