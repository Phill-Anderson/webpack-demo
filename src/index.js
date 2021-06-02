var _ = require('lodash');
import './style.css'
import Icon from './icon.png'

import XMLData from './data/data.xml';
import JSONData from './data/data.json';
import CSVData from './data/data.csv';
import toml from './data/data.toml';
import json from './data/data.json5';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(XMLData, CSVData, JSONData)
    console.log(toml.title); // output `TOML Example`
    console.log(toml.owner.name); // output `Tom Preston-Werner`

    console.log(json.title); // output `JSON5 Example`
    console.log(json.owner.name); // output `Tom Preston-Werner`
    return element;
}

document.body.appendChild(component());