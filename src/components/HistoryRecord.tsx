import * as React from 'react';
import { Header, List, YSpacer } from '.';

interface IHistoryRecord {
    title: string |JSX.Element;
    company: string | JSX.Element;
    date: string;
    descriptions: string[];
}

export function HistoryRecord({ title, company, date, descriptions }: IHistoryRecord) {
    return (
        <div>
            <Header y={{
                top: { 
                    left: title, 
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
