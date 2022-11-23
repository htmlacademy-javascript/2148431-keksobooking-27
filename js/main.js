import './constants.js';
import './util.js';
import './data.js';
import {getAd} from './popup.js';
import {inActiveState, activeState} from './pageState.js';
import './validation.js';

inActiveState();
setTimeout(activeState, 1000);

getAd();
