import './App.css';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import {Routes, Route} from "react-router-dom";


function App() {
  return (

    <div style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'black'}}>
      <Routes>
        
        <Route path="/" element={<ProfilePage/>}/>

        <Route path="login" element={<LoginPage/>}/>

        {/* <Route path="formulir" element={<CustomForm/>}/> */}

        {/* <Route path="animals" element={<AnimalListPage />} > */}

        {/* <Route path=":animalId" 
      //     element={<AnimalDetailPage/>}/>
      //   </Route> */}
        <Route path="*" element={<>404 Page Not Found !</>} />       
      </Routes>
    </div>
  );
}

export default App;
