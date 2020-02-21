import React from "react";
import PropTypes from "prop-types";
import { POSITION_TYPES, TRIGGER_TYPES, calculatePosition } from "./utils";
import styles from "./styles";

class Popup extends React.PureComponent {
  constructor(props) {
    super(props);
    const { open, modal, defaultOpen, trigger } = props;
    this.setTriggerRef = r => (this.TriggerEl = r);
    this.setContentRef = r => (this.ContentEl = r);
    this.setArrowRef = r => (this.ArrowEl = r);
    this.setHelperRef = r => (this.HelperEl = r);
    this.timeOut = 0;
    this.state = {
      isOpen: open || defaultOpen,
      modal: modal ? true : !trigger,
      // we create this modal state because the popup can't be a tooltip if the trigger prop doesn't exist
    };
  }

  componentDidMount() {
    const { closeOnEscape, defaultOpen, repositionOnResize } = this.props;
    if (defaultOpen) {
      this.setPosition();
    }
    if (closeOnEscape) {
      window.addEventListener("keyup", this.onEscape);
    }
    if (repositionOnResize) {
      window.addEventListener("resize", this.repositionOnResize);
    }
  }

  componentDidUpdate(prevProps) {
    const { open, disabled } = this.props;
    const { isOpen } = this.state;
    if (prevProps.open !== open) {
      if (open) this.openPopup();
      else this.closePopup(undefined, true);
    }
    if (prevProps.disabled !== disabled && disabled && isOpen) {
      this.closePopup();
    }
  }

  componentWillUnmount() {
    // kill any function to execute if the component is unmounted
    clearTimeout(this.timeOut);

    const { closeOnEscape, repositionOnResize } = this.props;
    // remove events listeners
    if (closeOnEscape) {
      window.removeEventListener("keyup", this.onEscape);
    }
    if (repositionOnResize) {
      window.removeEventListener("resize", this.repositionOnResize);
    }
    this.resetScroll();
  }

  repositionOnResize = () => {
    this.setPosition();
  };

  onEscape = e => {
    if (e.key === "Escape") this.closePopup();
  };

  lockScroll = () => {
    const { lockScroll } = this.props;
    const { modal } = this.state;
    if (modal && lockScroll)
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
  };

  resetScroll = () => {
    const { lockScroll } = this.props;
    const { modal } = this.state;
    if (modal && lockScroll)
      document.getElementsByTagName("body")[0].style.overflow = "auto";
  };

  togglePopup = e => {
    // https://reactjs.org/docs/events.html#event-pooling
    const { isOpen } = this.state;
    e.persist();
    isOpen ? this.closePopup(e) : this.openPopup(e);
  };

  openPopup = e => {
    const { disabled, onOpen } = this.props;
    const { isOpen } = this.state;
    if (isOpen || disabled) return;
    onOpen(e);
    this.setState({ isOpen: true }, () => {
      this.setPosition();
      this.lockScroll();
    });
  };

  closePopup = e => {
    const { onClose } = this.props;
    const { isOpen } = this.state;
    if (!isOpen) return;
    onClose(e);
    this.setState({ isOpen: false }, () => {
      this.resetScroll();
    });
  };

  onMouseEnter = () => {
    clearTimeout(this.timeOut);
    const { mouseEnterDelay } = this.props;
    this.timeOut = setTimeout(() => this.openPopup(), mouseEnterDelay);
  };

  onMouseLeave = () => {
    clearTimeout(this.timeOut);
    const { mouseLeaveDelay } = this.props;
    this.timeOut = setTimeout(() => this.closePopup(), mouseLeaveDelay);
  };

  getTooltipBoundary = () => {
    const { keepTooltipInside } = this.props;
    let boundingBox = {
      top: 0,
      left: 0,

      width: window.innerWidth,

      height: window.innerHeight,
    };
    if (typeof keepTooltipInside === "string") {
      const selector = document.querySelector(keepTooltipInside);
      if (process.env.NODE_ENV !== "production") {
        if (selector === null)
          throw new Error(
            `${keepTooltipInside} selector does not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value`
          );
      }
      boundingBox = selector.getBoundingClientRect();
    }
    return boundingBox;
  };

  setPosition = () => {
    const { modal, isOpen } = this.state;
    if (modal || !isOpen) return;
    const {
      arrow,
      position,
      offsetX,
      offsetY,
      keepTooltipInside,
      arrowStyle,
      className,
    } = this.props;
    const helper = this.HelperEl.getBoundingClientRect();
    const trigger = this.TriggerEl.getBoundingClientRect();
    const content = this.ContentEl.getBoundingClientRect();
    const boundingBox = this.getTooltipBoundary();
    let positions = Array.isArray(position) ? position : [position];

    // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array
    if (keepTooltipInside || Array.isArray(position))
      positions = [...positions, ...POSITION_TYPES];

    const { top, left, transform, arrowLeft, arrowTop } = calculatePosition(
      trigger,
      content,
      positions,
      arrow,
      {
        offsetX,
        offsetY,
      },
      boundingBox
    );

    this.ContentEl.style.top = `${top - helper.top}px`;
    this.ContentEl.style.left = `${left - helper.left}px`;
    if (arrow) {
      this.ArrowEl.style.transform = transform;
      this.ArrowEl.style["-ms-transform"] = transform;
      this.ArrowEl.style["-webkit-transform"] = transform;
      this.ArrowEl.style.top = arrowStyle.top || arrowTop;
      this.ArrowEl.style.left = arrowStyle.left || arrowLeft;
      this.ArrowEl.classList.add(`popup-arrow`);
      if (className !== "") {
        this.ArrowEl.classList.add(`${className}-arrow`);
      }
    }

    if (
      window
        .getComputedStyle(this.TriggerEl, null)
        .getPropertyValue("position") === "static" ||
      window
        .getComputedStyle(this.TriggerEl, null)
        .getPropertyValue("position") === ""
    )
      this.TriggerEl.style.position = "relative";
  };

  addWarperAction = () => {
    const { contentStyle, className, on } = this.props;
    const { modal } = this.state;

    const popupContentStyle = modal
      ? styles.popupContent.modal
      : styles.popupContent.tooltip;

    const childrenElementProps = {
      className: `popup-content ${
        className !== "" ? `${className}-content` : ""
      }`,
      style: { ...popupContentStyle, ...contentStyle },
      ref: this.setContentRef,
      onClick: e => {
        e.stopPropagation();
      },
    };
    if (!modal && on.indexOf("hover") >= 0) {
      childrenElementProps.onMouseEnter = this.onMouseEnter;
      childrenElementProps.onMouseLeave = this.onMouseLeave;
    }
    return childrenElementProps;
  };

  renderTrigger = () => {
    const triggerProps = { key: "T", ref: this.setTriggerRef };
    const { on, trigger } = this.props;
    const { isOpen } = this.state;
    const onAsArray = Array.isArray(on) ? on : [on];
    for (let i = 0, len = onAsArray.length; i < len; i += 1) {
      switch (onAsArray[i]) {
        case "click":
          triggerProps.onClick = this.togglePopup;
          break;
        case "hover":
          triggerProps.onMouseEnter = this.onMouseEnter;
          triggerProps.onMouseLeave = this.onMouseLeave;
          break;
        case "focus":
          triggerProps.onFocus = this.onMouseEnter;
          break;
        default:
      }
    }

    if (typeof trigger === "function")
      return !!trigger && React.cloneElement(trigger(isOpen), triggerProps);

    return !!trigger && React.cloneElement(trigger, triggerProps);
  };

  renderContent = () => {
    const { arrow, arrowStyle, children } = this.props;
    const { modal, isOpen } = this.state;
    return (
      <div {...this.addWarperAction()} key="C">
        {arrow && !modal && (
          <div
            ref={this.setArrowRef}
            style={{ ...styles.popupArrow, ...arrowStyle }}
          />
        )}
        {typeof children === "function"
          ? children(this.closePopup, isOpen)
          : children}
      </div>
    );
  };

  render() {
    const { overlayStyle, closeOnDocumentClick, className, on } = this.props;
    const { modal, isOpen } = this.state;
    const overlay = isOpen && !(on.indexOf("hover") >= 0);
    const ovStyle = modal ? styles.overlay.modal : styles.overlay.tooltip;
    return [
      this.renderTrigger(),
      isOpen && (
        <div
          key="H"
          ref={this.setHelperRef}
          style={{ position: "absolute", top: "0px", left: "0px" }}
        />
      ),
      overlay && (
        <div
          key="O"
          className={`popup-overlay ${
            className !== "" ? `${className}-overlay` : ""
          }`}
          onClick={closeOnDocumentClick ? this.closePopup : undefined}
          style={{ ...ovStyle, ...overlayStyle }}
        >
          {modal && this.renderContent()}
        </div>
      ),
      isOpen && !modal && this.renderContent(),
    ];
  }
}

export default Popup;

Popup.propTypes = {
  arrowStyle: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  contentStyle: PropTypes.shape({}),
  overlayStyle: PropTypes.shape({}),
  className: PropTypes.string,
  modal: PropTypes.bool,
  arrow: PropTypes.bool,
  closeOnDocumentClick: PropTypes.bool,
  repositionOnResize: PropTypes.bool,
  disabled: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  lockScroll: PropTypes.bool,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.element]), // for uncontrolled component we don't need the trigger Element
  on: PropTypes.oneOfType([
    PropTypes.oneOf(TRIGGER_TYPES),
    PropTypes.arrayOf(PropTypes.oneOf(TRIGGER_TYPES)),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  position: PropTypes.oneOfType([
    PropTypes.oneOf(POSITION_TYPES),
    PropTypes.arrayOf(PropTypes.oneOf(POSITION_TYPES)),
  ]),
  keepTooltipInside: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Popup.defaultProps = {
  trigger: null,
  onOpen: () => {},
  onClose: () => {},
  defaultOpen: false,
  open: false,
  disabled: false,
  closeOnDocumentClick: true,
  repositionOnResize: true,
  closeOnEscape: true,
  on: ["click"],
  contentStyle: {},
  arrowStyle: {},
  overlayStyle: {},
  className: "",
  position: "bottom center",
  modal: false,
  lockScroll: false,
  arrow: true,
  offsetX: 0,
  offsetY: 0,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  keepTooltipInside: false,
};
