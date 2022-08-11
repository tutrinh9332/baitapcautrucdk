
    let cannang =parseFloat(prompt("cannang"));
    let chieucao =parseFloat(prompt("chieucao"));
    let BMI = cannang / (chieucao * chieucao);
    if (BMI < 0) {
        document.write("nhaplai");
    } else if (BMI < 18.5) {
        document.write("gầy");
    } else if (BMI < 25) {
        document.write("bình thường");
    } else if (BMI < 30) {
        document.write("thừa cân");
    } else {
        document.write("béo");
    }

