import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    html: '#fff',
    fontColor: '#000'

}
export const darkTheme = {
    html: '#000',
    fontColor: '#fff'
}
export const GlobalStyles = createGlobalStyle`
html{
    background-color:${props => props.theme.body}
}
`
