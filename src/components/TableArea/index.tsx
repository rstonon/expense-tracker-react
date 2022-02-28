import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
    onEditItem: (item: Item) => void;
    onDeleteItem: (str: string) => void;
}

export const TableArea = ({list, onEditItem, onDeleteItem}:Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                    {list.map((item, index)=>(
                        <TableItem key={index}
                                   item={item}
                                   handleEditItem={onEditItem}
                                   handleDeleteItem={onDeleteItem}
                        />
                    ))}
            </tbody>
        </C.Table>
    );
}