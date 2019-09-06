# Redux Saga Garden

We take a look at how to add theming to Material-UI in this lecture but we are also looking at how to customize Material-UI with our own CSS styling as well.


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

See [Instructions](./INSTRUCTIONS.md) for project setup and assignment instructions.


## Adding Material-UI Theme

1. In `App.js` import the `MuiThemeProvider` and `createMuiTheme` from Material-UI core:

    ```JS
    // MATERIAL-UI THEME CUSTOMIZATION
    import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
    import { createMuiTheme } from '@material-ui/core/styles';
    ```

1. In `App.js` import some [Material-UI colors](https://material-ui.com/customization/color/#color-tool):

    ```JS
    import {
        pink,
        green,
        lime,
    } from '@material-ui/core/colors';
    ```

1. In `App.js` we want to wrap our entire application content with the `<MuiThemeProvider>` component that we imported:

    ```JS
    const App = () => (
        <MuiThemeProvider>
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to your garden!</h1>
                </header>
                <Router>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/plant/:id" component={PlantDetails} />
                </Router >
            </div>
        </MuiThemeProvider>
    );
    ```

    > Note: This will allow our whole application to have the same Material-UI theme setting applied to it.
    
1. Create our custom theme object using `createMuiTheme`:

    ```JS
    const theme = createMuiTheme({
        palette: {
            primary: green,
            secondary: lime,
            error: pink,
            // Used by `getContrastText()` to maximize the contrast between the background and
            // the text.
            contrastThreshold: 3,
            // Used to shift a color's luminance by approximately
            // two indexes within its tonal palette.
            // E.g., shift from Red 500 to Red 300 or Red 700.
            tonalOffset: 0.2,
        }
    });


    const App = () => (
    ```

    > Note: It's here that you can set whatever color options you wish to have in you application theme. Additional [color setting](https://material-ui.com/customization/palette/#color-tool) can be found on the Material-UI site as part of their API Documentation.

1. Now we need to pass our newly created `theme` to our `<MuiThemeProvider>` component:

    ```JS
    const App = () => (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
    ```

    > Note: Take notice that the way we pass our `theme` to the `<MuiThemeProvider>` component is to use the `theme={}` attribute.

