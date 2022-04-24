import React, {useState} from 'react'

export default function About() {
  //declaration section
  //1st useState for color
    const [myStyle,setMyStyle]= useState(
        {color: "black",
        backgroundColor: "white"})

  //2nd usestate for button text
  const [myTxt,setMyTxt]= useState("Light mode");      
// mode change button
const handleMode=()=>{
    // setMyStyle({color: "black"});
    // console.log("button clicked")
    if(myStyle.color === "black")
    {
        //set light mode
        setMyStyle({
            color: "white",
            backgroundColor: "black"
        })
        setMyTxt("Light Mode")
    }
    else
    {
        //set dark mode
        setMyStyle({
            color: "black",
            backgroundColor: "white"
        })
        setMyTxt("Dark Mode")
        myTxt.style={ color: "red"};
    }
}



    return (
      //about div
    <div className="container" style={myStyle}>
        <div class="accordion" id="accordionExample" style={myStyle}>
          <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="headingOne" style={myStyle}>
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle} >
            <div class="accordion-body" style={myStyle}>
                <strong style={myStyle}>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
           </div>
        </div>
        </div>
            <div class="accordion-item" style={myStyle}>
             <h2 class="accordion-header" id="headingTwo" style={myStyle}>
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                <div class="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingThree" style={myStyle}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Accordion Item #3
                 </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
                    <div class="accordion-body" style={myStyle}>
                    <strong style={myStyle}>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                 </div>
                    </div>
                </div>
                </div>
                <button className="btn btn-outline-success my-2" onClick={handleMode}>{myTxt}</button>
    </div>
  )

}
  
// dark mode aur white mode button 
// 2 use state hooks
//   1 for color
//   2 for button text

  
