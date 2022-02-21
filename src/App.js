import './styles/App.css';
import Card from './components/card';

const App = () => {
  const friends = [
    {
      name: 'Ahmed',
      DP: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      description:
        'I am a web developer',
    },
    {
      name: 'Ali',
      DP: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      description:
        'I am a web developer',
    },
    {
      name: 'Hassan',
      DP: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      description:
        'I am a web developer',
    },
  ];

  return (
    <div className=''>
      <h1>Home Page 🏠</h1>
      <div className='wrapper'>
        {friends.map((el) => {
          return (
            <Card cardDetails={el} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
