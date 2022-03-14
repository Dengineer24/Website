

var year = "2024"
var month = "May"
var obj1Headline = `I am a CS student at Binghamton University graduating in ${month}, ${year} persuing a Software Engineering Internship `
var objdescript = ``
for (let i = 0; i < 10; i++) {
    console.log('count %d', i);
}

export const homeObjOne = {
    id: 'about', 
    lightBg: false,
    lightText: false,
    LightTextDesc: true,
    topLine: 'About Me',
    headline: obj1Headline,
    description: '',
    buttonLabel: 'View Projects',
    imgStart: false,
    img: require('./images2/logo.png'),
    alt: 'Car',
    dark: true,
    primary: false,
    darktext: true,
    
};

export const homeObjTwo = {
    id: '', 
    lightBg: true,
    lightText: false,
    LightTextDesc: false,
    topLine: 'heading',
    headline: 'more',
    description: 'more',
    buttonLabel: 'button',
    imgStart: true,
    img: require('./images2/logo.png'),
    alt: 'Car',
    dark: true,
    primary: false,
    darktext: true
};

export const homeObjThree = {
    id: 'skills',
    lightBg: false,
    lightText: false,
    LightTextDesc: true,
    topLine: 'Projects',
    headline: 'I make cool stuff',
    description: 'I like Python',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('./images2/logo.png'),
    alt: 'Car',
    dark: true,
    primary: false,
    darktext: true
};