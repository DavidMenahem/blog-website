import postService from '../../../Services/PostsService'
import About from '../../About/SideAbout/About'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Routing from '../Routing/Routing'
import './Layout.css'

function Layout(): JSX.Element {
  postService.getAll()
  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <aside>
        <About />
      </aside>
      <main>
        <Routing />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
