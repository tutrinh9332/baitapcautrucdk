let nam=parseInt(prompt('nhap nam'));
let namnhuan=false;

if(nam % 4==0){
    if(nam % 100 ==0){
        if(nam % 400==0){
            namnhuan=true;
        }
    else {
        namnhuan=true;
        }
    }
}
    if(namnhuan) {
        alert(nam + "namnhuan");
    } else{
          alert(nam+ "namthuong");
        }
