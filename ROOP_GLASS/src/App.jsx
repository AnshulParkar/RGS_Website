import { Routes, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Container } from '@mui/material'
import Home from './Components/Home'
import './App.css'

function App() {
  return (
    <>
      <AppBar position="static">
       {/*  <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
        </Toolbar> */}
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
