import React from 'react';
import './index.css';
import Navigator from '../../components/Navigator';
import Configs from '../../assets/datas/Configs';

export default (props) => {

  return (
    <div className='home-page-container'>
      <Navigator appName={'App Name'} theme={'light'} currentNav={'HOME'} links={Configs.Links} />
      <div className='section'>
        <h1>Home page.</h1>
      </div>
    </div>
  )
}
