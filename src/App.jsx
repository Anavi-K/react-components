import './App.css';
import GalleryFooter from './components/GalleryFooter';
import GalleryBody from './components/GalleryBody';
import GalleryHeader from './components/GalleryHeader';

function App(props) {
  const imageData = props.data
  return (
    <div>

      {/* adding footer component */}
      <GalleryFooter/> 
    </div>
  )
}

export default App;