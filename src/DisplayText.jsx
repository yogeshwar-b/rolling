import PropTypes from "prop-types";
/**
 *
 * @param {{
 * textvalue:string
 * }} props
 *
 */
export function DisplayText(props) {
  var lettercomponent = props.textvalue
    .split("")
    .map((letter) => <div key={letter.toString()}>{letter}</div>);

  return <div style={{ display: "inline-flex" }}>{lettercomponent}</div>;
}

DisplayText.propTypes = {
  textvalue: PropTypes.string.isRequired,
};
