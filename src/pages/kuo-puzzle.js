import React from 'react';
import useCollapse from "react-collapsed";

function Collapse(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Web programming and algorithms for Ryan Kuo: Puzzle (2022)' : 'Web programming and algorithms Ryan Kuo: Puzzle (2022)'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
    );
  }
const PUZZLE = () =>{
  return (
   <>
   <Collapse>
      <img className="photo" src={require('../images/puzzle.png')}/>  
      <p>Puzzle is a new work commissioned by M+. It is a program that places interlocking graphical tiles, accompanied by circular dialogues, endlessly in a browser. The work is intrinsically bilingual and its single interactive feature is a language toggle that permits different views of the situation. The situation travels forward and backward in time, accumulating a picture that enables one to glimpse the forces that govern certain beliefs and breakdowns.</p>   
      <p>Inspired by role-playing video games, Ryan Kuo’s Puzzle rebuilds conversations from his personal history as a first-generation Taiwanese American growing up in rural America. In looping, disembodied encounters, themes of diaspora emerge. Chinese values such as Confucian patriarchy and filial piety encounter American idealism and self-preservation. Instead of viewing these as opposing forces, Kuo attempts to piece them together across the barriers of memory and language.</p>
      <p>Puzzle is durational and is intended for desktop and even larger displays. Access the project here.</p>
      <p>The work was co-curated by Kate Gu and Kerry Doran. Translation by Yuling Zhong. Web development by Tommy Martinez.</p>
    </Collapse>
      </>
  );
}
export default PUZZLE;
