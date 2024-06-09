//Question dictionary
const questions = {
    "Question 1": ['React is a framework for building user interfaces?', 'f', ''],
    "Question 2": ['JSX stands for JavaScript XML?', 't', ''],
    "Question 3": ['In React, components must always be defined as classes?', 'f', ''],
    "Question 4": ['React uses a real DOM to render elements?', 'f', ''],
    "Question 5": ['Props are mutable and can be changed within a component?', 'f', ''],
    "Question 6": ['State can be used to manage data that changes over time within a component?', 't', ''],
    "Question 7": ['The useState hook is used to add state to function components?', 't', ''],
    "Question 8": ['In React, keys help identify which items have changed, are added, or are removed?', 't', ''],
    "Question 9": ['React components can communicate with each other via state?', 'f', ''],
    "Question 10": ['Hooks can be used in class components?', 'f', ''],
    "Question 11": ['The useEffect hook can be used to perform side effects in functional components?', 't', ''],
    "Question 12": ['React can only be used with JavaScript?', 'f', ''],
    "Question 13": ['In React, Fragment can be used to group multiple children without adding extra nodes to the DOM?', 't', ''],
    "Question 14": ['The useEffect hook can return a cleanup function to run when the component unmounts?', 't', ''],
    "Question 15": ['React components must start with an uppercase letter?', 't', ''],
    "Question 16": ['In React, you can use inline styles by passing an object to the style attribute?', 't', ''],
    "Question 17": ['A functional component can have lifecycle methods like class components?', 'f', ''],
    "Question 18": ['The useState hook can be used to manage multiple pieces of state within a single component?', 't', ''],
    "Question 19": ['JSX requires all attributes to be enclosed in curly braces?', 'f', ''],
    "Question 20": ['In React, event handlers are written in camelCase?', 't', ''],
    "Question 21": ['React automatically binds event handlers to the component instance?', 'f', ''],
    "Question 22": ['Reacts StrictMode helps to identify potential problems in an application?', 't', ''],
    "Question 23": ['React uses a one-way data binding approach?', 't', ''],
    "Question 24": ['The useRef hook can be used to persist values across renders without causing a re-render?', 't', ''],
    "Question 25": ['A higher-order component (HOC) is a function that takes a component and returns a new component?', 't', '']
};

//Will be used to update users answer
export const updateAnswer = (index: number, answer: string): void => {
    const questionKey = `Question ${index + 1}` as keyof typeof questions;
    questions[questionKey][2] = answer;
};

//Provides specific question
export const questionData = (index: number): string[] => {
    const questionKey = `Question ${index + 1}` as keyof typeof questions;
    return questions[questionKey];
};

//When tallying the score, this will pull all the information to index through and add the score up.
const Questions = () => {
    return questions;
};

export default Questions;
