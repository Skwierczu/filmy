
import './App.css';

function App() {
  //Stany przechowujace dane formularza
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  //Funkcja obsługująca przycisk "Dodaj"
  const handleSubmit = (e) => {
   e.preventDefault(); // Zapobiega odświeżeniu strony po kliknięciu 

    //Wyświetlanie danych formularza w konsoli 
    console.log(`Tytuł: ${tytul}, Rodzaj: ${rodzaj}`);
  };
  return (
    <div className="container" style={{ padding: "20px" }}>

    </div>
  )
}
function App() {
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="film" class="form-label">tytuł filmu</label>
        <input type="text" class="form-cotrol" id="film" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;

