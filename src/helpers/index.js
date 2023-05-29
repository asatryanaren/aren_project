export const getFilteredData = ({
  data,
  filterCategory,
  filterColorsList,
  filterGenderList,
}) => {
  const categoryCondition = (item) =>
    filterCategory === "all" ? true : item.category === filterCategory;
  const colorsCondition = (item) =>
    !filterColorsList.length ? true : filterColorsList.includes(item.color);
  const genderCondition = (item) =>
    !filterGenderList.length ? true : filterGenderList.includes(item.gender);

  const filteredData = data.filter(
    (item) =>
      categoryCondition(item) && colorsCondition(item) && genderCondition(item)
  );

  return filteredData;
};
