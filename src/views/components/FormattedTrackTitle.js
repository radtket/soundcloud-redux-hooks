import PropTypes from "prop-types";

const FormattedTrackTitle = ({ title }) => {
  if (!title) {
    return "";
  }

  const arr = title.replace("–", "-").split(" - ");
  return arr[arr.length - 1].split(" (")[0];
};

FormattedTrackTitle.propTypes = {
  title: PropTypes.string,
};

FormattedTrackTitle.defaultProps = {
  unit: null,
};

export default FormattedTrackTitle;
