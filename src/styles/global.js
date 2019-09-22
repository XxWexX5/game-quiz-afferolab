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

    .mt-2 {
        margin-top: 20px;
    }

    .btn.btn-advance {
        font-family: Gilroy-Bold, Arial, Helvetica, sans-serif;
        display: inline-block;
        font-size: 24px;
        color: #FFFFFF;
        margin-top: 10px;
        padding: 10px 15px;
        border-radius: 10px;
        text-decoration: none;
        background: rgba(201,33,52,1);
        background: -moz-linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
        background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(201,33,52,1)), color-stop(100%, rgba(118,48,137,1)));
        background: -webkit-linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
        background: -o-linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
        background: -ms-linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
        background: linear-gradient(45deg, rgba(201,33,52,1) 0%, rgba(118,48,137,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c92134', endColorstr='#763089', GradientType=1 );
        filter: hue-rotate(25deg);
        animation: 2s linear animation-color infinite alternate;
        transition: all .3s ease-in-out;

        &:hover {
            border-radius: 30px;
            background-origin: border-box;
            background-clip: border-box;
        }

        @keyframes animation-color {
            0% {
                filter: hue-rotate(25deg);
            }    
            100% {
                filter: hue-rotate(-70deg);
            }    
        }

        @media screen and (max-width: 1200px){
            font-size: 21px;
            display: block;
            text-align: center;
        }
    }
`;