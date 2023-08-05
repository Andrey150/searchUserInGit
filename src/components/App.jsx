import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Card from "./card/card";
import NotFoundPage from "./notFound/notFoundPage";
import Error from "./error";

import './app.less';

const LazyMain = React.lazy(() => import('./main/Main'));

const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyMain /></Suspense>} />
          <Route path='/card/:username' element={<Card/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;