import React, {Fragment, memo} from 'react'

export default memo(function Label(props) {
    const { clickedTimes } = props;
    return (
        <Fragment>
            <label>Count : <span>{clickedTimes}</span></label>
        </Fragment>
    )
});
