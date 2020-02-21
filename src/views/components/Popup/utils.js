/* Algo to calculate position
  1. center position for popup content : the center of the trigger will be the center of the content content
      so the popup content position will be like this :
      top => the y of the center for the trigger element : trigger.top + trigger.height/2
      left => the x of the center for the trigger element : trigger.left + trigger.width/2

  2. translate position according to the first  position attribute  passed  in the function argument
      for example :
        position = 'left top'
        we need to handle the first argument in the position: 'left' => that's mean we need to translate the popup content according to the X axis by - content.width/2

  3.translate position according to the first  position attribute  passed  in the function argument
    for example :
      position = 'left top'
      the second argument 'top' => translate popup content by + content.height*4/5

  4. check if calculated position is going out of bounds of wrapper box or not. If yes repeat 1-3 for next position enum. By default wrapper box is window element
*/

const getCoordinatesForPosition = (
  { top, left, height: triggerHeight, width: triggerWidth },
  { height, width },
  position,
  margin,
  { offsetX, offsetY }
) => {
  const [x, y] = position.split(" ");
  // the step N 1 : center the popup content => ok

  const state = {
    arrowLeft: "0%",
    arrowTop: "0%",
    left: left + triggerWidth / 2 - width / 2,
    top: top + triggerHeight / 2 - height / 2,
    transform: "",
  };

  switch (x) {
    case "top":
      state.top -= height / 2 + triggerHeight / 2 + margin;
      state.transform = `rotate(45deg)`;
      state.arrowTop = "100%";
      state.arrowLeft = "50%";
      break;
    case "bottom":
      state.top += height / 2 + triggerHeight / 2 + margin;
      state.transform = `rotate(225deg)`;
      state.arrowLeft = "50%";
      break;
    case "left":
      state.left -= width / 2 + triggerWidth / 2 + margin;
      state.transform = ` rotate(-45deg)`;
      state.arrowLeft = "100%";
      state.arrowTop = "50%";
      break;
    case "right":
      state.left += width / 2 + triggerWidth / 2 + margin;
      state.transform = `rotate(135deg)`;
      state.arrowTop = "50%";
      break;
    default:
  }

  switch (y) {
    case "top":
      state.top = top;
      state.arrowTop = `${triggerHeight / 2}px`;
      break;
    case "bottom":
      state.top = top - height + triggerHeight;
      state.arrowTop = `${height - triggerHeight / 2}px`;
      break;
    case "left":
      state.left = left;
      state.arrowLeft = `${triggerWidth / 2}px`;
      break;
    case "right":
      state.left = left - width + triggerWidth;
      state.arrowLeft = `${width - triggerWidth / 2}px`;
      break;
    default:
  }

  state.top = x === "top" ? state.top - offsetY : state.top + offsetY;
  state.left = x === "left" ? state.left - offsetX : state.left + offsetX;

  return state;
};

export const calculatePosition = (
  triggerBounding,
  { height, width },
  positions,
  arrow,
  { offsetX, offsetY },
  wrapperBox
) => {
  let bestCoords;
  let i = 0;

  while (i < positions.length) {
    const margin = arrow ? 8 : 0;
    bestCoords = getCoordinatesForPosition(
      triggerBounding,
      { height, width },
      positions[i],
      margin,
      { offsetX, offsetY }
    );

    const contentBox = {
      top: bestCoords.top,
      left: bestCoords.left,
      width,
      height,
    };

    if (
      contentBox.top <= wrapperBox.top ||
      contentBox.left <= wrapperBox.left ||
      contentBox.top + contentBox.height >=
        wrapperBox.top + wrapperBox.height ||
      contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width
    ) {
      i += 1;
    } else {
      break;
    }
  }

  return bestCoords;
};

export const POSITION_TYPES = [
  "top left",
  "top center",
  "top right",
  "right top",
  "right center",
  "right bottom",
  "bottom left",
  "bottom center",
  "bottom right",
  "left top",
  "left center",
  "left bottom",
  "center center",
];

export const TRIGGER_TYPES = ["hover", "click", "focus"];
