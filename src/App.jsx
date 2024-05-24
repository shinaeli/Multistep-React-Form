import { FormContextProvider } from "./FormContext/FormContext"
import Form from "./components/Form"

function App() {

  return (
    <main className="pc:w-[60%] pc:mx-auto tab:w-[75%] tab:mx-auto">
      <FormContextProvider>
        <Form />
      </FormContextProvider>
    </main>
  )
}

export default App
