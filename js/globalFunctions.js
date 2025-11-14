export function includHTML(id, file) {
        fetch(file)
          .then(response => response.text())
          .then(data => {
            document.getElementById(id).innerHTML = data;
          })
          .catch(err => console.log("erreur include file ", err))
}