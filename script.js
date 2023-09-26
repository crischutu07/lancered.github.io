const xhr = new XMLHttpRequest();
xhr.open("GET", "http://ip-api.com/json");
xhr.send();
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const contents = `* ${JSON.parse(xhr.response).query}`
    ip.innerText = contents

  } else {
    alert(`[${xhr.status}] Oh no, you so good that even lancer can't get your ip addresses :(`);
  }
};
