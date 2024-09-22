const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-20 p-5 shadow-md shadow-black/30">
      <div className="flex items-center">
        <img src="src/assets/zippinLogo.jpg" alt="logo" className="h-14 mr-2" />
        <h1 className="text-2xl font-bold">ZIPPIN</h1>
      </div>
      <span className="text-l">Coding Challenge</span>
    </header>
  );
};

export default Header;
