import { useEffect, useState } from 'react';
import * as C from './styles';

import { items } from '../../data/items';
import { categories } from '../../data/categories';


type Props = {
    onShowModal: () => void;
    onSearchText: (search : string) => void;
    onSetCategory: (category: string) => void;
}

type categorieOption = {
    category: string;
    title?: string;
}

const ActionArea = ({onShowModal, onSearchText,  onSetCategory} : Props) => {

    const [categoriesOption, setCategoriesOption] = useState<categorieOption[]>([]);

    const getCategories = () => {
        let newCategories = [];

        for (let i in items) {
            newCategories.push({
                category: items[i].category,
                title: categories[items[i].category].title
            });
        }

        setCategoriesOption(newCategories);
    }

    const handleSetCategory = (category: any) => {
        if(category != undefined){
            onSetCategory(category);
        }
    }

    const handleAddItem = () => {
        onShowModal();
    }

    useEffect(() => {
        getCategories();

    }, []);

    return (
        <C.Container>
            <C.AddItem
               data-tip="Adicionar Receita/Despesa"
               data-for="tip-top"
             >
                +
            </C.AddItem>
            <C.FilterItem
                onChange={ (e) => handleSetCategory(e.target.value)}
            >
                <C.OptionItem value="all">Todos</C.OptionItem>
                {categoriesOption.map((item, key) => (
                    <C.OptionItem
                        key={key}
                        value={item.category}
                    >{item.title}</C.OptionItem>
                ))}
            </C.FilterItem>
            <C.SearchItem
             type="text"
             onChange={e => onSearchText(e.target.value)}
             placeholder="Buscar Receita/Despesa" />
        </C.Container>
    )
}


export default ActionArea;