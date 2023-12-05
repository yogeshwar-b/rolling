import { useState } from "react";
import "./App.css";
import { createContext } from "react";
import { DisplayText } from "./DisplayText";
export const ThemeContext = createContext();
import PropTypes from "prop-types";

export function App() {
  const [apptheme, setAppTheme] = useState("dark");
  const textvalue = "test";
  return (
    <ThemeContext.Provider value={{ apptheme, setAppTheme }}>
      <div className="maingrid">
        <div className="rowFlex">
          <Textbox label="Source" textvalue={textvalue}></Textbox>
          <CustomButton label="ROLL"></CustomButton>
        </div>
        <div>
          <DisplayText textvalue={textvalue}></DisplayText>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

/**
 * Textbox input component
 * @param {{label: string,
 * textvalue: string}} props
 *
 */
function Textbox(props) {
  return (
    <>
      <label htmlFor="txtbox">{props.label}</label>
      <input type="text" id="txtbox" value={props.textvalue} />
    </>
  );
}

Textbox.propTypes = {
  label: PropTypes.string.isRequired,
  textvalue: PropTypes.string.isRequired,
};

/**
 *
 * @param {{
 * label:  {PropTypes.string}
 * }} props
 * @returns
 */
function CustomButton(props) {
  return (
    <>
      <button type="button">{props.label}</button>
    </>
  );
}
CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
};
