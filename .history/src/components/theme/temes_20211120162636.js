
import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: '#1b1818',
    fontColor: '#eee7e7'

}
export const darkTheme = {
    body: '#eee7e7',
    fontColor: '#1b1818'
}
export const GlobalStyles = createGlobalStyle`
body{
    background-color:${(props) => props.theme.body}
}

`