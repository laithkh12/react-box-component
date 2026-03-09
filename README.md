# React Box Component

A React project featuring a reusable Box component with props support.

## Features

- Reusable Box component
- Props-based customization
- Modern React development setup

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the Project

```bash
npm start
# or
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Usage

### Box Component

The Box component accepts various props for customization:

```jsx
import Box from './components/Box';

function App() {
  return (
    <Box 
      width="200px"
      height="200px"
      backgroundColor="#f0f0f0"
      padding="20px"
      borderRadius="8px"
    >
      Content goes here
    </Box>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | string | '100%' | Width of the box |
| height | string | 'auto' | Height of the box |
| backgroundColor | string | 'transparent' | Background color |
| padding | string | '0' | Padding inside the box |
| borderRadius | string | '0' | Border radius |
| children | ReactNode | - | Content to display inside the box |

## Project Structure

```
├── src/
│   ├── components/
│   │   └── Box.jsx
│   ├── App.jsx
│   └── index.js
├── public/
├── package.json
└── README.md
```

## Technologies Used

- React
- JavaScript/JSX

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
