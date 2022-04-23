try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "numeric",
        year: "numeric"
    };
    document.getElementById(
        "currentdate"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch(e) {
    alert("Error with code or your browser does not support Locale");
}