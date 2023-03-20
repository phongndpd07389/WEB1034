while(true){
    do{
        var diemT = prompt("Nhap diem Toan");
        diemT = parseFloat(diemT);
    }while(diemT < 0 || diemT > 10);
    do{
        var diemL = prompt("Nhap diem Ly");
        diemL = parseFloat(diemT);
    }while(diemL < 0 || diemL > 10);
    do{
        var diemH = prompt("Nhap diem Hoa");
        diemH = parseFloat(diemT);
    }while(diemH < 0 || diemH > 10);
    do{
        var diemS = prompt("Nhap diem Sinh");
        diemS = parseFloat(diemT);
    }while(diemS < 0 || diemS > 10);
    var diemTB = (diemT + diemL + diemH + diemS)/4;
    console.log("1. Tinh diem trung binh(switch case");
    console.log("2. Tinh diem trung binh(if else");
    console.log("0. Thoat");
    var chon = prompt("Nhap lua chon");
    switch(chon){
        case '1':
            switch((((int)(diemTB*10))-30)/10){
                case 1:
                    console.log("Yeu");
                    break;
                case 2:
                case 3:
                    console.log("Trung binh");
                    break;
                case 4:
                case 5:
                    console.log("Kha");
                    break;
                case 6:  
                case 7:
                    console.log("Gioi");
                    break;
                default:
                    console.log("Yeu");
                    break;
            }
            break;
        case '2':
            if(diemTB <= 10 && diemTB >= 9){
                console.log("Gioi");
            }else if(diemTB >= 7){
                console.log("Kha");
            }else if(diemTB >= 5){
                console.log("Trung binh");
            }else{
                console.log("Yeu");
            }
            break;
        case '0':
            break;
    }
}