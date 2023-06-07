import React, { useState } from 'react';
import { Tab } from '../models/tab.model';
import '../styles/_shared-style.scss';
import '../styles/components/TabGroup.scss';
import TabItem from './TabItem';

interface TabGroupProps {
  tabs: Tab[];
}

const TabGroup = ({tabs}: TabGroupProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTablChanges = (tabId: number) => {
    setActiveTab(tabId);
  };

  const tabList = tabs.map((tab: Tab) =>
                             <TabItem
                               link={tab.link}
                               name={tab.name}
                               isActive={activeTab === tab.tabId}
                               setIsActive={() => setActiveTab(tab.tabId)}
                               key={tab.name}/>);

  return (
    <ul className="tab-list flex">
      {tabList}
    </ul>
  );
};

export default TabGroup;