import "./Tabs.css";

const Tabs = ({ mode, setMode, tabs }) => {
  return (
    <div className="tabs">
      <div className="tab-switcher">
        {Object.keys(tabs).map(tab => (
          <button
            className={`tab-switch-button ${mode === tab ? 'active' : ''}`}
            key={tab}
            onClick={() => setMode(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab">
        {tabs[mode]}
      </div>
    </div>
  )
};

export default Tabs;