import './Home.css';
import { BlogCards } from './components/blogCards/BlogCards.jsx';
import { Header } from '../src/components/header/Header';
import { Footer } from '../src/components/footer/Footer';

function Home() {

  return (
    <>
      <Header />
      <div className="main-div-pages">
        <BlogCards category={'Dragon ball'} />
      </div>
      <Footer />
    </>
  )
}

export default Home
