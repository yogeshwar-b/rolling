import { useState } from "react";
import "./App.css";
import { createContext } from "react";
import { DisplayText, CustomButton } from "./DisplayText";
export const ThemeContext = createContext();
import PropTypes from "prop-types";

export function App() {
  const [apptheme, setAppTheme] = useState("dark");

  const [displayText, setDisplayText] = useState({
    source: "Test",
    destination: "Test",
  });
  return (
    <ThemeContext.Provider value={{ apptheme, setAppTheme }}>
      <div className="maingrid">
        <div className="rowFlex">
          <Pageitems
            originalsource={displayText}
            setDisplayText={setDisplayText}
          ></Pageitems>
        </div>
        <div>
          <DisplayText textvalue={displayText}></DisplayText>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

function Pageitems(props) {
  const [sourceText, setSourceText] = useState("");
  return (
    <>
      <Textbox
        label="Source"
        textvalue={sourceText}
        setText={setSourceText}
      ></Textbox>
      <CustomButton
        label="ROLL"
        originalsource={props.originalsource}
        destText={sourceText}
        setText={props.setDisplayText}
      ></CustomButton>
    </>
  );
}
Pageitems.propTypes = {
  setDisplayText: PropTypes.func,
  originalsource: PropTypes.object,
};

/**
 * Textbox input component
 * @param {{label: string,
 * textvalue: string}} props
 *
 */
function Textbox(props) {
  const handleChange = (event) => {
    props.setText(event.target.value);
  };

  return (
    <>
      {/* <label htmlFor="txtbox">{props.label}</label> */}
      <input
        type="text"
        id="txtbox"
        value={props.textvalue}
        className="inputbox"
        placeholder="Enter the Text to Roll"
        onChange={handleChange}
      />
    </>
  );
}

Textbox.propTypes = {
  label: PropTypes.string.isRequired,
  textvalue: PropTypes.string,
  // defaultvalue: PropTypes.string,
  setText: PropTypes.func,
};
