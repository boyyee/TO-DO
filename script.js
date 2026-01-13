function valid() {
            let name = document.getElementById("name").value;
            if (name === "") {
                Swal.fire({
                    title: "Error",
                    text: "Coba Lagi",
                    icon: "error"
                });
                return false;
            } else {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                return false;
            }
        }
        