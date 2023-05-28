import React from 'react';
import { Tab } from './models/tab.model';
import './styles/shared-style.scss';
import './TabGroup.scss';
import TabItem from './TabItem';

interface TabGroupProps {
  tabs: Tab[];
}

const TabGroup = ({tabs}: TabGroupProps) => {

  const tabList = tabs.map(tab => <TabItem link={tab.link} name={tab.name} key={tab.name}/>);

  return (
    <ul className="tab-list flex">
      {tabList}
    </ul>
  );
};

export default TabGroup;