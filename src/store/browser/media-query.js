import { combineLatest, fromEventPattern } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

// Actions
import mediaQueryChanged from "./actions";

const em = value => {
  if (typeof value !== "number") {
    throw new TypeError("ERROR @ em() : expected param `value` to be a number");
  }

  return value === 0 ? value : `${value / 16}em`;
};

const getMedia = ({ type, minWidth, maxWidth, orientation }) => {
  let media = type || "screen";

  if (minWidth) {
    media += ` and (min-width: ${em(minWidth)})`;
  }

  if (maxWidth) {
    media += ` and (max-width: ${em(maxWidth)})`;
  }

  if (orientation) {
    media += ` and (orientation: ${orientation})`;
  }

  return media;
};

const getMqlObservables = rules => {
  const observables = rules.map(rule => {
    const mediaQueryList = matchMedia(getMedia(rule));

    return fromEventPattern(
      handler => {
        handler(mediaQueryList);
        mediaQueryList.addListener(handler);
      },
      handler => mediaQueryList.removeListener(handler),
      mql => ({ mql, rule })
    );
  });

  return observables;
};

const getResults = updates => {
  return updates.reduce((acc, { rule, mql }) => {
    acc[rule.id] = mql.matches;
    return acc;
  }, {});
};

const mediaQuery = {
  matches: (rules, callback) => {
    const subscription = combineLatest(...getMqlObservables(rules))
      .pipe(debounceTime(1), map(getResults))
      .subscribe(results => callback(mediaQueryChanged(results)));

    return () => subscription.unsubscribe();
  },
};

export default mediaQuery;
