import './App.css'
import { useFibonnaci } from './hooks/useFibonnaci2';
import { useInvert } from './hooks/useInvert5';


function App() {
  
  //  #2
  const {
    setNumber, verifyIfIncludeInFibonnaci
  } = useFibonnaci()

  // #5
  const { result, setValueInput } = useInvert()
  
  

  
  return (
    <div className="">
      <div 
        style=
        {{ 
          borderBottom: '2px solid white',
          paddingBottom: '10px',
          marginTop: '10px'
        }}
        className=""
      >
        <h2 >#2 Verificar se o número pertence a sequencia de fibonnaci</h2>
        <div 
        >
          <form 
            action=""
            style={{display: 'inline-flex', 
            flexDirection: 'column'}}
          >
            <input 
              onChange={(e) => setNumber(e.target.value as any)} 
              type="number" 
            />

            <button 
              type={'submit'}
              style={{marginTop: '10px'}}
              onClick={() => verifyIfIncludeInFibonnaci()}
            >
                Selecionar
            </button>
          </form>
        </div>
      </div>

      <div 
        style=
        {{ 
          borderBottom: '2px solid white',
          paddingBottom: '10px',
          marginTop: '10px'
        }}
      >
        <h2 >#5 Inversão de palavras</h2>
        {result &&
          <h3>{result}</h3>
        }
        <form 
            action=""
            style={{display: 'inline-flex', 
            flexDirection: 'column'}}
          >
            <input 
              onChange={(e) => setValueInput(e.target.value as string)} 
            />

            <button 
              type={'submit'}
              style={{marginTop: '10px'}}
              
            >
                Inverter
            </button>

          </form>
        
      </div>
      

    </div>
  )
}

export default App
