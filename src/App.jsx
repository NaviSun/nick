import Header from './components/header';
import Home from "./components/Home"
import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <div className="border-b border-b-grey-light"></div>
        <main className="">
        <Home />
        <About />
        <Form />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
