
import './App.css'; 
import {Navbar,Nav,Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import DocumentTitle from 'react-document-title'
import {Contacts} from './Pages/Contacts';
import {Home} from './Pages/Home';
import {Certificates} from './Pages/Certificates';
import {Products} from "./Pages/Products";
import {Product} from "./Pages/Product";
import {Certificate} from './Pages/Certificate';
import {Delivery} from "./Pages/Delivery";
import {useSelector, useDispatch} from "react-redux";
import {updateUserState} from "./store/buySlice";

function App() {
    const { isUser} = useSelector((state) => state.isUser);
    const { auth} = useSelector((state) => state.auth);
    const dispatch = useDispatch();


  return (
      <DocumentTitle title = 'Leopardo'>

    <BrowserRouter>
    <div className="App">

    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Leoparde</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Начало</Nav.Link>
            <Nav.Link as={Link} to="/products">Продукция</Nav.Link>
            <Nav.Link as={Link} to="/certificates">Сертификаты</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
              {isUser&&
            <Nav.Link as={Link} to="/delivery">Корзина</Nav.Link>
              }
            <Nav.Link as={Link} to="/" onClick={()=>{
                dispatch(updateUserState())
            }}>{auth}</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      </>
      <div> 
        <Routes>
         <Route path="/contacts" element={<Contacts/>}/>
         <Route path="/certificates" element={<Certificates/>}/>
         <Route exact path={'/certificates/:certificate_pk'} element={<Certificate />}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/products/:product_pk" element={<Product/>}/>
         <Route path="/" element={<Home/>}/>
         <Route path="/delivery" element={<Delivery/>}/>
         {/*<Route path="/auth" element={<AuthComponent/>}/>*/}

        </Routes>
      </div>
    </div>
    </BrowserRouter>
      </DocumentTitle>

  );
  
}

export default App;
