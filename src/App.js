import Todos from "./components/Todos";
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import Reducer from "./store/reducer";
import { ContextProvider } from "./context/Context";

function App() {
const store =configureStore({
  reducer:{
    items:Reducer
  }
})
  return (
    <ContextProvider>
    <Provider store={store}>
    <div>
      <Todos/>
    </div>
    </Provider>
    </ContextProvider>
  );
}

export default App;
