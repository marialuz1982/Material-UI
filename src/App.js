import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route exact path="/" element={<Notes />} />
          
        
        <Route path="/create" element={<Create />} />
          
        
      </Routes>
=======
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
>>>>>>> da91138be777f0e9924fb123af677400352c2c9b
    </Router>
  );
}

export default App;