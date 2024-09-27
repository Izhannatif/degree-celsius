import React from 'react';

const CustomButton = ({ text, width = '150px', height = 'auto', color }) => {
    return (
        <div className='relative'>
            <svg width={width} height={height} viewBox="0 0 238 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className= {`${color}`} width="184" height="54.39" transform="translate(27 1.28516)" />
                <mask id="mask0_47_2" style={{ "mask-type": 'alpha' }} maskUnits="userSpaceOnUse" x="1" y="1" width="27" height="55">
                    <g clip-path="url(#clip0_47_2)">
                        <path d="M13.96 1.28516H28V55.6752H1V17.0583L13.96 1.28516Z" fill="black" />
                    </g>
                </mask>
                <g mask="url(#mask0_47_2)">
                    <rect className= {`${color}`} x="1" y="1.28516" width="27" height="54.39" />
                </g>
                <mask id="mask1_47_2" style={{ "mask-type": 'alpha' }} maskUnits="userSpaceOnUse" x="210" y="1" width="27" height="55">
                    <g clip-path="url(#clip1_47_2)">
                        <path d="M237 1.28516V38.2704L223.77 55.6752H210V1.28516H237Z" fill="black" />
                    </g>
                </mask>
                <g mask="url(#mask1_47_2)">
                    <rect className= {`${color}`} x="210" y="1.28516" width="27" height="54.39" />
                </g>
                <rect className= {`${color}`} y="49.6753" width="7" height="7" />
                <rect className= {`${color}`} x="231" y="0.285156" width="7" height="7" />
                <defs>
                    <clipPath id="clip0_47_2">
                        <rect width="27" height="54.39" fill="white" transform="translate(1 1.28516)" />
                    </clipPath>
                    <clipPath id="clip1_47_2">
                        <rect width="27" height="54.39" fill="white" transform="translate(210 1.28516)" />
                    </clipPath>
                </defs>
            </svg>
            <p className={`relative text-light font-medium text-md -top-10 text-center`}>{text}</p>
        </div>

    );
};

export default CustomButton;