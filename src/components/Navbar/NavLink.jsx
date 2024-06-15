import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const NavLink = ({ href, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(href, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -50,
      });
    }, 100); // add a delay of 100 milliseconds
  };

  return (
    <li className="list-none cursor-pointer mr-8">
      <div onClick={handleClick} className="font-bold transition-all duration-300">
        {link}
      </div>
    </li>
  );
};

export default NavLink;
