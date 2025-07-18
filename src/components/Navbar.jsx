import '../css/Navbar.css';

const Navbar = ({ onHomeClick, onProjectsClick, onSkillsClick, onContactClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={onHomeClick}>Home</button></li>
        <li><button onClick={onProjectsClick}>Projects</button></li>
        <li><button onClick={onSkillsClick}>Skills</button></li>
        <li><button onClick={onContactClick}>Contact</button></li>
      </ul>
    </nav>
  );
};
 
export default Navbar;
 