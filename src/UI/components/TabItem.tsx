import { Link } from 'react-router-dom';
import '../styles/_shared-style.scss';
import '../styles/components/TabItem.scss';

interface TabItemProps {
  link: string;
  name: string;
  isActive: boolean;
  setIsActive: () => void;
}

const TabItem = ({link, name, setIsActive, isActive}: TabItemProps) => {

  return (
    <Link to={link} onClick={setIsActive}>
      <span className={`tab ${isActive ? 'tab--active' : ''}`}>{name}</span>
    </Link>
  );
};

export default TabItem;