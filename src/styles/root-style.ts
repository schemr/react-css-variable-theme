import { createGlobalStyle } from 'styled-components';
const RootStyle = createGlobalStyle`
    :root {
        --primary-color: 349, 81%;
        --palette-primary-10: hsl(var(--primary-color), 10%);
        --palette-primary-20: hsl(var(--primary-color), 20%);
        --palette-primary-default: hsl(var(--primary-color), 56%);
        --text-color: black;
        --bg-color: white;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --text-color: white;
            --bg-color: black;
            --primary-color: 349, 21%;
            --palette-primary-10: hsl(var(--primary-color), 10%);
            --palette-primary-20: hsl(var(--primary-color), 20%);
            --palette-primary-default: hsl(var(--primary-color), 56%);
        }
        img { filter: brightness(.8) contrast(1.2); }
    }
`;
export default RootStyle;

// --adaptiveGrey50: #f9fafb;
// --adaptiveGrey100: #f2f4f6;
// --adaptiveGrey200: #e5e8eb;
// --adaptiveGrey300: #d1d6db;
// --adaptiveGrey400: #b0b8c1;
// --adaptiveGrey500: #8b95a1;
// --adaptiveGrey600: #6b7684;
// --adaptiveGrey700: #4e5968;
// --adaptiveGrey800: #333d4b;
// --adaptiveGrey900: #191f28;
// --adaptiveOpacity50: rgba(0, 23, 51, 0.02);
// --adaptiveOpacity100: rgba(2, 32, 71, 0.05);
// --adaptiveOpacity200: rgba(0, 27, 55, 0.1);
// --adaptiveOpacity300: rgba(0, 29, 58, 0.18);
// --adaptiveOpacity400: rgba(0, 29, 54, 0.31);
// --adaptiveOpacity500: rgba(3, 24, 50, 0.46);
// --adaptiveOpacity600: rgba(0, 19, 43, 0.58);
// --adaptiveOpacity700: rgba(3, 18, 40, 0.7);
// --adaptiveOpacity800: rgba(0, 12, 30, 0.8);
// --adaptiveOpacity900: rgba(2, 9, 19, 0.91);
// --adaptiveBackground: #ffffff;
// --adaptiveGreyBackground: #f2f4f6;
// --adaptiveLayeredBackground: #ffffff;
// --adaptiveFloatBackground: #ffffff;
// --tHairlineBackground: repeat-x url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'><rect fill='rgba(0, 29, 58, 0.18)' x='0' y='0' width='1' height='0.5'/></svg>");
// --tGradientToTop: linear-gradient(to top, #ffffff, rgba(255,255,255,0));
// --tGradientToBottom: linear-gradient(to bottom, #ffffff, rgba(255,255,255,0));
// --tGradientToRight: linear-gradient(to right, #ffffff, rgba(255,255,255,0));
// --tGradientToLeft: linear-gradient(to left, #ffffff, rgba(255,255,255,0));
// --tLayeredGradientToTop: linear-gradient(to top, #ffffff, rgba(255,255,255,0));
// --tLayeredGradientToBottom: linear-gradient(to bottom, #ffffff, rgba(255,255,255,0));
// --tRadioIndicatorBackgroundColor: rgb(255, 255, 255);
// --tRadioCheckedFontColor: #2272eb;
// --tToastBackground: rgba(25,31,40,0.54);
// --tDarkFillButtonBackground: #4e5968;
// --tPrimaryWeakButtonBackground: #e8f3ff;
// --tDangerWeakButtonBackground: #ffeeee;
// --tDarkWeakButtonBackground: #f2f4f6;
// --tLightWeakButtonBackground: rgba(222, 222, 255, 0.19);
// --tButtonPressedAfterBackground: transparent;
// --tPrimaryWeakButtonPressedBackground: rgba(49,130,246,0.26);
// --tDangerWeakButtonPressedBackground: rgba(244,67,54,0.26);
// --tDarkWeakButtonPressedBackground: rgba(78,89,104,0.26);
// --tLightWeakButtonPressedBackground: rgba(255,255,255,0.26);
// --tBlueBadgeColor: #1b64da;
// --tBlueBadgeBackground: rgba(49,130,246,0.16);
// --tTealBadgeColor: #0c8585;
// --tTealBadgeBackground: rgba(0,129,138,0.16);
// --tGreenBadgeColor: #029359;
// --tGreenBadgeBackground: rgba(2,162,98,0.16);
// --tRedBadgeColor: #d22030;
// --tRedBadgeBackground: rgba(244,67,54,0.16);
// --tYellowBadgeColor: #dd7d02;
// --tYellowBadgeBackground: rgba(255,179,49,0.16);
// --tElephantBadgeColor: #4e5968;
// --tElephantBadgeBackground: rgba(78,89,104,0.16);
// --tSwiperBulletBackground: rgba(232, 232, 253, 0.36);
// --tListRowDisabledBackground: rgba(253, 253, 255, 0.75)
//
//
// --adaptiveGrey50: #202027;
// --adaptiveGrey100: #2c2c35;
// --adaptiveGrey200: #3c3c47;
// --adaptiveGrey300: #4d4d59;
// --adaptiveGrey400: #62626d;
// --adaptiveGrey500: #7e7e87;
// --adaptiveGrey600: #9e9ea4;
// --adaptiveGrey700: #c3c3c6;
// --adaptiveGrey800: #e4e4e5;
// --adaptiveGrey900: rgb(255, 255, 255);
// --adaptiveOpacity50: rgba(209, 209, 253, 0.05);
// --adaptiveOpacity100: rgba(217, 217, 255, 0.11);
// --adaptiveOpacity200: rgba(222, 222, 255, 0.19);
// --adaptiveOpacity300: rgba(224, 224, 255, 0.27);
// --adaptiveOpacity400: rgba(232, 232, 253, 0.36);
// --adaptiveOpacity500: rgba(242, 242, 255, 0.47);
// --adaptiveOpacity600: rgba(248, 248, 255, 0.6);
// --adaptiveOpacity700: rgba(253, 253, 255, 0.75);
// --adaptiveOpacity800: rgba(253, 253, 254, 0.89);
// --adaptiveOpacity900: rgba(255, 255, 255, 1);
// --adaptiveBackground: #17171c;
// --adaptiveGreyBackground: #101013;
// --adaptiveLayeredBackground: #202027;
// --adaptiveFloatBackground: #2c2c35;
// --tHairlineBackground: repeat-x url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'><rect fill='rgba(224, 224, 255, 0.27)' x='0' y='0' width='1' height='0.5'/></svg>");
// --tGradientToTop: linear-gradient(to top, #17171c, rgba(23, 23, 28, 0));
// --tGradientToBottom: linear-gradient(to bottom, #17171c, rgba(23, 23, 28, 0));
// --tGradientToRight: linear-gradient(to right, #17171c, rgba(23, 23, 28, 0));
// --tGradientToLeft: linear-gradient(to left, #17171c, rgba(23, 23, 28, 0));
// --tLayeredGradientToTop: linear-gradient(to top, #202027, rgba(32, 32, 39, 0));
// --tLayeredGradientToBottom: linear-gradient(to bottom, #202027, rgba(32, 32, 39, 0));
// --tRadioIndicatorBackgroundColor: #4d4d59;
// --tRadioCheckedFontColor: #3182f6;
// --tToastBackground: rgba(217, 217, 255, 0.11);
// --tDarkFillButtonBackground: #4d4d59;
// --tPrimaryWeakButtonBackground: rgba(217, 217, 255, 0.11);
// --tDangerWeakButtonBackground: rgba(217, 217, 255, 0.11);
// --tDarkWeakButtonBackground: rgba(217, 217, 255, 0.11);
// --tLightWeakButtonBackground: rgba(217, 217, 255, 0.11);
// --tButtonPressedAfterBackground: rgba(0, 0, 0, 0.26);
// --tPrimaryWeakButtonPressedBackground: rgba(217, 217, 255, 0.11);
// --tDangerWeakButtonPressedBackground: rgba(217, 217, 255, 0.11);
// --tDarkWeakButtonPressedBackground: rgba(217, 217, 255, 0.11);
// --tLightWeakButtonPressedBackground: rgba(217, 217, 255, 0.11);
// --tBlueBadgeColor: #4593fc;
// --tBlueBadgeBackground: rgba(69, 147, 252, 0.16);
// --tTealBadgeColor: #30b6b6;
// --tTealBadgeBackground: rgba(38, 157, 166, 0.16);
// --tGreenBadgeColor: #15c47e;
// --tGreenBadgeBackground: rgba(21, 196, 126, 0.16);
// --tRedBadgeColor: #f66570;
// --tRedBadgeBackground: rgba(239, 83, 80, 0.16);
// --tYellowBadgeColor: #faa131;
// --tYellowBadgeBackground: rgba(255, 209, 88, 0.16);
// --tElephantBadgeColor: #c3c3c6;
// --tElephantBadgeBackground: rgba(195, 195, 198, 0.16);
// --tSwiperBulletBackground: rgba(0, 29, 54, 0.31);
// --tListRowDisabledBackground: rgba(23, 23, 28, 0.7)
