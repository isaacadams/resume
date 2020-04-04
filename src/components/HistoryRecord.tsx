import * as React from 'react';
import { Header, List, YSpacer } from '.';

interface IHistoryRecord {
    position: string |JSX.Element;
    company: string | JSX.Element;
    date: string;
    descriptions: string[];
}

export function HistoryRecord({ position, company, date, descriptions }: IHistoryRecord) {
    return (
        <div>
            <Header y={{
                top: { 
                    left: position, 
                    right: date
                },
                bottom: {
                    left: company, 
                    right: ""
                }
            }} />
            <List items={descriptions} />
            <YSpacer space="8px" />
        </div>
    );
}
