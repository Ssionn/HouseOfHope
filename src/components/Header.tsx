const Header = ({ title, subtitle }) => {
  return (
    <div className="inline-flex ml-60">
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="text-2xl">{subtitle}</span>
    </div>
  );
};

export default Header;
