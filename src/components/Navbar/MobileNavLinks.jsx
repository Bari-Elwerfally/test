import { useNavigate } from 'react-router-dom';


const MobileNavLinks = ({ setToggle, href, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    scroller.scrollTo(href, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
    setToggle(prev => !prev);
  };

  return (
    <li className="list-none cursor-pointer mr-8">
      <div onClick={handleClick} className="font-bold transition-all duration-300">
        {link}
      </div>
    </li>
  );
};
export default MobileNavLinks;
