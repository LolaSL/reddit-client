import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: 'rgb(206, 214, 223)',
    fontColor: '#080122f5'

}
export const darkTheme = {
    body: '#080122f5',
    fontColor: 'rgb(206, 214, 223)'
}
export const GlobalStyles = createGlobalStyle`
body{
    background-color:${props => props.theme.body}
}

`