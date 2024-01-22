# React Adaptive Select

This package provides a customizable, searchable dropdown select component for React applications and this is adaptive dropdown according to screen or parent container.

## Installation
```base
npm install react-adaptive-select
```

or

```base
yarn install react-adaptive-select
```

## Usage
```javascript
import { Select } from "react-adaptive-select"

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


```
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| parentRef | RefObject<HTMLElement> | null | A ref to the parent element of the dropdown. Used to calculate the position of the dropdown relative to its parent. |
| onOpen | () => void | null | Callback function when the dropdown is opened. |
| onClose | () => void | null | Callback function when the dropdown is closed. |
| onSelect | (option: string \| number) => void | null | Callback function when an option is selected. Receives the selected option as a parameter. |
| placeholder | string | "Select an option" | Placeholder text for the dropdown. Displayed when no option is selected. |
| onSearch | (searchTerm: string) => void | null | Callback function when a search is performed. Receives the search term as a parameter. |
| options | string[] | [] | Array of options for the dropdown. |
| defaultSelect | number | null | Index of the default selected option. |
| isSearchFocus | boolean | false | If true, the search input will be focused when the dropdown is opened. |
| isSearchable | boolean | true | If true, the dropdown will include a search input. |
| onPositionChange | (position: string) => void | null | Callback function when the dropdown position changes. Receives the new position as a parameter. |


## License
MIT

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## Author

This package was created by [Sahibe Alam](https://in.linkedin.com/in/sahibe). at [Yudiz Solutions Limited](https://yudiz.com/).
