
import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: 'rgb(206, 214, 223)',
    fontColor: '#eee7e7'

}
export const darkTheme = {
    body: '#eee7e7',
    fontColor: 'rgb(206, 214, 223)'
}
export const GlobalStyles = createGlobalStyle`
body{
    background-color:${(props) => props.theme.body}
}

`