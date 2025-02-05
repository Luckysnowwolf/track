import react from "react"

const Button = ({bgColor, textColor, text, onClick, padding, bottom, right}) => {
    return(
        <div>
            <button className="Button"
            style = {{background:bgColor, color:textColor, padding:padding, right:right, bottom:bottom}}
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