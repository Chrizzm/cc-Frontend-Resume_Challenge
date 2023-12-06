function visitorCounter(){
  fetch("https://7favi6lq41.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body)) => {
      document.getElementById("visitor-counter").innerHTML=body
    })
}