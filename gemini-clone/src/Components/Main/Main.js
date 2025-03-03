import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../Assets/assets";
import { Context } from "../../context/context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    isTyping,
    setIsTyping,
    typingRef
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() => {
                  onSent(
                    "Suggest beautiful places to see on an upcoming road trip"
                  );
                }}
              >
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="compass" />
              </div>
              <div
                className="card"
                onClick={() => {
                  onSent("Briefly summarize this concept: urban planning");
                }}
              >
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="bult" />
              </div>
              <div
                className="card"
                onClick={() => {
                  onSent(
                    "Brainstorm team bonding activities for our work retreat"
                  );
                }}
              >
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="message" />
              </div>
              <div
                className="card"
                onClick={() => {
                  onSent("Improve the readability of the following code");
                }}
              >
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                /* to hide all the html tags */
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && input) {
                  onSent();
                }
              }}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            {(typingRef.current === false && !isTyping) ? (
              <div>
                <img src={assets.gallery_icon} alt="gallery" />
                <img src={assets.mic_icon} alt="mic" />
                {input ? (
                  <img
                    onClick={() => {
                      onSent();
                    }}
                    src={assets.send_icon}
                    alt="send"
                  />
                ) : null}
              </div>
            ) : (
              <div>
                <img onClick={() => {typingRef.current = false; setIsTyping(false);}} src={assets.pause_icon} alt="pause" />
              </div>
            )}
            {/* <div>
              
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              {input ? <img
                onClick={() => {
                  onSent();
                }}
                src={assets.send_icon}
                alt="send"
              /> : null}
            </div> */}
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses, Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
