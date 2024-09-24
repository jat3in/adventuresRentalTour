import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Tour from "./pages/tour";

function App() {
  const vacationSpots = [
    {
      src: "https://images.unsplash.com/photo-1560853950-2502ec2ab867?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      span: "md:col-span-2 md:row-span-2",
      title: "Kashmir",
    },
    {
      src: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      span: "md:col-span-1 row-span-1",
      title: "Kullu",
    },
    {
      src: "https://images.unsplash.com/photo-1720513138417-5c8eb0b2d660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaW1sYXxlbnwwfDF8MHx8fDI%3D",
      span: "md:col-span-1 row-span-1",
      title: "Manali",
    },
  ];
  return (
    <>
      <Router>
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour" element={<Tour />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
