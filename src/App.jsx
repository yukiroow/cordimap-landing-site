// Touch me
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import BiophysicalProfile from "./BiophysicalProfile";
import SocioCultural from "./SocioCultural";
import MainPage from "./MainPage";

const App = () => {
    return (
        <>
            <div data-theme="light" className="min-h-screen">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route
                            path="/biophysical"
                            element={<BiophysicalProfile />}
                        />
                        <Route
                            path="/socio-cultural"
                            element={<SocioCultural />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};
export default App;
