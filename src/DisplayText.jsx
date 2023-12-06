import PropTypes from "prop-types";
import { useEffect, useState } from "react";
/**
 *
 * @param {{
 * textvalue:string
 * }} props
 *
 */
export function DisplayText(props) {
  useEffect(() => {
    console.log("something happened");
    console.log(
      "source is-" +
        props.textvalue.source +
        " Destination is-" +
        props.textvalue.destination
    );
  });
  var lettercomponent = props.textvalue.destination
    .split("")
    .map((letter, index) => (
      <div key={letter.toString() + index}>{letter}</div>
    ));

  return <div style={{ display: "inline-flex" }}>{lettercomponent}</div>;
}

DisplayText.propTypes = {
  textvalue: PropTypes.object,
};

function Letterdiv(props) {
  const [letterstate, setLetter] = setLetter(props.source);
  useEffect(() => {
    console.log(props.source.charCodeAt(0));
  });
  return <div></div>;
}

Letterdiv.propTypes = {
  source: PropTypes.string,
  dest: PropTypes.string,
};
/**
 *
 * @param {{
 * label:  {string}
 * }} props
 * @returns
 */
export function CustomButton(props) {
  function handleClick() {
    // DisplayText.logggg();
    props.setText({
      source: props.originalsource.destination,
      destination: props.destText,
    });
  }
  return (
    <>
      <button type="button" onClick={handleClick}>
        {props.label}
      </button>
    </>
  );
}
CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  setText: PropTypes.func,
  destText: PropTypes.string,
  originalsource: PropTypes.object,
};
