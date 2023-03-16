const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="text-center py-5">
      Baha Eddine &copy;<span> {date.toString()}</span> Portfolio. All Rights
      Reserved. Designed by me
    </footer>
  );
};

export default Footer;
