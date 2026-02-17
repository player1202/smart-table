import { rules, createComparison } from "../lib/compare.js";

export function initSearching(searchField) {
  const searchRules = [
    rules.skipEmptyTargetValues(), // вызываем как функцию!
    rules.searchMultipleFields(
      searchField, // имя поля поиска в state
      ["date", "customer", "seller"], // поля для поиска в данных
      false, // регистронезависимый поиск
    )(),
  ];

  return (data, state, action) => {
    const comparison = createComparison(searchRules);
    return data.filter((item) => comparison(item, state[searchField]));
  };
}
