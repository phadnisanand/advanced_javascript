// https://www.geeksforgeeks.org/javascript-fetch-method/
// https://www.w3schools.com/jsref/api_fetch.asp
const fetchProductsData = async () => {
  const pData = await fetch('https://fakestoreapi.com/products');
  const pDataJson = await pData.json();
  displayData(pDataJson);
}

const displayData = (data) => {
  let finalData = '<ul>';
  finalData += data.map((ele) => '<li>' + ele.title  + '</li>');
  finalData += '</ul>';
  document.getElementById('products_div').innerHTML = finalData;
}
fetchProductsData();
