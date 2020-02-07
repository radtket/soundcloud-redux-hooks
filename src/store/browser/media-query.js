import { combineLatest, fromEventPattern } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import browserActions from "./actions";

export const em = value => {
  if (typeof value !== "number") {
    throw new TypeError("ERROR @ em() : expected param `value` to be a number");
  }

  return value === 0 ? value : `${value / 16}em`;
};

export const getMedia = rule => {
  let media = rule.type || "screen";

  if (rule.minWidth) media += ` and (min-width: ${em(rule.minWidth)})`;
  if (rule.maxWidth) media += ` and (max-width: ${em(rule.maxWidth)})`;
  if (rule.orientation) media += ` and (orientation: ${rule.orientation})`;

  return media;
};

export const getMqlObservables = rules => {
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

export const getResults = updates => {
  return updates.reduce((acc, cur) => {
    acc[cur.rule.id] = cur.mql.matches;
    return acc;
  }, {});
};

export const mediaQuery = {
  matches: (rules, callback) => {
    const subscription = combineLatest(...getMqlObservables(rules))
      .pipe(debounceTime(1), map(getResults))
      .subscribe(results =>
        callback(browserActions.mediaQueryChanged(results))
      );

    return () => subscription.unsubscribe();
  },
};
