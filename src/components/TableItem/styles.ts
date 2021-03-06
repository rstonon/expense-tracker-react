import styled from "styled-components";

export const TableLine = styled.tr`

`;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{color: string}>`
    color: ${props => props.color};
`;

export const IconArea = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    cursor: pointer;
    
    svg{
        cursor: pointer;
        transition: box-shadow ease-in-out 0.8s;
        background-color: transparent;
        
        &:hover{
            box-shadow: 0px 0px 20px rgba(0,0,0,0.7);
        }
    }
`;


export const IconItem = styled.div`
  
`;