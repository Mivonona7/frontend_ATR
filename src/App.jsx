import Footer from "./assets/components/footer";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1">
        <div className="container py-5">
          <h1 className="text-center">Bienvenue chez ATR</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;