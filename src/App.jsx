import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <main className="block m-auto bg-background min-h-screen font-sans max-w-screen-md">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
