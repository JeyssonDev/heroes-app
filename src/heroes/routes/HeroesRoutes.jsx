import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components';
import { DCPage, MarvelPage, SearchPage, Hero } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DCPage />} />

          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:id' element={<Hero />} />

          <Route path='/' element={<Navigate to='/marvel' replace />} />
        </Routes>
      </div>
    </>
  );
};
