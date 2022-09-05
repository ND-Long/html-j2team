
  let kiem_tra_loi = false;
    function inRa(){

      
      
      let regex_ten = /^[A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*(?:[ ][A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*)*$/;
      let ten = document.getElementById('ten').value;
      let dia_chi = document.getElementById('dia_chi').value;
      let email = document.getElementById('email').value;
      let mat_khau = document.getElementById('mat_khau').value;
      let lai_mat_khau = document.getElementById('lai_mat_khau').value;
      let regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      let so_thich = document.getElementById('so_thich').value;

      //ten
      if(regex_ten.test(ten)== false){
        document.getElementById('loi_ten').innerHTML = 'Tên không được bỏ trống!' ;
        kiem_tra_loi=true;
      } else{
        document.getElementById('loi_ten').innerHTML = '' ;
      }

      //gioi tinh
      let mang_gioi_tinh = document.getElementsByName('gioi_tinh');
      let check_gioi_tinh = false;
      for(let i = 0; i<mang_gioi_tinh.length;i++){
        if(mang_gioi_tinh[i].checked){
        check_gioi_tinh=true;
        } 
      }
      if(check_gioi_tinh == false){
        document.getElementById('loi_gioi_tinh').innerHTML = 'Giới tính không được bỏ trống!' ;
        kiem_tra_loi=true;
      }else{
        document.getElementById('loi_gioi_tinh').innerHTML = '' ;
      }

      //dia chi
      if(dia_chi.length == 0){
        document.getElementById('loi_dia_chi').innerHTML = 'Địa chỉ không được bỏ trống!' ;
        kiem_tra_loi=true;
      } else{
        document.getElementById('loi_dia_chi').innerHTML = '' ;
      }

      //email
      if(regex_email.test(email)==false){
        document.getElementById('loi_email').innerHTML = 'Email phải đúng định dạng "abc@abc.abc"' ;
        kiem_tra_loi=true;
      } else{
        document.getElementById('loi_email').innerHTML = '' ;
      }

      //mat khau
      if(mat_khau.length==0){
        document.getElementById('loi_mat_khau').innerHTML = 'Mật khẩu không được bỏ trống!' ;
        kiem_tra_loi=true;
      } else{
        document.getElementById('loi_mat_khau').innerHTML = '' ;
      }

      //nhap lai mat khau
     if(mat_khau!=lai_mat_khau){
      document.getElementById('loi_lai_mat_khau').innerHTML = 'Mật khẩu chưa khớp!' ;
        kiem_tra_loi=true;
      } else{
        document.getElementById('loi_lai_mat_khau').innerHTML = '' ;
      }



      if(kiem_tra_loi){
        return false;
      }
    }

    function reSet(){
      document.getElementById('loi_ten').innerHTML = '' ;
      document.getElementById('loi_gioi_tinh').innerHTML = '' ;
      document.getElementById('loi_dia_chi').innerHTML = '' ;
      document.getElementById('loi_email').innerHTML = '' ;
      document.getElementById('loi_mat_khau').innerHTML = '' ;
      document.getElementById('loi_lai_mat_khau').innerHTML = '' ;


}