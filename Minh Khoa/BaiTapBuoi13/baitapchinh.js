//Bài 1. Tính tiền lương nhân viên
/** Sơ đồ 3 khối
 * Đầu vào: Lương 1 ngày 100.000, số ngày làm
 * Các bước xử lý: Công thức tính lương: Lương 1 ngày * Số ngày làm
 * Đầu ra: Lương tháng
 */
document.querySelector(".bai1").onclick = function () {
  let soNgayLam = Number(document.getElementById("soNgayLam").value);
  let LuongThang = soNgayLam * 100000;
  document.getElementById("b1LuongThang").innerHTML =
    "Số tiền lương bạn làm được tháng này là: " +
    LuongThang.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

//Bài 2. Tính giá trị trung bình
/** Sơ đồ 3 khối
 * Đầu vào: Nhập vào 5 số thực (số thứ 1, thứ 2, thứ 3, thứ 4, thứ 5)
 * Các bước xử lý: Tính tổng 5 số, sau đó chia cho 5
 * Đầu ra: Giá trị trung bình của 5 số đã nhập
 */
document.querySelector(".bai2").onclick = function () {
  let soThuNhat = Number(document.getElementById("soThuNhat").value);
  let soThuHai = Number(document.getElementById("soThuHai").value);
  let soThuBa = Number(document.getElementById("soThuBa").value);
  let soThuTu = Number(document.getElementById("soThuTu").value);
  let soThuNam = Number(document.getElementById("soThuNam").value);
  let soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  document.getElementById("b2soTrungBinh").innerHTML =
    "Giá trị trung bình của 5 số đã nhập là: " + soTrungBinh;
};

//Bài 3. Quy đổi tiền
/** Sơ đồ 3 khối
 * Đầu vào: Nhập vào giá USD 23.500 VND, nhập vào số tiền USD
 * Các bước xử lý: Lấy số USD người dụng nhập vào * 23.500
 * Đầu ra: xuất ra số tiền sau quy đổi VND
 */
document.querySelector(".bai3").onclick = function () {
  let soTienUSD = Number(document.getElementById("soTienUSD").value);
  let quyDoiVND = soTienUSD * 23500;
  document.getElementById("b3QuyDoiTien").innerHTML =
    "Số tiền quy đổi sang VND là: " +
    quyDoiVND.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};

//Bài 4. Tính diện tích, chu vi hình chữ nhật
/**Sơ đồ 3 khối
 * Đầu vào: Hình chữ nhật, chiều dài và chiều rộng
 *
 * Các bước xử lí:
 * => Công thức diện tích = dài * rộng
 * => Công thức chu vi = (dài + rộng)*2
 *
 * Đầu ra: Diện tích và chu vi của hình chữ nhật
 */
document.querySelector(".bai4").onclick = function () {
  let chieuDai = Number(document.getElementById("chieuDai").value);
  let chieuRong = Number(document.getElementById("chieuRong").value);
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  document.getElementById("b4chuVi").innerHTML = "Giá trị chu vi là: " + chuVi;
  document.getElementById("b4dienTich").innerHTML =
    "Giá trị diện tích là: " + dienTich;
};

/**Bài 5. tính tổng 2 ký số
 * Đầu vào: Nhập 1 số có 2 chữ số
 * Các bước xử lý:
 * - Lấy số hàng đơn vị: int so_hang_dv = so % 10;
 * - Lấy số hàng chục: (so - so_hang_don_vi)/10
 * Đầu ra: Tổng 2 ký số
 *
 */
document.querySelector(".bai5").onclick = function () {
  let kySo = Number(document.getElementById("kySo").value);
  let phanDu = kySo % 10;
  let phanNguyen = (kySo - phanDu) / 10;
  let Tong2So = phanDu + phanNguyen;
  document.getElementById("b5Tong").innerHTML = "Tổng 2 ký số là: " + Tong2So;
};
