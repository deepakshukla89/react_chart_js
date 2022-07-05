import React from 'react';
import { createRoot } from 'react-dom/client';

import  Barcomponent  from './Barcomponent';
import  Pie from './Pie';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <>
    <Pie />
    {/* <Barcomponent  bar-charts={'bar-charts2'} /> */}
    {/* <Barcomponent /> */}
    {/* <Barcomponent bar-charts={'bar-charts1'} /> */}
    </>
);
