import react from "react"
import '../App.css'

const Button = ({bgColor, textColor, text, onClick, padding, bottom, right, display, flexDirection, justifyContent, justifyItems,margin,grid,gridColumnEnd,gridColumnStart}) => {
    return(
        <div className="btn-container">
            <button className="Button"
            style = {{background:bgColor, color:textColor, padding:padding, right:right, bottom:bottom,   display:display, justifyItems:justifyItems, justifyContent:justifyContent, flexDirection,flexDirection,margin,grid:grid,gridColumnStart:gridColumnStart,gridColumnEnd }}
            onClick = {onClick}>{text}</button>
        </div>
    )
}
export default Button



/*
<div className="app">
       <Navbar></Navbar>
       
      <Card
      imgSrc=""
      imgAlt="card image"
      title="title"
      description="your text here"
      buttonText="start"
      buttonText2="inprogress"
      buttonText3="done"
      link="your link"
      /> */