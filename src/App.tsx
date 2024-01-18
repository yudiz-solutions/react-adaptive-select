import { Select } from "./components/Select"

function App() {
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "React select",
  ];
  return (
    <>
      <Select
        options={options}
        isSearchable={true}
        isSearchFocus={false}
        placeholder="Select option"
      />
    </>
  )
}

export default App
