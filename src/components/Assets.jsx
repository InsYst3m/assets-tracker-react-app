import React, { useState } from 'react';
import { useAssetsLookup } from '../hooks/useAssetsLookup';
import './../styles/Assets.css';

const Assets = () => {
    const {error, data, loading} = useAssetsLookup();

    return (
        <div className='assets'>
            <ul className='assets-list'>
            {
                loading
                    ? <h1>Loading</h1>
                    : data.supportedCryptoAssets.map((asset, index) => <li key={index}>{asset}</li>)
            }
            </ul>
        </div>
    )
}

export default Assets