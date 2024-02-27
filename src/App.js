import "./App.css"
import PersonInfo from "./components/PersonInfo";
import Articles from "./components/Articles";
import { useState, useEffect } from "react";

function App() {
  console.log(ArticlesTitle);



  
  return (
    <div className="container">
      <header>
        <section className="header-content">
          <div><h1>Lumber</h1></div>
          <div>
            <button className="button big-btn">Sign up</button>
            <button className="button big-btn">Log in</button>
          </div>
        </section>
      </header>
  
      <section>

        <ArticlesTitle />

        <article>
          <h2>Second article</h2>
  
          <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>
        </article>
  
      </section>

      <footer>Contact me@jie.com</footer>
    </div>
  );
}

function ArticlesTitle() {
/*
  function switchTemplate() {
    window.location.reload(false);
  }
*/
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); 
  const [titleList, setTitleList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/Articles/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTitleList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const articlesTitle = titleList
    .map((title) => (
      <Articles
        name = {title}
      />
    ));
    console.log(articlesTitle);

    return (
      articlesTitle
    );
  }
}




export default App;
