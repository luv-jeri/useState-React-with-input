import '../styles/Button.css';

const Button = () => {
  
    const onClick = () => {
      alert('Hello');
    };

  return (
    <button
      onClick={onClick}
      className='Button'
    >
      Button
    </button>
  );
};

export default Button;
