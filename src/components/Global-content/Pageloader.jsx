import React,{ useState, useEffect } from 'react';
import { config } from '../../config';

export default function PageLoader() {

  return (
    <div className={'page-loader'}>
      <div className="bounceball"></div>
    </div>
  );
}
