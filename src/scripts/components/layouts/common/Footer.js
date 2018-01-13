import React from 'react';
import option from '../../../static/option'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="pull-right">
                    <strong>{option.version}</strong>
                </div>
                <div>
                    <strong>{option.company}</strong>
                </div>
            </div>
        )
    }
}

export default Footer