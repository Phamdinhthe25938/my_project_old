
let doi_dau =false;
// vua bam phim phep tinh
let doi_phep_tinh = false
let str_kq= '';
let phim_moi='';
let mang_so = new Array();
let mang_so_index = 0;
let mang_pt = new Array();
let mang_pt_index = 0;
let ketQua = document.getElementById("result_input");
 function clickButton(obj){
     // let ketQua = document.getElementById("result_input");
     let type = obj.innerHTML;
     // chuỗi hiện tại của kết quả
     if( str_kq=='' && phim_moi==''){
         str_kq = ketQua.value;
     }
     if(str_kq=='0'){
         str_kq='';
     }
     if( type == '0' ||
         type == '1' ||
         type == '2' ||
         type == '3' ||
         type == '4' ||
         type == '5' ||
         type == '6' ||
         type == '7' ||
         type == '8' ||
         type == '9' ||
         type == '+/-' ||
         type =="."
     ){
         doi_phep_tinh=false;
         if(type=='+/-'){
             if(doi_dau){
                 doi_dau =false;
                 phim_moi =phim_moi.substring(1);
             }
             else{
                 doi_dau =true;
                 phim_moi ='-'+phim_moi;
             }
         }
         else{
             phim_moi +=type;

         }
         ketQua.value =str_kq+phim_moi;
     }
 //    nhóm phép ttính
     else if (
         type == '+' ||
         type == '-' ||
         type == 'X' ||
         type == '/'
     ){
         //truoc do co bam 1 phep tinh
         if(doi_phep_tinh) {
              mang_pt[mang_pt_index-1]=type;
              //xóa đi phần tử ở  vị tri cuối - 1
              ketQua.value = ketQua.value.substring(0,ketQua.value.length)+type;
         }
         else {
             mang_so[mang_so_index] = parseFloat(phim_moi);
             mang_so_index++;
             mang_pt[mang_pt_index] = type;
             mang_pt_index++;
         }
     //    ghi nho đã bấm phím
         doi_phep_tinh = true;
         str_kq='';
         phim_moi='';
     }
}