import React  from 'react';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Menu from './pages/menu';
import About from './pages/about';
import Book from './pages/book';
import './App.css'
import backImg from './img/background/hero-bg.jpg';
import MenuBox from './containers/MenuBox/MenuBox';
import CarouselList from './components/carouselBox/carouselList/CarouselList'


export default function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />

    </Router>
  );
}

function Home (){
  return (
    <>
      <div className="homeBox" style={{backgroundImage: `url(${backImg})`}}>
        <div className="container">
          <div className="box">
            <h1>Fast Food Restaurant</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem mollitia nihil assumenda? Corporis quisquam asperiores, recusandae obcaecati ad consequatur suscipit mollitia atque, sequi veritatis, modi soluta dolores neque debitis quia?
            </p>
            <button> Order now</button>
          </div>
        </div>
      </div>

      {/* <MenuBox /> */}
      <CarouselList />
    </>
  );
}



