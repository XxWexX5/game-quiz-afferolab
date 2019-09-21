import { createGlobalStyle } from 'styled-components';

import GilroyBlack from '../fonts/Gilroy-Black.woff';
import GilroyBlack2 from '../fonts/Gilroy-Black.woff2';
import GilroyRegularItalic from '../fonts/Gilroy-RegularItalic.woff';
import GilroyRegularItalic2 from '../fonts/Gilroy-RegularItalic.woff2';
import GilroyRegular from '../fonts/Gilroy-Regular.woff';
import GilroyRegular2 from '../fonts/Gilroy-Regular.woff2';
import GilroyLight from '../fonts/Gilroy-Light.woff';
import GilroyLight2 from '../fonts/Gilroy-Light.woff2';
import GilroyBold from '../fonts/Gilroy-ExtraBold.woff'
import GilroyBold2 from '../fonts/Gilroy-ExtraBold.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: Gilroy-Black;
        src: url(${ GilroyBlack2 }) format('woff2'),
            url(${ GilroyBlack }) format('woff');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: Gilroy-Regular;
        src: url(${ GilroyRegular2 }) format('woff2'),
            url(${ GilroyRegular }) format('woff');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: Gilroy-Regular-Italic;
        src: url(${ GilroyRegularItalic2 }) format('woff2'),
            url(${ GilroyRegularItalic }) format('woff');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: Gilroy;
        src: url(${ GilroyRegular2 }) format('woff2'),
            url(${ GilroyRegular }) format('woff');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: Gilroy-Light;
        src: url(${ GilroyLight2 }) format('woff2'),
            url(${ GilroyLight }) format('woff');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: Gilroy-Bold;
        src: url(${ GilroyBold2 }) format('woff2'),
            url(${ GilroyBold }) format('woff');
        font-weight: 900;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        font-family: Gilroy, Arial, Helvetica, sans-serif;
    }

    body, input, button {
        color: #222222;
        font-size: 14px;
    }

    button {
        cursor: pointer;
    }
`;