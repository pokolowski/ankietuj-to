import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'components/organisms/menuLeftPanel/menuLeftPanel.css';

const MenuLeftPanel = () => {
  const [leftNavBar, setLeftNavBar] = useState(false);
  return (
    <>
      <FontAwesomeIcon icon={faBars} className="hamburgerIcon" />
      <div className={leftNavBar ? 'menuLeftPanel active': 'menuLeftPanel'}></div>
    </>
  );
};

export default MenuLeftPanel;
