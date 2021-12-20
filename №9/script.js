const headerArray = [
  { name: "Google", href: "http://google.com" },
  { name: "VK", href: "https://vk.com" },
  { name: "YouTube", href: "http://youtube.com" },
  { name: "Instagram", href: "https://www.instagram.com"},
  { name: "Pinterest", href: "https://www.pinterest.com"},
  { name: "Wikipedia", href: "https://www.wikipedia.org"},
  ];

const footerArray = [
  { name: "Google", href: "http://google.com" },
  { name: "Onliner", href: "https://www.onliner.by" },
  { name: "VK", href: "http://Vkontakte.ru" },
  { name: "YouTybe", href: "http://youtybe.com" },
  { name: "YouTybe", href: "http://youtybe.com" },
  { name: "YouTybe", href: "http://youtybe.com" },
  ];

  const func = (array, classObj) => {
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");
    nav.prepend(ul);
    ul.className = classObj.ul;
  
    array.forEach((item) => {
      let li = document.createElement("li");
      ul.append(li);
      li.className = classObj.li;
      li.innerHTML = `<a href="${item.href}">"${item.name}"</a>`;
    });
    return nav;
  };
  
  const header = document.createElement("header");
  header.className = "someClass";
  const headerHtml = func(headerArray, { ul: "ul", li: "h" });
  document.body.prepend(header);
  header.append(headerHtml);
  
  const footer = document.createElement("footer");
  footer.className = "footer";
  const footerHtml = func(footerArray, { ul: "list", li: "li" });
  document.body.append(footer);
  footer.append(footerHtml);