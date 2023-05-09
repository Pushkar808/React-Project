import Mainchat from '../components/mainChat';
import Sidebar from '../components/sidebar';

function App() {
  return (
    <div className="h-full w-full flex ">
      <Sidebar />
      <Mainchat />
    </div>
  );
}

export default App;
