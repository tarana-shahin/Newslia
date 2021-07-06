import Navbar from "./components/Navbar";
import {useEffect, useState} from "react";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import "./App.css";





function App() {
  const [category,setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  console.log(process.env);

    const newsApi= async () => {
        try{
            
            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`);
            // console.log(news.data.articles);
            setnewsArray(news.data.articles);
            setnewsResults(news.data.totalResults);
        }
        catch(err)
        {
          console.log(err);
        }
    }
    useEffect( () =>
    {
        newsApi();
        
    },[newsResults,category,loadMore] )

    
    

  return (
    <div >
     
    <Navbar setCategory={setCategory}/>
    {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
    <Footer/>
    </div>
  );
}

export default App;
