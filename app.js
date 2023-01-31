function display_result(result) {
    if (result) {
        document.getElementById("rwin").style.visibility = true
    }
}
function check() {
    let x = document.getElementById("ch_ip").value
    if (x === "9883435575") {
        document.getElementById("rwin").style.display = ""
    }
    else{
        alert("No booking found.")
    }
}