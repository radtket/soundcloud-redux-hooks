import React, { useState, useEffect, useRef, cloneElement } from "react";
import PropTypes from "prop-types";
import { useMeasure, useWindowSize } from "react-use";
import {
  StyledPopupContent,
  StyledPopupArrow,
  StyledPopupOverlay,
} from "../../styles/Popup";
import { calculatePosition } from "./utils";

const arrow = true;
const arrowStyle = {};
const className = "";
const closeOnDocumentClick = true;
const closeOnEscape = true;
const contentStyle = {};
const defaultOpen = false;
const disabled = false;
const keepTooltipInside = false;
const lockScroll = false;
const modal = false;
const mouseEnterDelay = 100;
const mouseLeaveDelay = 100;
const offsetX = 0;
const offsetY = 0;
const on = ["click"];
const onClose = () => {};
const onOpen = () => {};
const open = false;
const overlayStyle = {};
const repositionOnResize = true;

const PopupAlt = ({ position, trigger, children }) => {
  const triggerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [styles, setStyles] = useState({
    content: {},
    arrow: {},
    trigger: {},
  });

  const [contentRef, content] = useMeasure();
  const [helperElement, helper] = useMeasure();
  const windowObj = useWindowSize();

  const isModal = modal ? true : !trigger;

  const TriggerComponent = React.forwardRef((props, ref) =>
    cloneElement(trigger, {
      ...props,
      ref,
    })
  );

  useEffect(() => {
    const setPosition = () => {
      const triggerElement = triggerRef.current;

      const { top, left, transform, arrowLeft, arrowTop } = calculatePosition(
        triggerElement.getBoundingClientRect(),
        content,
        Array.isArray(position) ? position : [position],
        arrow,
        {
          offsetX,
          offsetY,
        },
        {
          top: 0,
          left: 0,
          ...windowObj,
        }
      );

      const Styles = {
        content: {
          top: `${top - helper.top}px`,
          left: `${left - helper.left}px`,
        },
        arrow: {
          transform,
          top: arrowStyle.top || arrowTop,
          left: arrowStyle.left || arrowLeft,
        },
        trigger: {},
      };

      const triggerPosition = triggerElement.style.position;

      if (triggerPosition === "static" || triggerPosition === "") {
        Styles.trigger.position = "relative";
      }

      setStyles(Styles);
    };

    setPosition();
  }, [content, helperElement, helper, position, trigger, windowObj]);

  const isOverlayVisible = isOpen && !(on.indexOf("hover") >= 0);

  if (isModal) {
    return (
      <>
        <TriggerComponent
          ref={triggerRef}
          onClick={() => {
            console.log({ triggerRef });
            setIsOpen(prev => !prev);
          }}
          style={{
            ...styles.trigger,
          }}
        />

        {isOpen && (
          <>
            <div
              ref={helperElement}
              style={{ position: "absolute", top: "0px", left: "0px" }}
            />
            {isOverlayVisible && (
              <StyledPopupOverlay
                className={`popup-overlay ${
                  className !== "" ? `${className}-overlay` : ""
                }`}
                {...{ isModal }}
                onClick={() => {
                  if (closeOnDocumentClick) {
                    setIsOpen(false);
                  }
                }}
                style={{ ...overlayStyle }}
              >
                <StyledPopupContent
                  ref={contentRef}
                  {...{
                    isModal,
                    style: {
                      ...styles.content,
                    },
                  }}
                >
                  {children}
                </StyledPopupContent>
              </StyledPopupOverlay>
            )}
          </>
        )}
      </>
    );
  }

  return (
    <>
      <TriggerComponent
        ref={triggerRef}
        onClick={() => {
          console.log({ triggerRef });
          setIsOpen(prev => !prev);
        }}
        style={{
          ...styles.trigger,
        }}
      />
      {isOpen && (
        <>
          <div
            ref={helperElement}
            style={{ position: "absolute", top: "0px", left: "0px" }}
          />

          <StyledPopupContent
            ref={contentRef}
            {...{
              isModal,
              style: {
                ...styles.content,
              },
            }}
          >
            {arrow && (
              <StyledPopupArrow
                className="popup-arrow"
                style={{
                  ...styles.arrow,
                }}
              />
            )}
            {children}
          </StyledPopupContent>

          {isOverlayVisible && (
            <StyledPopupOverlay
              className={`popup-overlay ${
                className !== "" ? `${className}-overlay` : ""
              }`}
              {...{ isModal }}
              onClick={() => {
                if (closeOnDocumentClick) {
                  setIsOpen(false);
                }
              }}
              style={{ ...overlayStyle }}
            />
          )}
        </>
      )}
    </>
  );
};

PopupAlt.propTypes = {
  trigger: PropTypes.node,
  position: PropTypes.string,
  children: PropTypes.node,
};

PopupAlt.defaultProps = {
  trigger: null,
  position: "bottom center",
  children: null,
};

export default PopupAlt;
