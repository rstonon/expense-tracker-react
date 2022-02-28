import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';


type Props = {
    item: Item;
    handleEditItem: (item: Item) => void;
    handleDeleteItem: (str: string) => void;
}

export const TableItem = ({ item, handleEditItem ,handleDeleteItem }: Props) => {

    const onEditItem = (item: Item) => {

    };

    const onDeleteItem = ({title} : Item) => {
        handleDeleteItem(title);
    };

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}    
                </C.Category>
                </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green' }>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <C.IconArea>
                    <C.IconItem
                        data-tip="Editar"
                        data-for="tip-top"
                        onClick={() => onEditItem(item)}
                    >Editar
                    </C.IconItem>
                    <C.IconItem
                        data-tip="Excluir"
                        data-for="tip-top"
                        onClick={() => onDeleteItem(item)}
                    >Excluir
                    </C.IconItem>
                </C.IconArea>
            </C.TableColumn>
        </C.TableLine>
    );
}