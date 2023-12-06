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
    // console.log("something happened");
    // console.log(
    //   "source is-" +
    //     props.textvalue.source +
    //     " Destination is-" +
    //     props.textvalue.destination
    // );
  });
  var lettercomponent = props.textvalue.destination
    .split("")
    .map((letter, index) => (
      <div key={letter.toString() + index}>
        {index < props.textvalue.source.length ? (
          <Letterdiv
            sourceletter={props.textvalue.source[index]}
            destletter={letter}
          ></Letterdiv>
        ) : (
          <Letterdiv sourceletter=" " destletter={letter}></Letterdiv>
        )}
      </div>
    ));

  return <div style={{ display: "inline-flex" }}>{lettercomponent}</div>;
}

DisplayText.propTypes = {
  textvalue: PropTypes.object,
};

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

/**
 * @todo Need to add delay to letter flipping
 * @param {*} props
 * @returns
 */
function Letterdiv(props) {
  const [letterstate, setLetter] = useState(props.sourceletter);
  useEffect(() => {
    console.log(
      "change " +
        props.sourceletter +
        " to " +
        props.destletter +
        " at " +
        letterstate
    );
    timeout(100);
    if (letterstate != props.destletter) {
      if (letterstate.charCodeAt(0) < props.destletter.charCodeAt(0)) {
        setLetter(String.fromCharCode(letterstate.charCodeAt(0) + 1));
      } else {
        setLetter(String.fromCharCode(letterstate.charCodeAt(0) - 1));
      }
    }
  }, [letterstate, setLetter, props.destletter]);
  return <div>{letterstate}</div>;
}

Letterdiv.propTypes = {
  sourceletter: PropTypes.string,
  destletter: PropTypes.string,
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
