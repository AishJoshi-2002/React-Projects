import React, { useContext, useState } from "react";
import './Sidebar.css';
import { assets } from '../../Assets/assets';
import { Context } from "../../context/context";

function Sidebar() {

    const [extended, setExtended] = useState(true);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

    const loadPrompt = async (prompt, index) => {
      setRecentPrompt(prompt);
      await onSent(prompt, true, index);
    }

    return (
      <div className="sidebar">
        <div className="top">
          <img
            className="menu"
            src={assets.menu_icon}
            alt="menu"
            onClick={() => {
              setExtended((prev) => !prev);
            }}
          />
          <div className="new-chat" onClick={() => {newChat()}}>
            <img src={assets.plus_icon} alt="new-chat" />
            {extended ? <p>New Chat</p> : null}
          </div>
          {(extended && prevPrompts.length > 0)? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item, index) => {
                return (
                  <div className="recent-entry" onClick={() => {loadPrompt(item, index)}}>
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0, 18)} ...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="question" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="question" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="question" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    );
}

export default Sidebar;