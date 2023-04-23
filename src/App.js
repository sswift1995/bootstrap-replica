import './App.css';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import StoreListing from './components/StoreListing';
import splashImage from './splash.webp';


const Splash = styled.div`
width: 100vw;
height: 500px;
background-repeat: no-repeat;
background-size: cover;
background-image: URL(${splashImage});
backgroud-color: #dfeed6;
position: absolute;
left: 0;
top: 40px;
right: 0;
z-index: -1
`

const StyledStoreListing = styled(StoreListing)`
  position: relative;
  top: 600px;
  
  `

function App() {
  return (
    <>
    <TopBar />
    <StyledStoreListing />
    <Splash/>
    
    </>
  );
}

export default App;