import React, { useState } from "react";



function Articles(props) {


  const [isReading, setReading] = useState(false);

  const readingTemplate = (
    <div>
      <article>
        <h2 onClick={handChange}>{props.name}</h2>
        <p>props.content}</p>
      </article>
    </div>
  )

  const titlesTemplate = (
    <div >
      <article>
        
        <a href="#switch to readingtemplate" onClick={handChange}>
          <h2 >{props.name}</h2>
        </a>
      </article>
    </div>
  )
  console.log(isReading)



  function handChange() {
    setReading(!isReading);
  }

  return (
    <div>
      <li>{isReading?readingTemplate:titlesTemplate}</li>   


    </div>
  );
}

export default Articles;