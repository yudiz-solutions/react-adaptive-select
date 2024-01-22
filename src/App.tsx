import { Select } from "./components/Select"

function App() {
  const options =  [
    { label: "Option 1", value: "optn1" },
    { label: "Option 2", value: "optn2" },
    { label: "Option 3", value: "optn3" },
    { label: "Option 4", value: "optn4" },
    { label: "Option 5", value: "optn5" },
    { label: "Option 6", value: "optn6" },
    { label: "Option 7", value: "optn7" },
    { label: "React select", value: "react_select" },
  ];
  return (
    <>
      <Select
        onOpen={() => console.log("Dropdown opened")}
        onClose={() => console.log("Dropdown closed")}
        onSelect={(option) => console.log("Selected option: ", option)}
        placeholder="Select an option"
        onSearch={(searchTerm) => console.log("Search term: ", searchTerm)}
        options={options}
        // defaultSelect={options[0]} // pass a default index object 
        isSearchFocus={true}
        isSearchable={true}
        onPositionChange={(position) => console.log("Dropdown position: ", position)}
      />
    </>
  )
}

export default App
