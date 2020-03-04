import React from "react";

export const IconPlay = props => (
  <svg {...props} viewBox="0 0 44.31 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.34 22.38L2.73.22A1.86 1.86 0 00.9.26 1.85 1.85 0 000 1.85v44.3a1.83 1.83 0 00.9 1.59 1.79 1.79 0 001 .26 1.83 1.83 0 00.88-.23l40.56-22.15a1.84 1.84 0 000-3.24z" />
  </svg>
);

export const IconPause = props => (
  <svg {...props} viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 0H3C1.35 0 0 1.35 0 3v42c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM37 0H27c-1.65 0-3 1.35-3 3v42c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3z" />
  </svg>
);

export const IconNext = props => (
  <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.49 22.52L2.95.37A1.82 1.82 0 001.02.2C.4.51 0 1.15 0 1.85v44.31c0 .7.4 1.34 1.02 1.65.26.12.55.19.83.19.39 0 .78-.13 1.11-.37L32.5 25.48a1.842 1.842 0 00-.01-2.96zM46.15 0h-3.69c-1.02 0-1.85.83-1.85 1.85v44.31c0 1.02.83 1.85 1.85 1.85h3.69c1.02 0 1.85-.83 1.85-1.85V1.85C48 .83 47.17 0 46.15 0z" />
  </svg>
);

export const IconPrev = props => (
  <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.51 25.48l29.54 22.15c.55.42 1.31.49 1.93.17A1.85 1.85 0 0048 46.15V1.85c0-.7-.4-1.34-1.02-1.65-.26-.13-.55-.2-.83-.2-.39 0-.78.13-1.11.37L15.51 22.52c-.47.35-.74.9-.74 1.48s.27 1.13.74 1.48zM1.85 48h3.69c1.02 0 1.85-.83 1.85-1.85V1.85A1.859 1.859 0 005.54 0H1.85C.83 0 0 .83 0 1.85v44.31C0 47.17.83 48 1.85 48z" />
  </svg>
);

export const IconRepeat = props => (
  <svg
    {...props}
    viewBox="0 0 512.016 512.016"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M507.336 100.696l-96-96a15.964 15.964 0 00-17.44-3.456c-5.984 2.496-9.888 8.288-9.888 14.752v48h-208c-97.216 0-176 78.784-176 176 0 8.832 7.168 16 16 16h64c8.832 0 16-7.168 16-16 0-44.192 35.808-80 80-80h208v48c0 6.464 3.904 12.32 9.888 14.784a15.964 15.964 0 0017.44-3.456l96-96c6.24-6.24 6.24-16.384 0-22.624zM496.008 255.992h-64c-8.832 0-16 7.168-16 16 0 44.192-35.808 80-80 80h-208v-48c0-6.464-3.904-12.32-9.888-14.784s-12.832-1.088-17.44 3.488l-96 96c-6.24 6.24-6.24 16.384 0 22.624l96 96c4.576 4.576 11.456 5.952 17.44 3.456s9.888-8.32 9.888-14.784v-48h208c97.216 0 176-78.784 176-176 0-8.832-7.168-16-16-16z" />
  </svg>
);

export const IconShuffle = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M506.24 371.7l-96-80c-4.768-4-11.424-4.8-17.024-2.208A16.02 16.02 0 00384 303.988v48h-26.784c-22.208 0-42.496-11.264-54.272-30.08l-103.616-165.76c-23.52-37.664-64.096-60.16-108.544-60.16H0v64h90.784c22.208 0 42.496 11.264 54.272 30.08l103.616 165.76c23.552 37.664 64.128 60.16 108.544 60.16H384v48a16.02 16.02 0 009.216 14.496 16.232 16.232 0 006.784 1.504c3.68 0 7.328-1.248 10.24-3.712l96-80c3.68-3.04 5.76-7.552 5.76-12.288 0-4.736-2.08-9.248-5.76-12.288z" />
    <path d="M506.24 115.7l-96-80c-4.768-3.968-11.424-4.8-17.024-2.176C387.584 36.116 384 41.78 384 47.988v48h-26.784c-44.448 0-85.024 22.496-108.544 60.16l-5.792 9.28 37.728 60.384 22.336-35.744c11.776-18.816 32.064-30.08 54.272-30.08H384v48c0 6.208 3.584 11.872 9.216 14.496a16.232 16.232 0 006.784 1.504c3.68 0 7.328-1.28 10.24-3.712l96-80c3.68-3.04 5.76-7.552 5.76-12.288 0-4.736-2.08-9.248-5.76-12.288zM167.392 286.164l-22.304 35.744c-11.776 18.816-32.096 30.08-54.304 30.08H0v64h90.784c44.416 0 84.992-22.496 108.544-60.16l5.792-9.28-37.728-60.384z" />
  </svg>
);

export const IconSound = props => (
  <svg {...props} viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
    <path d="M278.944 17.577c-5.568-2.656-12.128-1.952-16.928 1.92L106.368 144.009H32c-17.632 0-32 14.368-32 32v128c0 17.664 14.368 32 32 32h74.368l155.616 124.512A16.158 16.158 0 00272 464.009c2.368 0 4.736-.544 6.944-1.6a15.968 15.968 0 009.056-14.4v-416a16.05 16.05 0 00-9.056-14.432zM368.992 126.857c-6.304-6.208-16.416-6.112-22.624.128-6.208 6.304-6.144 16.416.128 22.656C370.688 173.513 384 205.609 384 240.009s-13.312 66.496-37.504 90.368c-6.272 6.176-6.336 16.32-.128 22.624a15.943 15.943 0 0011.36 4.736c4.064 0 8.128-1.536 11.264-4.64C399.328 323.241 416 283.049 416 240.009s-16.672-83.232-47.008-113.152z" />
    <path d="M414.144 81.769c-6.304-6.24-16.416-6.176-22.656.096-6.208 6.272-6.144 16.416.096 22.624C427.968 140.553 448 188.681 448 240.009s-20.032 99.424-56.416 135.488c-6.24 6.24-6.304 16.384-.096 22.656 3.168 3.136 7.264 4.704 11.36 4.704 4.064 0 8.16-1.536 11.296-4.64C456.64 356.137 480 299.945 480 240.009s-23.36-116.128-65.856-158.24z" />
  </svg>
);

export const IconMute = props => (
  <svg
    {...props}
    viewBox="0 0 448.075 448.075"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M352.021 16.075c0-6.08-3.52-11.84-8.96-14.4-5.76-2.88-12.16-1.92-16.96 1.92l-141.76 112.96 167.68 167.68V16.075zM443.349 420.747l-416-416c-6.24-6.24-16.384-6.24-22.624 0s-6.24 16.384 0 22.624l100.672 100.704h-9.376c-9.92 0-18.56 4.48-24.32 11.52-4.8 5.44-7.68 12.8-7.68 20.48v128c0 17.6 14.4 32 32 32h74.24l155.84 124.48c2.88 2.24 6.4 3.52 9.92 3.52 2.24 0 4.8-.64 7.04-1.6 5.44-2.56 8.96-8.32 8.96-14.4v-57.376l68.672 68.672c3.136 3.136 7.232 4.704 11.328 4.704s8.192-1.568 11.328-4.672c6.24-6.272 6.24-16.384 0-22.656z" />
  </svg>
);

export const IconHeart = props => (
  <svg
    {...props}
    viewBox="0 0 436.245 436.245"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="fill"
      d="M386.09 67.657c22.465 22.988 33.959 53.29 33.959 84.114 0 30.302-11.494 60.604-34.482 84.114L217.861 403.069 50.155 235.363c-45.976-45.976-45.976-121.731 0-167.706 22.988-22.988 53.29-34.482 84.114-34.482 30.302 0 60.604 11.494 84.114 34.482 45.976-45.975 121.731-45.975 167.707 0z"
    />
    <path
      className="stroke"
      d="M217.861 418.743c-4.18 0-7.837-1.567-10.971-4.702L39.184 246.335c-52.245-52.245-52.245-137.404 0-189.649 25.078-25.078 59.037-39.184 95.086-39.184 30.825 0 60.082 10.449 84.114 29.257 23.51-18.808 52.767-29.257 84.114-29.257 36.049 0 69.486 14.106 95.086 39.184 25.078 25.6 38.661 59.037 38.661 95.086 0 35.527-13.584 69.486-39.184 95.086L229.355 414.041c-3.657 3.134-7.314 4.702-11.494 4.702zM134.269 48.849c-27.69 0-53.812 10.449-73.143 29.78-40.229 40.229-40.229 105.535 0 145.763l156.735 156.735 156.735-156.212c19.331-19.853 29.78-45.453 29.78-73.143s-10.449-53.812-29.257-73.143c-19.331-19.331-44.931-29.78-72.62-29.78-27.69 0-53.29 10.449-72.62 29.78-6.269 6.269-15.673 6.269-21.943 0-20.377-19.331-46.499-29.78-73.667-29.78z"
    />
  </svg>
);

export const IconSearch = props => (
  <svg {...props} viewBox="0 0 512.016 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M202.668 405.34C90.922 405.34 0 314.418 0 202.676 0 90.93 90.922.008 202.668.008c111.742 0 202.664 90.922 202.664 202.668 0 111.742-90.922 202.664-202.664 202.664zm0-373.332C108.566 32.008 32 108.574 32 202.676c0 94.101 76.566 170.664 170.668 170.664s170.664-76.563 170.664-170.664c0-94.102-76.562-170.668-170.664-170.668zm0 0" />
    <path d="M496 512.008a15.89 15.89 0 01-11.309-4.692l-161.277-161.28c-6.25-6.25-6.25-16.384 0-22.638 6.25-6.25 16.383-6.25 22.633 0L507.328 484.68c6.25 6.25 6.25 16.382 0 22.636A15.968 15.968 0 01496 512.008zm0 0" />
  </svg>
);

// Social Media
export const IconGooglePlus = props => (
  <svg {...props} viewBox="0 -91 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M166 60c34.668 0 66.027 17.79 84 42.3l42.598-42.902C267.12 26.27 218.086 0 166 0 74.8 0 0 73.8 0 165s74.8 165 166 165c75.602 0 139.2-50.7 158.7-120 4.198-14.402 6.3-29.402 6.3-45v-15H181v59.988h79.5C244 245.391 207.7 270 166 270c-57.898 0-106-47.102-106-105S108.102 60 166 60zm0 0M466 90h-60v45h-45v60h45v45h60v-45h46v-60h-46zm0 0" />
  </svg>
);

export const IconSpotify = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 0C115.39 0 0 115.39 0 256s115.39 256 256 256 256-115.39 256-256S396.61 0 256 0zm94.773 380.773c-68.086-29.543-142.687-38.23-215.8-25.195l-5.274-29.527c78.883-14.121 159.492-4.692 233.028 27.215zm45.34-78.308c-88.86-40.867-190.593-52.836-286.406-33.707l-6.52-29.297.762-.145c101.938-20.304 210.145-7.574 304.703 35.903zm25.547-87.113c-98.672-42.48-211.305-55.739-317.402-37.133l-5.188-29.563c111.696-19.57 230.45-5.64 334.453 39.156zm0 0" />
  </svg>
);

export const IconSoundCloud = props => (
  <svg {...props} viewBox="0 -121 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M180 0h30v270h-30zm0 0M120 90h30v180h-30zm0 0M60 60h30v210H60zm0 0M0 150h30v120H0zm0 0M413.457 90.309C394.723 36.489 343.141 0 285 0a136.321 136.321 0 00-33.723 4.246L240 7.148V270h182c49.629 0 90-40.371 90-90 .016-52.133-46.57-93.723-98.543-89.691zm0 0" />
  </svg>
);

export const IconSongKick = props => (
  <svg {...props} viewBox="0 0 134 134" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.5 15.6c-9-6.7-19-11.2-31.5-13.3v59.8l17.9-25h19.6L99 68.6s5.2 8.3 8.3 13.2c3.2 5 6.2 6.3 10.8 6.3h3.1v15.5h-4.8c-9.9 0-15.9-1.8-20.4-8.7C93.2 90.5 84 76 84 76v27.5H67.6V1H67C45.8 1 31.2 6.1 18.5 15.6.3 29.3 1 47.5 1 67s-.7 37.8 17.5 51.4C31.2 127.9 45.8 133 67 133s35.8-5.1 48.5-14.6C133.7 104.7 133 86.5 133 67s.7-37.7-17.5-51.4M37 104.3c-10.2 0-18.5-1.9-25.3-8.8L22.2 85c3.5 3.5 9.5 4.7 14.9 4.7 6.5 0 9.6-2.2 9.6-6 0-1.6-.4-2.9-1.3-3.9-.8-.8-2.2-1.5-4.4-1.8l-8.1-1.1c-5.9-.9-10.4-2.9-13.4-6-3.1-3.2-4.6-7.7-4.6-13.4 0-12.2 9.2-21.1 24.3-21.1 9.6 0 16.8 2.2 22.5 8L51.4 54.7c-4.2-4.2-9.7-3.9-12.6-3.9-5.7 0-8.1 3.3-8.1 6.2 0 .8.3 2.1 1.3 3.1.8.8 2.2 1.7 4.6 2l8 1.1c6 .8 10.3 2.7 13.1 5.5 3.6 3.5 5 8.4 5 14.6.1 13.6-11.6 21-25.7 21" />
  </svg>
);

export const IconFacebook = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M288 176v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80h-96z" />
  </svg>
);

export const IconTwitter = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
  </svg>
);

export const IconInstagram = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z" />
    <path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z" />
    <circle cx="393.6" cy="118.4" r="17.056" />
  </svg>
);

export const IconYouTube = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M490.24 113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936 80.864 322.848 80 256.064 80c-66.912 0-144.032.864-174.656 2.912-30.624 1.76-45.728 6.272-59.744 31.008C7.36 138.592 0 181.088 0 255.904v.256c0 74.496 7.36 117.312 21.664 141.728 14.016 24.704 29.088 29.184 59.712 31.264C112.032 430.944 189.152 432 256.064 432c66.784 0 143.872-1.056 174.56-2.816 30.688-2.08 45.76-6.56 59.648-31.264C504.704 373.504 512 330.688 512 256.192v-.16-.096c0-74.848-7.296-117.344-21.76-142.016zM192 352V160l160 96-160 96z" />
  </svg>
);

export const IconFavorite = props => (
  <svg {...props} viewBox="0 -21 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M370.793 0C324.609 0 282.133 22.336 256 58.73 229.867 22.336 187.39 0 141.207 0 63.359 0 0 63.23 0 140.95c0 138.26 211.094 303.124 230.059 317.675 6.785 6.824 16.129 10.707 25.941 10.707s19.156-3.883 25.941-10.707C300.906 444.075 512 279.211 512 140.949 512 63.23 448.64 0 370.793 0zm0 0" />
  </svg>
);

export const IconGlobe = props => (
  <svg {...props} viewBox="0 0 489.6 489.6" xmlns="http://www.w3.org/2000/svg">
    <path d="M255.467 255.467v106.667h91.819c8.619-32.107 13.739-68.437 14.571-106.667h-106.39zM42.496 106.133h83.456c12.885-41.408 31.381-75.243 53.739-97.664C123.2 24.021 74.816 59.051 42.496 106.133zM106.411 255.467H0c1.664 38.656 12.011 75.051 29.547 107.051.64-.128 1.237-.384 1.92-.384h88.512c-8.064-32.278-12.822-68.267-13.568-106.667zM347.285 127.467h-91.819v106.667h106.389c-.831-38.23-5.951-74.561-14.57-106.667zM255.467.64v105.493h85.376C321.365 48.085 290.368 7.573 255.467.64zM460.267 127.467H369.6c8.064 32.277 12.843 68.267 13.589 106.667h106.389c-1.663-38.507-11.903-74.753-29.311-106.667zM309.888 8.469c22.379 22.421 40.875 56.256 53.781 97.664h83.435c-32.341-47.082-80.725-82.112-137.216-97.664zM29.312 127.467C11.904 159.381 1.664 195.627 0 234.133h106.389c.768-38.4 5.525-74.389 13.589-106.667H29.312zM255.467 383.467V488.96c34.901-6.955 65.899-47.467 85.376-105.493h-85.376zM363.648 383.467c-12.885 41.408-31.381 75.243-53.76 97.664a245.454 245.454 0 00137.216-97.664h-83.456zM383.211 255.467c-.768 38.4-5.525 74.389-13.589 106.667h88.512c.683 0 1.28.256 1.92.384 17.536-32 27.883-68.395 29.547-107.051h-106.39zM148.757 106.133h85.376V.64c-34.901 6.933-65.898 47.445-85.376 105.493zM148.757 383.467c19.477 58.048 50.475 98.56 85.376 105.493V383.467h-85.376zM125.931 383.467H42.496a245.582 245.582 0 00137.216 97.664c-22.379-22.422-40.875-56.256-53.781-97.664zM127.744 255.467c.832 38.229 5.952 74.56 14.571 106.667h91.819V255.467h-106.39zM142.315 127.467c-8.619 32.107-13.739 68.437-14.571 106.667h106.389V127.467h-91.818z" />
  </svg>
);

export const IconBandsInTown = props => (
  <svg {...props} viewBox="0 0 50.8 54.2" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.3 0h10.4v27.8H40.3zM26.4 14.6h10.4v13.2H26.4zM13.2 14.6h10.4v13.2H13.2z" />
    <path d="M0 0v54.2h50.8V31.5H13.5v9.9h26.8v2.9H10.5V0H0z" />
  </svg>
);

export const IconGenius = props => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.897 1.235c-.36.001-.722.013-1.08.017-.218-.028-.371.225-.352.416-.035 1.012.023 2.025-.016 3.036-.037.841-.555 1.596-1.224 2.08-.5.345-1.118.435-1.671.663.121.78.434 1.556 1.057 2.07 1.189 1.053 3.224.86 4.17-.426.945-1.071.453-2.573.603-3.854.286-.48.937-.132 1.317-.49-.34-1.249-.81-2.529-1.725-3.472a11.125 11.125 0 00-1.08-.04zm-10.42.006C.53 2.992-.386 5.797.154 8.361c.384 2.052 1.682 3.893 3.45 4.997.134-.23.23-.476.09-.73-.95-2.814-.138-6.119 1.986-8.19.014-.986.043-1.976-.003-2.961l-.188-.214c-1.003-.051-2.008 0-3.01-.022zm17.88.055l-.205.356c.265.938.6 1.862.72 2.834.58 3.546-.402 7.313-2.614 10.14-1.816 2.353-4.441 4.074-7.334 4.773-2.66.66-5.514.45-8.064-.543-.068.079-.207.237-.275.318 2.664 2.629 6.543 3.969 10.259 3.498 3.075-.327 5.995-1.865 8.023-4.195 1.935-2.187 3.083-5.07 3.125-7.992.122-3.384-1.207-6.819-3.636-9.19z" />
  </svg>
);

export const IconUser = props => (
  <svg {...props} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.85 17.9A5.8 5.8 0 0115.1 6.7a5.871 5.871 0 015.931 5.8 5.761 5.761 0 01-3.477 5.3 13.357 13.357 0 018.691 4.5 13.006 13.006 0 002.455-7.6A13.422 13.422 0 0015.2 1.4 13.553 13.553 0 001.5 14.8a13.248 13.248 0 003.17 8.5 13.354 13.354 0 018.18-5.4z"
      data-name="Path 855"
      fill="none"
    />
    <path
      d="M19.299 12.656a4.3 4.3 0 10-4.3 4.3 4.268 4.268 0 004.3-4.3z"
      data-name="Path 856"
      fill="none"
    />
    <path
      d="M17.05 19.6a2.073 2.073 0 01-.722-.1 9.079 9.079 0 00-1.65 0c-.309 0-.722.1-1.032.1A12.354 12.354 0 005.6 24.7a13.8 13.8 0 0019.6-.8 12.077 12.077 0 00-8.15-4.3z"
      data-name="Path 857"
      fill="none"
    />
    <path
      d="M15 0a15 15 0 1015 15A14.995 14.995 0 0015 0zm0 1.52A13.446 13.446 0 0126.121 22.7a13.5 13.5 0 00-8.673-4.561 5.842 5.842 0 003.469-5.372A5.9 5.9 0 0015 6.892a5.73 5.73 0 00-5.816 5.777 5.944 5.944 0 003.775 5.473 14.127 14.127 0 00-8.265 5.372A13.361 13.361 0 0115 1.52zm.1 15.507a4.358 4.358 0 114.388-4.358 4.474 4.474 0 01-4.388 4.358zM15 28.378a13.245 13.245 0 01-9.285-3.75 12.193 12.193 0 017.959-5.169 3.853 3.853 0 001.02-.1 8.766 8.766 0 011.633 0c.2 0 .51.1.714.1a11.7 11.7 0 018.159 4.359 13.55 13.55 0 01-10.2 4.56z"
      data-name="Path 858"
    />
  </svg>
);

export const IconClose = props => (
  <svg {...props} viewBox="0 0 329.269 329" xmlns="http://www.w3.org/2000/svg">
    <path d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0" />
  </svg>
);

export const IconPlaylist = props => (
  <svg
    {...props}
    viewBox="0 0 448.138 448.138"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M436.768 151.845c-13.152-26.976-35.744-42.08-57.6-56.704-16.288-10.912-31.648-21.216-42.528-35.968l-2.016-2.72c-6.4-8.608-13.696-18.368-14.816-26.56-1.12-8.288-7.648-14.048-16.928-13.792-8.384.576-14.88 7.552-14.88 15.968v285.12c-13.408-8.128-29.92-13.12-48-13.12-44.096 0-80 28.704-80 64s35.904 64 80 64c44.128 0 80-28.704 80-64V181.573c24.032 9.184 63.36 32.576 74.176 87.2-2.016 2.976-3.936 6.208-6.176 8.736-5.856 6.624-5.184 16.736 1.44 22.56 6.592 5.888 16.704 5.184 22.56-1.44 20.032-22.752 33.824-58.784 35.968-94.016 1.056-17.376-2.816-35.616-11.2-52.768zM16 48.069h192c8.832 0 16-7.168 16-16s-7.168-16-16-16H16c-8.832 0-16 7.168-16 16s7.168 16 16 16zM16 144.069h192c8.832 0 16-7.168 16-16s-7.168-16-16-16H16c-8.832 0-16 7.168-16 16s7.168 16 16 16zM112 208.069H16c-8.832 0-16 7.168-16 16s7.168 16 16 16h96c8.832 0 16-7.168 16-16s-7.168-16-16-16zM112 304.069H16c-8.832 0-16 7.168-16 16s7.168 16 16 16h96c8.832 0 16-7.168 16-16s-7.168-16-16-16z" />
  </svg>
);

export const IconEllipsis = props => (
  <svg {...props} viewBox="0 -192 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M320 64c0 35.348-28.652 64-64 64s-64-28.652-64-64 28.652-64 64-64 64 28.652 64 64zm0 0M128 64c0 35.348-28.652 64-64 64S0 99.348 0 64 28.652 0 64 0s64 28.652 64 64zm0 0M512 64c0 35.348-28.652 64-64 64s-64-28.652-64-64 28.652-64 64-64 64 28.652 64 64zm0 0" />
  </svg>
);

export const IconEllipsisVerital = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM256 384c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM256 0c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z" />
  </svg>
);

export const IconHeadphones = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M480 288v-32c0-123.52-100.512-224-224-224C132.48 32 32 132.48 32 256v32c-17.632 0-32 14.336-32 32v128c0 17.664 14.368 32 32 32h64c17.632 0 32-14.336 32-32V320c0-17.664-14.368-32-32-32v-32c0-88.224 71.776-160 160-160s160 71.776 160 160v32c-17.664 0-32 14.336-32 32v128c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32V320c0-17.664-14.336-32-32-32z" />
  </svg>
);

export const IconComment = props => (
  <svg
    {...props}
    viewBox="-21 -47 682.667 682"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M552.012-1.332H87.988C39.473-1.332 0 38.141 0 86.656V370.63c0 48.422 39.3 87.824 87.676 87.988v128.871l185.183-128.86h279.153c48.515 0 87.988-39.472 87.988-88V86.657c0-48.515-39.473-87.988-87.988-87.988zM468.703 328.68H171.297v-37.5h297.406zm0-80H171.297v-37.5h297.406zm0-80H171.297v-37.5h297.406zm0 0" />
  </svg>
);

export const IconShare = props => (
  <svg {...props} viewBox="0 0 511.99 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M507.51 148.89l-138.67-144a16.011 16.011 0 00-17.49-3.73C345.3 3.61 341.33 9.48 341.33 16v69.34H336c-114.69 0-208 93.31-208 208v32c0 7.42 5.23 13.61 12.46 15.3 1.18.3 2.35.43 3.52.43 6.04 0 11.82-3.54 14.61-9.11 30-60.01 90.3-97.28 157.4-97.28h25.34V304c0 6.53 3.97 12.4 10.03 14.83 6 2.45 12.97.96 17.49-3.73l138.67-144c5.97-6.21 5.97-15.98-.01-22.21z" />
    <path d="M447.99 512H64c-35.28 0-64-28.71-64-64V149.34c0-35.28 28.71-64 64-64h64c11.8 0 21.33 9.54 21.33 21.33S139.8 128 128 128H64c-11.78 0-21.34 9.56-21.34 21.34V448c0 11.78 9.56 21.34 21.34 21.34h384c11.77 0 21.33-9.56 21.33-21.34V277.34c0-11.8 9.54-21.34 21.33-21.34 11.8 0 21.34 9.54 21.34 21.34V448c-.01 35.29-28.72 64-64.01 64z" />
  </svg>
);

export const IconDownload = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M448 512H64c-35.285 0-64-28.715-64-64v-85.332c0-11.777 9.559-21.336 21.332-21.336 11.777 0 21.336 9.559 21.336 21.336V448c0 11.754 9.578 21.332 21.332 21.332h384c11.754 0 21.332-9.578 21.332-21.332v-85.332c0-11.777 9.559-21.336 21.336-21.336 11.773 0 21.332 9.559 21.332 21.336V448c0 35.285-28.715 64-64 64zm0 0" />
    <path d="M356.414 271.082l-85.332 85.332c-8.34 8.344-21.824 8.344-30.164 0l-85.332-85.332a21.336 21.336 0 01-4.633-23.254 21.37 21.37 0 0119.715-13.16h64V21.332C234.668 9.559 244.223 0 256 0s21.332 9.559 21.332 21.332v213.336h64a21.37 21.37 0 0119.715 13.16 21.336 21.336 0 01-4.633 23.254zm0 0" />
  </svg>
);

export const IconChevronDown = props => (
  <svg
    {...props}
    viewBox="0 0 551.13 551.13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M275.565 361.679L51.668 137.783H0l275.565 275.565L551.13 137.783h-51.668z" />
  </svg>
);

export const IconChevronRight = props => (
  <svg {...props} viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M208 256L0 464v48l256-256L0 0v48z" />
  </svg>
);

export const IconAlbum = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M496 128H16c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16h480c8.832 0 16-7.168 16-16V144c0-8.832-7.168-16-16-16zM336 286.016c-8.832 0-16-7.168-16-16 0-21.376-17.504-33.6-32-40.032V400c0 26.912-28.096 48-64 48s-64-21.088-64-48 28.096-48 64-48c11.808 0 22.592 2.464 32 6.464V208c0-4.768 2.112-9.28 5.792-12.32s8.512-4.256 13.184-3.392C301.632 197.28 352 219.968 352 270.016c0 8.832-7.168 16-16 16zM448 80c0-8.832-7.168-16-16-16H80c-8.832 0-16 7.168-16 16v16h384V80zM384 16c0-8.832-7.168-16-16-16H144c-8.832 0-16 7.168-16 16v16h256V16z" />
  </svg>
);

export const IconMic = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M215.996 128c0 1.6.416 3.104.48 4.704l-172.8 209.12c-5.28 6.336-4.8 15.648 1.024 21.504l48 48A16.078 16.078 0 00103.996 416c3.424 0 6.848-1.088 9.728-3.328l102.272-78.432V480h-48c-8.832 0-16 7.168-16 16s7.168 16 16 16h128c8.832 0 16-7.168 16-16s-7.168-16-16-16h-48V309.696l72.992-56c7.488 1.344 15.136 2.304 23.008 2.304 29.536 0 56.416-10.464 78.08-27.296L243.292 49.92C226.46 71.616 215.996 98.496 215.996 128zM343.996 0c-29.504 0-56.384 10.464-78.08 27.296L444.7 206.08c16.832-21.696 27.296-48.576 27.296-78.08 0-70.592-57.408-128-128-128z" />
  </svg>
);

export const IconHomeOutline = props => (
  <svg {...props} viewBox="0 0 512 512.011" xmlns="http://www.w3.org/2000/svg">
    <path d="M400.004 512.012h-288c-26.473 0-48-21.528-48-48V277.344H26.672c-14.7 0-26.668-11.969-26.668-26.668 0-7.059 2.883-13.973 7.894-18.985L244.934 4.45c6.187-5.933 15.957-5.933 22.144 0l236.8 226.985c5.247 5.27 8.126 12.183 8.126 19.242 0 14.699-11.965 26.668-26.664 26.668h-37.336v186.668c0 26.472-21.524 48-48 48zM39.879 245.344h40.125c8.832 0 16 7.168 16 16v202.668c0 8.832 7.168 16 16 16h288c8.832 0 16-7.168 16-16V261.344c0-8.832 7.168-16 16-16h40.129L256.003 38.176zm441.621 8.96h.21zm0 0" />
  </svg>
);

export const IconHome = props => (
  <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M503.871 231.434L267.071 4.449c-6.184-5.933-15.958-5.933-22.141 0L7.895 231.668C2.879 236.684 0 243.594 0 250.656c0 14.7 11.969 26.668 26.668 26.668H64v192c0 23.57 19.094 42.664 42.668 42.664h298.664c23.574 0 42.668-19.093 42.668-42.664v-192h37.332c14.7 0 26.668-11.969 26.668-26.668 0-7.062-2.879-13.972-8.129-19.222zm0 0" />
  </svg>
);

export const IconDiscover = props => (
  <svg {...props} viewBox="0 0 512 512.789" xmlns="http://www.w3.org/2000/svg">
    <path d="M256.395 192.79c-35.286 0-64 28.714-64 64 0 27.776 17.898 51.241 42.667 60.073v174.594c0 11.773 9.555 21.332 21.333 21.332 11.777 0 21.332-9.559 21.332-21.332V316.863c24.77-8.832 42.668-32.297 42.668-60.074 0-35.285-28.715-64-64-64zm0 0" />
    <path d="M256.395 0C115.23 0 .395 114.836.395 256c0 68.48 26.667 132.758 75.113 180.95 8.387 8.32 21.89 8.277 30.187-.063 8.32-8.364 8.278-21.867-.062-30.188C65.27 366.57 43.063 313.066 43.063 256c0-117.633 95.699-213.332 213.332-213.332 117.632 0 213.332 95.7 213.332 213.332 0 57.047-22.207 110.57-62.547 150.7-8.344 8.32-8.387 21.823-.067 30.187a21.316 21.316 0 0015.125 6.27 21.332 21.332 0 0015.063-6.208C485.727 388.758 512.395 324.5 512.395 256c0-141.14-114.836-256-256-256zm0 0" />
    <path d="M256.395 85.332c-94.102 0-170.668 76.566-170.668 170.668 0 45.652 17.816 88.492 50.175 120.598 8.364 8.277 21.848 8.234 30.188-.106 8.3-8.363 8.234-21.867-.106-30.187-24.257-24.024-37.59-56.106-37.59-90.305 0-70.594 57.407-128 128-128s128 57.406 128 128c0 34.2-13.332 66.262-37.566 90.305-8.363 8.297-8.406 21.8-.11 30.187a21.306 21.306 0 0015.15 6.293c5.417 0 10.859-2.07 15.038-6.187 32.34-32.106 50.156-74.922 50.156-120.598 0-94.102-76.566-170.668-170.667-170.668zm0 0" />
  </svg>
);

export const IconSoundCloudAuth = props => (
  <svg
    {...props}
    viewBox="0 0 692.01 692.01"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M431.67 75.52c.84 7.93 6.72 11.64 10.21 13.86 5.83 3.7 19.46 12.35 19.46 54.79v86.53c0 8 4.76 13.87 12.72 13.87a9.59 9.59 0 011.64 2.71c-.66 13.38-7.26 33.88-11.42 45.18-8.44 5.62-17.35 17.59-17.35 39.13 0 16.34-5.6 23.7-10.56 30.18-1.21 1.62-2.3 3.09-3.23 4.44a14.43 14.43 0 0024 16l2.17-3c6.17-8.08 16.46-21.6 16.46-47.69 0-10.21 3.06-14.42 3.49-14.85a14.36 14.36 0 009.89-8.63c1.61-3.95 15.45-39.3 15.45-63a14.25 14.25 0 00-.43-3.49c-1.56-6.34-6-15.57-14-21v-76.39c0-46.45-14.19-65.51-29.16-76.55C458.23 45.24 434.24 0 346 0c-89.32 0-144.16 84-144.16 144.17v76.44c-8 5.42-12.4 14.67-14 21a14.5 14.5 0 00-.43 3.49c0 23.73 13.87 59.08 15.46 63 1.73 4.3 4.26 7.15 8.76 8.27 1.59.78 4.61 5 4.61 15.2 0 27.39 20.56 57.84 42.65 78.08-3 18.89-17.1 68.68-47.17 81.26l-128 42.64a100.52 100.52 0 00-66 71.28L.44 674.1a14.38 14.38 0 0010.49 17.48 14.56 14.56 0 003.49.43 14.29 14.29 0 0014-11l17.28-69.22a71.75 71.75 0 0147.15-50.92l128.94-43c49.91-20.79 66.55-95.9 66.55-114.21a14.4 14.4 0 00-5.25-11.1c-18.89-15.63-38-41.58-38-61 0-21.54-8.91-33.48-17.36-39.13-4.12-11.27-10.78-31.86-11.42-45.27.38-1.09.64-2.07-.06-2.07a14.43 14.43 0 0014.42-14.42v-86.5c0-47 45-115.34 115.34-115.34 66.95 0 84.25 29.65 86.27 41.06a15 15 0 00-.61 5.63z" />
    <path d="M372 452v224a16 16 0 0032 0V452a16 16 0 00-32 0zM308 516v160a16 16 0 0032 0V516a16 16 0 00-32 0zM244 676a16 16 0 0032 0V516a16 16 0 00-32 0zM196 692a16 16 0 0016-16v-96a16 16 0 00-32 0v96a16 16 0 0016 16zM470.41 583v68.63h96.08V583zm54.9 39.07v9a6.87 6.87 0 01-13.73 0v-9a13.53 13.53 0 01-6.86-11.62 13.73 13.73 0 1127.45 0 13.49 13.49 0 01-6.86 11.61zM552.76 562.4a34.32 34.32 0 10-68.63 0v6.86h68.63z" />
    <path d="M612 532a81.45 81.45 0 00-16.68 1.75C588.14 461 526.6 404 452 404a16 16 0 00-16 16v256a16 16 0 0016 16h160a80 80 0 000-160zm-31.78 126.48a6.87 6.87 0 01-6.87 6.86H463.54a6.86 6.86 0 01-6.86-6.86v-82.36a6.86 6.86 0 016.86-6.86h6.86v-6.86a48 48 0 1196.09 0v6.86h6.86a6.87 6.87 0 016.87 6.86z" />
  </svg>
);
