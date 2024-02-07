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
import 'react-adaptive-select/dist/style.css'

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
| parentRef | React.RefObject<HTMLDivElement> | null | A reference to the parent element of the dropdown. This is used to calculate the position of the dropdown relative to its parent, allowing for more flexible positioning. |
| onOpen | `() => void` | null | A callback function that is triggered when the dropdown is opened. This can be used to perform actions like logging, analytics tracking, or state updates. |
| onClose | `() => void` | null | A callback function that is triggered when the dropdown is closed. This can be used to perform cleanup actions or state updates. |
| onSelect | (option: { label: string; value: string }) => void | null | A callback function that is triggered when an option is selected. It receives the selected option as a parameter, allowing you to use this data in your application. |
| placeholder | `string` | "Select an option" | The placeholder text for the dropdown. This is displayed when no option is selected, guiding the user to make a selection. |
| onSearch | (searchTerm: string) => void | null | A callback function that is triggered when a search is performed. It receives the search term as a parameter, allowing you to perform custom search logic. |
| options | { label: string; value: string }[] | [] | An array of options for the dropdown. Each option is an object with a `label` (displayed in the dropdown) and a `value` (used when an option is selected). |
| defaultSelect | { label: string; value: string } | null | The default selected option. This is the option that is selected when the dropdown is first rendered. |
| isSearchFocus | `boolean` | false | If true, the search input will be automatically focused when the dropdown is opened. This can improve usability by allowing the user to start typing immediately. |
| isSearchable | `boolean` | true | If true, the dropdown will include a search input. This allows the user to filter the options by typing, which can be useful for large option lists. |
| onPositionChange | (position: string) => void | null | A callback function that is triggered when the dropdown position changes. It receives the new position as a parameter, allowing you to react to changes in the dropdown's position. |


## License
MIT

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## Author

This package was created by [Sahibe Alam](https://in.linkedin.com/in/sahibe). at [Yudiz Solutions Limited](https://yudiz.com/).
