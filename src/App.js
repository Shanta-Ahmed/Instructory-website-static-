
import './App.css';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';

import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
function App() {
    return ( 
     <div>
      <Hero />
      <Search />
       
       <Courses title="INSTRUCTOR'S COMPETITION"></Courses>
       <Courses title="NEWLY LAUNCHED COURSES"></Courses>
       <Courses title="Most Visited Courses"></Courses>
       <Footer />
    </div>
    );
};

export default App;