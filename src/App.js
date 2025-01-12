import './App.css';
import './index.css';
import Profil from './components/Profil';
import Menu from './components/Menu';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden fade-in">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Background.mp4" type="video/mp4" />
      </video>
      <Profil />
      <Menu />
    </div>
  );
}

export default App;
