declare module '@material-ui/core/styles' {
  interface Theme {
    pallete: {
      primary: string
    }
    typography: {
      fontFamily: string
    }
  }

  interface ThemeOptions {
    pallete?: {
      primary?: string
    }
    typography?: {
      fontFamily?: string
    }
  }
}
