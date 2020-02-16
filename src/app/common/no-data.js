import React from 'react';
import Alert from './alert';

const NoData = () => {
    return (
        <div className="no-data">
            <Alert type="warning" title="Warning!" message="No Data Found!" close={false} />
        </div>
    );
};

export default NoData;