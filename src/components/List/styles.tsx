import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    margin: 30px 0;
`

export const Header = styled.View`
    margin-bottom: 10px;
    align-items: center
`

export const ContainerItem = styled.View`
   padding-bottom: 5;
`

export const ContainerItemText = styled.View`
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    backgroundColor: ${(props: any) => props.backcolor };
`
export const TextItemPrincipal = styled.Text `
    margin-left: 5px;
    color: #FFF;
    font-weight: bold;
`
export const TextItemSecondario = styled.Text `
    margin-left: 5px;
    font-size: 14;
    color: #F2F2F2
`

export const RenderSeparator = styled.View`
    height:0.5;
    width: 100%;
`