import { useState, useEffect } from 'react';
import * as C from './App.styles';

import { ThemeProvider } from "styled-components";

import { Item } from './types/Item';
import { categories } from './data/categories';
import { items} from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

import ThemeSwitcher from "./components/ThemeSwitcher";
import ReactTooltip from "react-tooltip";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";


const App = () => {

  const [theme, setTheme] = usePersistedState('light', light);

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
        if(categories[filteredList[i].category].expense) {
            expenseCount += filteredList[i].value;
        } else {
            incomeCount += filteredList[i].value;
        }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
      setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
      let newList = [...list];
      newList.push(item);
      setList(newList);
  };

    const toggleTheme = () => {
        if (theme.title !== 'Dark') {
            setTheme(dark);
        } else {
            setTheme(light);
        }
    };

  return (

  <ThemeProvider theme={theme}>
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
          <ThemeSwitcher
              data-tip="Mudar tema"
              data-for="tip-top"
              toogleTheme={toggleTheme} />
      </C.Header>
      <C.Body>

        {/* Área de informações */}
        <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
        />

        {/* Área de Inserir */}
        <InputArea onAdd={handleAddItem} />

        {/* Tabela de Itens */}
        <TableArea list={filteredList} />

      </C.Body>
        <ReactTooltip id="tip-top" place="top" effect="solid" />
    </C.Container>
  </ThemeProvider>
  );
};

export default App;