
import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: 'rgb(206, 214, 223)',
    fontColor: '#383333'

}
export const darkTheme = {
    body: '#383333',
    fontColor: 'rgb(206, 214, 223)'
}
export const GlobalStyles = createGlobalStyle`
body{
    background-color:${(props) => props.theme.body}
}

`