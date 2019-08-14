import {AppRegistry} from 'react-native';
// import Page1 from './src/components/Page1';
// import App2 from './App2';

import Apps from './src/components/Apps';
// import Ujicoba from './src/components/Ujicoba'
import {name as appName} from './app.json';
// AppRegistry.registerComponent(appName, () => Page1);
AppRegistry.registerComponent(appName, () => Apps);