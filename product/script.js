const container = document.getElementById("container");

const url = "http://localhost:4500/product/";
const fetchData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      container.innerHTML = "";

      for (let i = 0; i < res.length; i++) {
        const { id, title, price, category } = res[i];
        const maindiv = document.createElement("div");
        const h3 = document.createElement("h3");
        const heading = document.createElement("h2");
        const pr = document.createElement("h4");
        const cate = document.createElement("h5");
        const edit = document.createElement("button");
        const del = document.createElement("button");

        maindiv.classList.add("main");

        h3.innerText = id;
        heading.innerText = title;
        pr.innerText = price;
        cate.innerText = category;
        edit.innerText = "Update";
        del.innerText = "Delete";
        edit.classList.add("update");
        del.classList.add("delete");

        edit.addEventListener("click", (e) => {
          e.preventDefault();
          handleUpdate(id);
        });
        del.addEventListener("click", (e) => {
          e.preventDefault();
          handleDelete(id);
        });

        maindiv.appendChild(h3);
        maindiv.appendChild(heading);
        maindiv.appendChild(pr);
        maindiv.appendChild(cate);
        maindiv.appendChild(edit);
        maindiv.appendChild(del);
        container.appendChild(maindiv);
      }
    });
};

const addData = () => {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      price: price,
      category: category,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      fetchData();
    });
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("category").value = "";
};

const handleUpdate = (id) => {
  const title2 = document.getElementById("title2").value;
  const price2 = document.getElementById("price2").value;
  const category2 = document.getElementById("category2").value;

  fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title2,
      price: price2,
      category: category2,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      fetchData();
    });
};
const handleDelete = (id) => {
  fetch(url + id, {
    method: "DELETE",
  }).then(() => {
    fetchData();
  });
};

