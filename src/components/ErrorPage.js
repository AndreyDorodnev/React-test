import React from 'react';
import PropTypes from 'prop-types';

function ErrorPage(props) {
    return (
        <div className="not-found">
            <h1>{props.message}</h1>
        </div>
    )
}

ErrorPage.propTypes = {
    message: PropTypes.string.isRequired,
}
export default ErrorPage;