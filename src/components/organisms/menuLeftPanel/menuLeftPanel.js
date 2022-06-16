import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXRay } from '@fortawesome/free-solid-svg-icons';
import 'components/organisms/menuLeftPanel/menuLeftPanel.css';
import HeaderUl from 'components/molecules/HeaderUl/HeaderUl';
import { IoClose } from 'react-icons/io5';
import HeaderSignIn from 'components/molecules/HeaderSignIn/HeaderSignIn';
import Header from '../header/header';

const MenuLeftPanel = () => {
  const [leftNavBar, setLeftNavBar] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="hamburgerIcon"
        onClick={() => setLeftNavBar(!leftNavBar)}
      />
      <div className={leftNavBar ? 'MenuLeftPanel active' : 'MenuLeftPanel'}>
        <IoClose
          className="hamburgerIcon"
          onClick={() => setLeftNavBar(!leftNavBar)}
        />
        <div className="ulContener">
          <HeaderUl
            direction="column"
            className="leftPanelUl"
            deactivateLeftPanel={setLeftNavBar}
          />
        </div>
        <div className="signInContainer">
          <HeaderSignIn direction="column" />
        </div>
      </div>
    </>
  );
};

export default MenuLeftPanel;
