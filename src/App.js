import "./App.css";
import SkeletonCard from "./components/skeletons/SkeletonCard";
import SkeletonProfile from "./components/skeletons/SkeletonProfile";

function App() {
  return (
    <div className="App">
      <SkeletonCard lines={5} width={500} height={350} />
      <SkeletonProfile lines={2} width={400} height={130} />
    </div>
  );
}

export default App;
