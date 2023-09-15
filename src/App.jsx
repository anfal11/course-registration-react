import Card from "./Components/Card/Card"
import Header from "./Components/Header"



function App() {

       // state for loading
       // const [loading, setLoading] = useState(false)
       // state for error
       // const [error, setError] = useState(null)


  return (


    <div className="max-w-[1440px] mx-auto">

     <div className="pt-8 font-bold text-2xl mb-8">
     <Header></Header>
     </div>

      <Card></Card>
    </div>
  )
}

export default App
