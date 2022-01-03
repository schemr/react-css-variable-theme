import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      outline: 0;
    }
    html {
      -webkit-text-size-adjust: 100%;
      color: #070E1A;
      font-size: 10px;
      font-weight: 400;
      font-family: NanumSquare, Apple SD Gothic Neo, Malgun gothic, Dotum, sans-serif;
      line-height: 1.5;
      word-break: keep-all;
      word-wrap: break-word;
      letter-spacing: -0.5px;
    }
    html * {
      max-height: 1000000px;
    }
    html {
      height: 100%;
    }
    body {
      font-size: 2rem;
      color: var(--text-color);
      background: var(--bg-color);
    }
    h1 {
      font-size: inherit;
    }
    a {
      display: inline-block;
      background-color: transparent;
      text-decoration: none;
      color: inherit;
    }
b,
strong {
  font-weight: 400;
}
small {
  font-size: 80%;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
legend {
  color: inherit;
  display: table;
  max-width: 100%;
  white-space: normal;
}
textarea {
  overflow: auto;
  resize: none;
  border-radius: 0;
  -webkit-box-shadow: none;
  -webkit-appearance: none;
}
[type="checkbox"],
[type="radio"] {
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
[type="number"] {
  -moz-appearance: textfield;
}
[type="search"] {
  -webkit-appearance: none;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
/* clears the 'X' from Internet Explorer */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
/* clears the 'X' from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
fieldset {
  border: 0;
}
ul,
ol,
li {
  list-style-type: none;
}
input,
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
  border-radius: 0;
  font-weight: 400;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
address,
em {
  font-style: normal;
}
button {
  cursor: pointer;
  background-color: transparent;
  border: 0;
}
button:disabled {
  cursor: default;
}
label {
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-weight: 400;
  font-size: inherit;
  color: inherit;
}
button,
select,
textarea {
  line-height: inherit;
}
img {
  vertical-align: top;
  border: 0;
}
th {
  font-weight: 400;
}
input[type="text"]:disabled,
input[type="email"]:disabled,
input[type="search"]:disabled,
input[type="password"]:disabled,
input[type="number"]:disabled,
input[type="tel"]:disabled,
input[type="email"]:disabled {
  background-color: #fff;
}
[hidden],
select::-ms-expand,
img[src=""] {
  display: none;
}
img,
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
}
::-moz-selection,
::selection {
  background: #2b96ed;
  text-shadow: none;
}
::placeholder {
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 400;
}
:-ms-input-placeholder {
  color: #8c8c8c !important;
  font-size: 12px;
  font-weight: 400;
}
::-ms-input-placeholder {
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 400;
}
::-webkit-input-placeholder {
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 400;
}
::-moz-placeholder {
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 400;
}
:-moz-placeholder {
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 400;
}
input:-webkit-autofill {
  background-color: #fff;
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
/* common */
.underline {
  text-decoration: underline;
}
.scrollHidden {
  overflow: hidden;
}
.hide {
  display: none;
}
.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  /* 1 */
}
.sr-only.focusable:active,
.sr-only.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  white-space: inherit;
  width: auto;
}
.ie fieldset.disabled [type="text"],
.ie fieldset.disabled [type="email"],
.ie fieldset.disabled [type="search"],
.ie fieldset.disabled [type="password"],
.ie fieldset.disabled [type="number"],
.ie fieldset.disabled [type="tel"] {
  background-color: #fff;
}
[type="text"]::-ms-clear,
[type="email"]::-ms-clear,
[type="search"]::-ms-clear,
[type="password"]::-ms-clear,
[type="number"]::-ms-clear,
[type="tel"]::-ms-clear {
  display: none;
}
.pre-text {
  white-space: pre;
}
.lang-en {
  font-family: Rubik;
}
.element-hide {
  display: none;
}
.text-bold {
  font-weight: bold;
}
.response-image {
    img {
      max-width: 100%;
      width: 100%;
    }
}
`;
export default GlobalStyle;
