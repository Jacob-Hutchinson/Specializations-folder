const {createTheme} = require('@mui/material/styles')

let theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#43a047',
          light: '#000000',
          dark: '#ffffff',
        },
        background: {
          default: '#000000',
          paper: '#797979',
        },
        secondary: {
          main: '#263238',
        },
      },
      typography: {
        fontFamily: 'Open Sans',
        h1: {
          fontFamily: 'Ubuntu Mono',
        },
        h2: {
          fontFamily: 'Ubuntu Mono',
        },
        h3: {
          fontFamily: 'Ubuntu Mono',
        },
        h4: {
          fontFamily: 'Ubuntu Mono',
        },
        h6: {
          fontFamily: 'Ubuntu Mono',
        },
        h5: {
          fontFamily: 'Ubuntu Mono',
        },
        subtitle1: {
          fontFamily: 'Ubuntu Mono',
        },
        subtitle2: {
          fontFamily: 'Ubuntu Mono',
        },
        button: {
          fontFamily: 'Ubuntu Mono',
          fontWeight: 900,
        },
        overline: {
          fontFamily: 'Ubuntu Mono',
        },
      },
})

export default theme