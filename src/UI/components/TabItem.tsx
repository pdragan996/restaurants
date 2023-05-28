import { Link } from 'react-router-dom';
import '../styles/_shared-style.scss';
import '../styles/components/TabItem.scss';

interface TabItemProps {
  link: string;
  name: string;
}

const TabItem = ({link, name}: TabItemProps) => {

  return (
    <Link to={link}>
      <span className="tab">{name}</span>
    </Link>
  );
};

export default TabItem;