import ReactDOM from 'react-dom';
import React from 'react';

import { MainComponent } from './components/MainComponent';
import { FooterComponent } from './components/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent';

const rootElem = document.getElementById("root");

ReactDOM.render(
    <div>
    <HeaderComponent/>
    <MainComponent/>
    <FooterComponent/>
    </div>,
    rootElem
);
