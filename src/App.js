import logo from './logo.svg';
import './App.css';
import QuotesCard from './components/QuotesCard';
import Card from './components/Card';

function App() {

  return (
    <div className='h-screen bg-gradient-to-b from-purple-400 to-purple-800'>
      <div className='flex flex-row items-center justify-center font-bold'>
        <Card />
      </div>
    </div>
  );
}

export default App;
