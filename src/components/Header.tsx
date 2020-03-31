import * as React from 'react';
import { YSpacer } from './YSpacer';

interface IHeaderOptions {
    y: YPlacement;
}

class YPlacement {
    top: XPlacement;
    bottom: XPlacement;
}

class XPlacement {
    left: JSX.Element | string;
    right: JSX.Element | string;
}

interface IInformation {
    x: XPlacement;
}

export function Information({ x }: IInformation) {
    let {left, right} = x;
    
    return (
        <div className="row">
            <div className="col">
                {left}
            </div>
            <div className="col text-right">
                {right}
            </div>
        </div>
    );
}

export function Header({ y }: IHeaderOptions) {
    let { top, bottom } = y;
    return (
        <div className="work-header">
            <Information x={top} />
            <YSpacer />
            <Information x={bottom} />
        </div>
    );
}

