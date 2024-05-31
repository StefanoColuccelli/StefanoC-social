import React, {useEffect, useState} from 'react';
import Topbar from './components/topbar';
import Content from './components/contents';
import Footer from './components/footer';
import { TPost, Post } from './types/commonTypes';
import { AppContext } from './context/AppContext';


function App() {
  const [jsonData, setJsonData] = useState<Post[] | undefined>()
  const propTypes = { jsonData, setJsonData}

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(json => setJsonData((json as TPost).posts))
  }, [])


  return (
    <div>
      <AppContext.Provider value={propTypes}>
       <Topbar />
       <Content />
       <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
