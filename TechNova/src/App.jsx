import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
