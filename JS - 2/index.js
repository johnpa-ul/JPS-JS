function generateFullName() {
    let first = document.getElementById("firstName").value.trim();
    let middle = document.getElementById("middleName").value.trim();
    let last = document.getElementById("lastName").value.trim();

    let fullName = first;
    if (middle) fullName += " " + middle;
    if (last) fullName += " " + last;

    document.getElementById("fullName").textContent = fullName;
}

function clearEntries() {
    document.getElementById("firstName").value = "";
    document.getElementById("middleName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("fullName").textContent = "";
}