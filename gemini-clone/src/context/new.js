import { createContext, useState, useRef } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [prevResponses, setPrevResponses] = useState([]);
  const typingRef = useRef(false);

  const delayPara = (index, nextWord, totalWords) => {
    setTimeout(function () {
      if (typingRef.current === false) { return; }
      setResultData((prev) => prev + nextWord);
      console.log(index);
      if (index === totalWords - 1) {
        typingRef.current = false;
      }
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt = input, revisit = false, index = 0) => {
    setResultData("");
    if (!revisit) {
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(prompt);
      setPrevPrompts((prev) => [prompt, ...prev]);
      const respone = await run(prompt);
      let responeArray = respone.split("**");
      let newResponse = "";
      for (let i = 0; i < responeArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse = newResponse + responeArray[i];
        } else {
          newResponse = newResponse + "<b>" + responeArray[i] + "</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join("</br>");
      setPrevResponses((prev) => [newResponse2, ...prev]);
      let newResponseArray = newResponse2.split(" ");
      typingRef.current = true;
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord + " ", newResponseArray.length);
      }
      setLoading(false);
    } else {
      setShowResult(true);
      setResultData(prevResponses[index]);
    }
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    input,
    setInput,
    newChat,
    prevResponses,
    setPrevResponses,
    typingRef
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
