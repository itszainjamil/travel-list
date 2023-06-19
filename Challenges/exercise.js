// // Exercise 1

// import "./styles.css";
// import { useState } from "react";

// export default function App() {
//   return (
//     <div className="App">
//       <FlashCards />
//     </div>
//   );
// }

// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element",
//   },
// ];

// function FlashCards() {
//   const [selectedId, setSelectedId] = useState(null);
//   function handleClick(id) {
//     setSelectedId(id !== selectedId ? id : null);
//   }
//   return (
//     <div className="flashcards">
//       {questions.map((question) => (
//         <div
//           className={question.id === selectedId ? "selected" : ""}
//           onClick={() => handleClick(question.id)}
//           key={question.id}
//         >
//           <p>
//             {question.id === selectedId ? question.answer : question.question}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// EXERCISE 2

// import "./styles.css";
// import {useState} from 'react'

// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text:
//       "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text:
//       "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
//   },
// ];

// export default function App() {
//   return (
//     <div>
//       <Accordion data = {faqs} />
//     </div>
//   );
// }

// function Accordion({data}) {
//   return <div className = 'accordian'>
//     {data.map((el, i)=> <AccordianItem title = {el.title} num = {i} text = {el.text} key = {el.title}  />)}

//   </div>;
// }

// function AccordianItem({title, text, num}){

//   const [isOpen, setIsOpen] = useState(false);
//   function handleToggle(){
//     setIsOpen(isOpen => !isOpen)
//   }

//   return <div className = {`item ${isOpen ? 'open' : ''}`} onClick = {handleToggle}>
//   <p className='number'>{num <9 ? `0${num+1}` : `${num+1}`}</p>
//   <p className='title'>{title}</p>
//   <p className='icon'>{isOpen? '-' : '+'}</p>

// {isOpen && <div className='content-box'>
// {text}
// </div>}

//   </div>
// }
