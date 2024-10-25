import Greeting from "./Component/Greeting";
import Greeting1 from "./Component/Greeting1";
import ParentComponent from "./Component/parentComponent";
// import DisplayComponent from "./Component/DisplayComponent";
// import FormComponent from "./Component/FormComponent";
import Counter1 from "./Component/Counter1";




function App() {
  

  return (
    <>
      <Greeting name={"jimmy"} age={12}/>

      <Greeting1 place={"Thrissur"} pincode={123456}/>

      <ParentComponent/>
     

      {/* <Counter1/> */}
      
    </>
  )
}

export default App
