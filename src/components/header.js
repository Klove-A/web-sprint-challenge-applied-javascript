const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement("div");
  const dSpan = document.createElement("span");
  const h1 = document.createElement("h1");
  const tSpan = document.createElement("span");

  header.classList.add("header");
  dSpan.classList.add("date");
  tSpan.classList.add("temp");

  dSpan.textContent = `${date}`;
  h1.textContent = `${title}`;
  tSpan.textContent = `${temp}`;

  header.appendChild(dSpan);
  header.appendChild(h1);
  header.appendChild(tSpan);

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
