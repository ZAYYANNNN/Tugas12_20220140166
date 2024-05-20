function KirimData(event) {
    // event.preventDefault(); // Uncomment this line if the button type is "submit"

    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("NIM").value;
    var peminatan = document.querySelector("input[name='peminatan']:checked").value;
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama Mahasiswa : " + nama + "\n" +
        "NIM : " + nim + "\n" +
        "Peminatan : " + peminatan + "\n" +
        "Alamat : " + alamat
    );
}
