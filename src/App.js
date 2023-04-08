import React, { useState } from 'react'
import logo from './Fivestars.avif';
import './App.css';
import Manual from "./components/Manual";
import Automatic from "./components/Automatic";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const MyTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <main className="screen">
            <h1 className='title'>Fee Calculator</h1>
            <Tabs value={activeTab} onChange={handleTabChange} TabIndicatorProps={{ style: { background: '#6E21CF' } }}>
                <Tab label="Automatic" style={{ minWidth: "0%" }} />
                <Tab label="Manual" style={{ minWidth: "0%" }} />
            </Tabs>
            <br />
            {activeTab === 0 && <Automatic />}
            {activeTab === 1 && <Manual />}
            <picture>
                <img src={logo} alt="" />
            </picture>
        </main>
    );
};

export default MyTabs;
