const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
const main = document.querySelector("main");

function ajax(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status Code: ${response.status}`);
    }
    return response.json();
  });
}

function render(data) {
  //   console.log(data);

  const HTML = data
    .map((item) => {
      const { name, price, description } = item;

      return `<div class="card"><h3>${name}</h3><p>NT$ ${price}</p><p>${description}</p></div>`;
    })
    .join("");

  main.innerHTML = HTML;
}

ajax(url)
  .then((data) => render(data))
  .catch((error) => console.log(error));
