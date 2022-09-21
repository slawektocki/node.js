const fs = require('fs');
const path = require('path'); 
const saveData = require('./index');

saveData('userData', `data/2-read-write-users.json`, true);