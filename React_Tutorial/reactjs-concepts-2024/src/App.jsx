
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionBasedComponent from './components/function-based-component'
import ProductList from './components/producs'



// App --> product list -->product item -> button component


const dummyProductdata = ['product 1', 'product 2', 'product 3'];

function App() {

  return (
    <>
      <h1>React Js Concepts 2024</h1>
      {/* <ClassBasedComponent />
      <FunctionBasedComponent /> */}

      <ProductList name="Roxy" city="ABC" dummyProductdata={dummyProductdata} />
    </>
  )
}

export default App
