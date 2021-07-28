const style = {
  fontSize: '2rem',
  color: '#c4302b',
  fontWeight: 'bold',
};

const Header = () => {
  return (
    <header className="bg-gray-800 w-full text-center p-4">
      <h1 style={style}>WeTube</h1>
    </header>
  );
};

export default Header;
