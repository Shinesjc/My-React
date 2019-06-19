import {createGlobalStyle} from 'styled-components';

export const IconfontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1560864302211'); /* IE9 */
  src: url('./iconfont.eot?t=1560864302211#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1560864302211') format('woff'),
  url('./iconfont.ttf?t=1560864302211') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1560864302211#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
