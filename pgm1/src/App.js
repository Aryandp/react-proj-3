import { connect } from 'react-redux';
import Counter from './components/Counter'
import {mapStateToProps,mapDispatchToProps} from './container/Counter.map.js'

export const App = connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default App;
