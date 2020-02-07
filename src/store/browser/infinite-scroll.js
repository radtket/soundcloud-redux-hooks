import { Subject, NEVER, fromEvent } from "rxjs";
import {
  debounceTime,
  filter,
  map,
  publish,
  refCount,
  switchMap,
  takeUntil,
  tap,
} from "rxjs/operators";

const scrollData$ = fromEvent(window, "scroll").pipe(
  debounceTime(100),
  event$ => {
    return event$.pipe(
      map(({ target: { body, defaultView } }) => {
        return {
          windowInnerHeight: defaultView.innerHeight,
          windowPageYOffset: defaultView.pageYOffset,
          bodyScrollHeight: body.scrollHeight,
        };
      })
    );
  },
  publish(),
  refCount()
);

const end$ = new Subject();
const never$ = NEVER;
const pause$ = new Subject();

const checkPosition$ = scrollData$.pipe(
  filter(data => {
    return (
      data.windowInnerHeight + data.windowPageYOffset >=
      data.bodyScrollHeight - data.windowInnerHeight
    );
  })
);

const infiniteScroll$ = pause$.pipe(
  switchMap(pause => {
    return pause ? never$ : checkPosition$;
  })
);

const infiniteScroll = {
  end: () => end$.next(true),
  pause: () => pause$.next(true),
  resume: () => pause$.next(false),

  start: (callback, startPaused = false) => {
    const unsubscribe = infiniteScroll$
      .pipe(
        takeUntil(end$),
        tap(() => callback())
      )
      .subscribe();

    pause$.next(startPaused);
    return unsubscribe;
  },
};

export default infiniteScroll;
