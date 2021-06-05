import React from 'react';

const CustomisedHeading = ({test}) => {
    return (
        <div style={{ height: 200, width:200, backgroundColor:'gray', padding:50}}>
            <p style={{ color: "red", fontSize:"35px", fontWeight:600}}>
                        {
                            test
                        }
        </p>
        </div>
        
    )
}

export default CustomisedHeading;