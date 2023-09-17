import  { Home, About, Navbar, Contact, Teacher, Footer, Courses, Tech} from './components/index'


function App ()  {
  return  <div className="font-Poppins">
<Navbar/>
<Home/>
<About/>
<Tech/>
<Courses/>
<Teacher/>
<Contact/>
<Footer/>
  </div>
  
}

export default App