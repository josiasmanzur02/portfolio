import '../css/Navbar.css';

const Navbar = ({ onHomeClick, onProjectsClick, onSkillsClick, onResumeClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={onHomeClick}>Home</button></li>
        <li><button onClick={onProjectsClick}>Projects</button></li>
        <li><button onClick={onSkillsClick}>Skills</button></li>
        <li><button onClick={onResumeClick}>Resume</button></li>
      </ul>
    </nav>
  );
};
 
export default Navbar;
 