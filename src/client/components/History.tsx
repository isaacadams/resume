import * as React from 'react';

export function History({ title, children }) {
    return (
        <div className="history">
            <div className="row">
                <div className="col">
                    <hr />
                    <div className="row-center history-header">
                        {title}
                    </div>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>                
                <div className="col-10" style={{ flexGrow: 25 }}>
                    {children}
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}