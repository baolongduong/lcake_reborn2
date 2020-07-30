import React from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component
{

  constructor(props)
  {
    super(props)
    this.state=
    {
      bg: './p1.jpg',
      //content : [( <div> bla bla </div>)]
      content: [(<div> 
      <div class="container">
      <div class="row">
         <div class="col-xl-12">
             <h2 class="heading1">
                 Thông tin đơn hàng (Updated 07/2020) <img src="cake_sl.png" class="vector_cake"/>
             </h2>
         </div>
      </div>
  </div>

   <div class="container">
      <div class="row">
          <div class="col-xl-12 bg-light">
              <h5 class="heading2">
                 Danh sách đơn hàng tháng 7 (Do nhân viên xử lý)
              </h5>
              <table class="table table-striped table-bordered">
                  <thead class="thd">
                      <tr>
                          <th>
                              ID Bill
                          </th>
                          <th>
                              ID NV
                          </th>
                          <th>
                              Ngày
                          </th>
                          <th>
                              Tên sản phẩm
                          </th>
                          <th>
                              Số lượng
                          </th>
                          <th>
                              Tổng tiền
                          </th>
                          <th>
                              Hình thức
                          </th>
                          <th>
                              Họ tên khách hàng
                          </th>
                          <th>
                              Địa chỉ khách hàng
                          </th>
                      </tr>
                  </thead>

                  <tbody>
                      <tr>
                          <td>
                              KJL32
                          </td>
                          <td>
                              LC006
                          </td>
                          <td>
                              19/7/2020
                          </td>
                          <td>
                              Bánh kem dâu
                          </td>
                          <td>
                              2
                          </td>
                          <td>
                              2.000.000 VNĐ
                          </td>
                          <td>
                              Online
                          </td>
                          <td>
                              Hoàng Hoa Mỹ
                          </td>
                          <td>
                              76 Hai Bà Trưng Q3 TP.HCM
                          </td>
                      </tr>
                      <tr>
                          <td>
                              KJL31
                          </td>
                          <td>
                              LC006
                          </td>
                          <td>
                              19/7/2020
                          </td>
                          <td>
                              Bánh tart trứng
                          </td>
                          <td>
                              10
                          </td>
                          <td>
                              550.000 VNĐ
                          </td>
                          <td>
                              Trực tiếp
                          </td>
                          <td>
                              Nguyễn Trí Minh
                          </td>
                          <td>
                              Không tồn tại
                          </td>
                      </tr>
                      <tr>
                          <td>
                              KJL30
                          </td>
                          <td>
                              LC007
                          </td>
                          <td>
                              19/7/2020
                          </td>
                          <td>
                              Bánh kem Matcha
                          </td>
                          <td>
                              1
                          </td>
                          <td>
                              5.000.000 VNĐ
                          </td>
                          <td>
                              Trực tiếp
                          </td>
                          <td>
                              Nguyễn Phi Hùng
                          </td>
                          <td>
                              Không tồn tại
                          </td>
                      </tr>
                      <tr>
                          <td>
                              KJL29
                          </td>
                          <td>
                              LC003
                          </td>
                          <td>
                              18/7/2020
                          </td>
                          <td>
                              Bánh kem việt quất
                          </td>
                          <td>
                              10
                          </td>
                          <td>
                              10.000.000 VNĐ
                          </td>
                          <td>
                              Online
                          </td>
                          <td>
                              Lưu Thanh Nhàn
                          </td>
                          <td>
                              530 Điện Biên Phủ Q3 TP.HCM
                          </td>
                      </tr>
                      <tr>
                          <td>
                              KJL28
                          </td>
                          <td>
                              LC008
                          </td>
                          <td>
                              18/7/2020
                          </td>
                          <td>
                              Bánh kem chocolate
                          </td>
                          <td>
                              2
                          </td>
                          <td>
                              4.000.000 VNĐ
                          </td>
                          <td>
                              Online
                          </td>
                          <td>
                              Trần Diệu Nhi
                          </td>
                          <td>
                              661 Nguyễn Đình Chiểu Q3 TP.HCM
                          </td>
                      </tr>
                      <tr>
                          <td>
                              KJL27
                          </td>
                          <td>
                              LC003
                          </td>
                          <td>
                              17/7/2020
                          </td>
                          <td>
                              Bánh kem việt quất
                          </td>
                          <td>
                              2
                          </td>
                          <td>
                              2.000.000 VNĐ
                          </td>
                          <td>
                              Online
                          </td>
                          <td>
                              Ngô Tịnh Hy
                          </td>
                          <td>
                              34 Nguyễn Thiện Thuật Q3 TP.HCM
                          </td>
                      </tr>
                      <tr>
                          <td>
                              KJL26
                          </td>
                          <td>
                              LC005
                          </td>
                          <td>
                              17/7/2020
                          </td>
                          <td>
                              Bánh mì xúc xích
                          </td>
                          <td>
                              1
                          </td>
                          <td>
                              30.000 VNĐ
                          </td>
                          <td>
                              Trực tiếp
                          </td>
                          <td>
                              Mã Thị Lợi
                          </td>
                          <td>
                              Không tồn tại
                          </td>
                      </tr>
                      <tr>
                          <td>
                              KJL25
                          </td>
                          <td>
                              LC005
                          </td>
                          <td>
                              17/7/2020
                          </td>
                          <td>
                              Bánh kem Matcha
                          </td>
                          <td>
                              2
                          </td>
                          <td>
                              10.000.000 VNĐ
                          </td>
                          <td>
                              Online
                          </td>
                          <td>
                              Trương Quốc Minh
                          </td>
                          <td>
                              7 Cao Lỗ Q8 TP.HCM
                          </td>
                      </tr>
                      <tr>
                          <td>
                              KJL24
                          </td>
                          <td>
                              LC004
                          </td>
                          <td>
                              16/7/2020
                          </td>
                          <td>
                              Bánh mì đen
                          </td>
                          <td>
                              2
                          </td>
                          <td>
                              90.000 VNĐ
                          </td>
                          <td>
                              Online
                          </td>
                          <td>
                              Nguyễn Minh Nhựt
                          </td>
                          <td>
                              74 Nơ Trang Long Q.Bình Thạnh TP.HCM
                          </td>
                      </tr>
                      <tr>
                          <td>
                              KJL23
                          </td>
                          <td>
                              LC008
                          </td>
                          <td>
                              15/7/2020
                          </td>
                          <td>
                              Bánh mì đậu đỏ
                          </td>
                          <td>
                              2
                          </td>
                          <td>
                              84.000 VNĐ
                          </td>
                          <td>
                              Trực tiếp
                          </td>
                          <td>
                              Dương Thị Liễu
                          </td>
                          <td>
                              Không tồn tại
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
   </div> </div>)]
    }
  }

  change(val)
  {
    if(val == '1')
    {
      this.setState({bg: './p1.jpg'})
      this.setState({content: [(<div>
        <div class="container">
        <div class="row">
           <div class="col-xl-12">
               <h2 class="heading1">
                   Thông tin đơn hàng (Updated 07/2020) <img src="cake_sl.png" class="vector_cake"/>
               </h2>
           </div>
        </div>
    </div>
  
     <div class="container">
        <div class="row">
            <div class="col-xl-12 bg-light">
                <h5 class="heading2">
                   Danh sách đơn hàng tháng 7 (Do nhân viên xử lý)
                </h5>
                <table class="table table-striped table-bordered">
                    <thead class="thd">
                        <tr>
                            <th>
                                ID Bill
                            </th>
                            <th>
                                ID NV
                            </th>
                            <th>
                                Ngày
                            </th>
                            <th>
                                Tên sản phẩm
                            </th>
                            <th>
                                Số lượng
                            </th>
                            <th>
                                Tổng tiền
                            </th>
                            <th>
                                Hình thức
                            </th>
                            <th>
                                Họ tên khách hàng
                            </th>
                            <th>
                                Địa chỉ khách hàng
                            </th>
                        </tr>
                    </thead>
  
                    <tbody>
                        <tr>
                            <td>
                                KJL32
                            </td>
                            <td>
                                LC006
                            </td>
                            <td>
                                19/7/2020
                            </td>
                            <td>
                                Bánh kem dâu
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                2.000.000 VNĐ
                            </td>
                            <td>
                                Online
                            </td>
                            <td>
                                Hoàng Hoa Mỹ
                            </td>
                            <td>
                                76 Hai Bà Trưng Q3 TP.HCM
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KJL31
                            </td>
                            <td>
                                LC006
                            </td>
                            <td>
                                19/7/2020
                            </td>
                            <td>
                                Bánh tart trứng
                            </td>
                            <td>
                                10
                            </td>
                            <td>
                                550.000 VNĐ
                            </td>
                            <td>
                                Trực tiếp
                            </td>
                            <td>
                                Nguyễn Trí Minh
                            </td>
                            <td>
                                Không tồn tại
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KJL30
                            </td>
                            <td>
                                LC007
                            </td>
                            <td>
                                19/7/2020
                            </td>
                            <td>
                                Bánh kem Matcha
                            </td>
                            <td>
                                1
                            </td>
                            <td>
                                5.000.000 VNĐ
                            </td>
                            <td>
                                Trực tiếp
                            </td>
                            <td>
                                Nguyễn Phi Hùng
                            </td>
                            <td>
                                Không tồn tại
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KJL29
                            </td>
                            <td>
                                LC003
                            </td>
                            <td>
                                18/7/2020
                            </td>
                            <td>
                                Bánh kem việt quất
                            </td>
                            <td>
                                10
                            </td>
                            <td>
                                10.000.000 VNĐ
                            </td>
                            <td>
                                Online
                            </td>
                            <td>
                                Lưu Thanh Nhàn
                            </td>
                            <td>
                                530 Điện Biên Phủ Q3 TP.HCM
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KJL28
                            </td>
                            <td>
                                LC008
                            </td>
                            <td>
                                18/7/2020
                            </td>
                            <td>
                                Bánh kem chocolate
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                4.000.000 VNĐ
                            </td>
                            <td>
                                Online
                            </td>
                            <td>
                                Trần Diệu Nhi
                            </td>
                            <td>
                                661 Nguyễn Đình Chiểu Q3 TP.HCM
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KJL27
                            </td>
                            <td>
                                LC003
                            </td>
                            <td>
                                17/7/2020
                            </td>
                            <td>
                                Bánh kem việt quất
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                2.000.000 VNĐ
                            </td>
                            <td>
                                Online
                            </td>
                            <td>
                                Ngô Tịnh Hy
                            </td>
                            <td>
                                34 Nguyễn Thiện Thuật Q3 TP.HCM
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KJL26
                            </td>
                            <td>
                                LC005
                            </td>
                            <td>
                                17/7/2020
                            </td>
                            <td>
                                Bánh mì xúc xích
                            </td>
                            <td>
                                1
                            </td>
                            <td>
                                30.000 VNĐ
                            </td>
                            <td>
                                Trực tiếp
                            </td>
                            <td>
                                Mã Thị Lợi
                            </td>
                            <td>
                                Không tồn tại
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KJL25
                            </td>
                            <td>
                                LC005
                            </td>
                            <td>
                                17/7/2020
                            </td>
                            <td>
                                Bánh kem Matcha
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                10.000.000 VNĐ
                            </td>
                            <td>
                                Online
                            </td>
                            <td>
                                Trương Quốc Minh
                            </td>
                            <td>
                                7 Cao Lỗ Q8 TP.HCM
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KJL24
                            </td>
                            <td>
                                LC004
                            </td>
                            <td>
                                16/7/2020
                            </td>
                            <td>
                                Bánh mì đen
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                90.000 VNĐ
                            </td>
                            <td>
                                Online
                            </td>
                            <td>
                                Nguyễn Minh Nhựt
                            </td>
                            <td>
                                74 Nơ Trang Long Q.Bình Thạnh TP.HCM
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KJL23
                            </td>
                            <td>
                                LC008
                            </td>
                            <td>
                                15/7/2020
                            </td>
                            <td>
                                Bánh mì đậu đỏ
                            </td>
                            <td>
                                2
                            </td>
                            <td>
                                84.000 VNĐ
                            </td>
                            <td>
                                Trực tiếp
                            </td>
                            <td>
                                Dương Thị Liễu
                            </td>
                            <td>
                                Không tồn tại
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     </div>
     </div>)] })
    }
    if(val == '2')
    {
      this.setState({bg: './p2.jpg'})
      this.setState({content: [(<div> <div class="container">
      <div class="row">
          <div class="col-xl-12">
              <h5 class="heading2">
                  Danh sách user cửa hàng bánh LCake
              </h5>

              <table class="table table-striped table-bordered">
                  <thead class="thd">
                      <tr>
                          <th>
                              Avatar
                          </th>
                          <th>
                              ID Nhân viên
                          </th>
                          <th>
                              Username
                          </th>
                          <th>
                              Họ và tên
                          </th>
                          <th>
                              Chức vụ
                          </th>
                          <th>
                              Thăng chức
                          </th>
                          <th>
                              Xóa nhân viên
                          </th>
                          <th>
                              Đơn hàng gần nhất
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="table-success">
                          <td>
                              <img src="admin.jpg" class="img-fluid"/>
                          </td>
                          <td>
                              LC001
                          </td>
                          <td>
                              long.db
                          </td>
                          <td>
                              Dương Bảo Long
                          </td>
                          <td>
                              Admin
                          </td>
                          <td>
                              <button class="btn">
                                  <img src="promotion_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              <button class="btn">
                              <img src="delete_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              Không tồn tại
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="a1.jpg" class="img-fluid"/>
                          </td>
                          <td>
                              LC002
                          </td>
                          <td>
                              minmin.ha
                          </td>
                          <td>
                              Nguyễn Thị Hà
                          </td>
                          <td>
                              CEO
                          </td>
                          <td>
                              <button class="btn">
                                  <img src="promotion_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              <button class="btn">
                              <img src="delete_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              Không tồn tại
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="a2.jpg" class="img-fluid"/>
                          </td>
                          <td>
                              LC003
                          </td>
                          <td>
                              lk.nguyen
                          </td>
                          <td>
                              Nguyễn Thị Lan Khuê
                          </td>
                          <td>
                              Quản lý
                          </td>
                          <td>
                              <button class="btn">
                                  <img src="promotion_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              <button class="btn">
                              <img src="delete_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                              <td>
                                  KJL29
                              </td>

                      </tr>
                      <tr>
                          <td>
                              <img src="a3.jpg" class="img-fluid"/>
                          </td>
                          <td>
                              LC004
                          </td>
                          <td>
                              cutie.yunie
                          </td>
                          <td>
                              Phan Thị Yến Nhi
                          </td>
                          <td>
                              Quản lý
                          </td>
                          <td>
                              <button class="btn">
                                  <img src="promotion_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              <button class="btn">
                              <img src="delete_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              KJL24
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="a4.jpg" class="img-fluid"/>
                          </td>
                          <td>
                              LC005
                          </td>
                          <td>
                              banhbao.nhan
                          </td>
                          <td>
                              Trương Thành Nhân
                          </td>
                          <td>
                              Nhân viên
                          </td>
                          <td>
                              <button class="btn">
                                  <img src="promotion_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              <button class="btn">
                              <img src="delete_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              KJL26
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="a5.jpg" class="img-fluid"/>
                          </td>
                          <td>
                              LC006
                          </td>
                          <td>
                              julie.ng
                          </td>
                          <td>
                              Nguyễn Hà Minh Thư
                          </td>
                          <td>
                              Nhân viên
                          </td>
                          <td>
                              <button class="btn">
                                  <img src="promotion_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              <button class="btn">
                              <img src="delete_icon.png" class="img-fluid"/>
                              </button>
                          </td>
                          <td>
                              KJL32
                          </td>
                          </tr>
                          <tr>
                              <td>
                                  <img src="a6.jpg" class="img-fluid"/>
                              </td>
                              <td>
                                  LC007
                              </td>
                              <td>
                                  kookie.hminh
                              </td>
                              <td>
                                  Lưu Hoàng Minh
                              </td>
                              <td>
                                  Nhân viên
                              </td>
                              <td>
                                  <button class="btn">
                                      <img src="promotion_icon.png" class="img-fluid"/>
                                  </button>
                              </td>
                              <td>
                                  <button class="btn" >
                                  <img src="delete_icon.png" class="img-fluid"/>
                                  </button>
                              </td>
                              <td>
                                  KJL30
                              </td>
                            </tr>
                            <tr>
                                  <td>
                                      <img src="a7.jpg" class="img-fluid"/>
                                  </td>
                                  <td>
                                      LC008
                                  </td>
                                  <td>
                                      uuuie.suzy
                                  </td>
                                  <td>
                                      Lưu Nhã Vân
                                  </td>
                                  <td>
                                      Nhân viên
                                  </td>
                                  <td>
                                      <button class="btn">
                                          <img src="promotion_icon.png" class="img-fluid"/>
                                      </button>
                                  </td>
                                  <td>
                                      <button class="btn" >
                                      <img src="delete_icon.png" class="img-fluid"/>
                                      </button>
                                  </td>
                                  <td>
                                      KJL28
                                  </td>
                              </tr>
                  </tbody>
              </table>
          </div>
      </div>
   </div> </div>)] })
    }
    if(val == '3')
    {
      this.setState({bg: './p3.jpg'})
      this.setState({content : [( <div> <div class="container">
      <div class="row">
         <div class="col-xl-12" >
             <p>
                 Các loại bánh trong cửa hàng LCake <img src="cake_sl.png" class="vector_cake" />
             </p>
         </div>
      </div>
  </div>

  <div class="container bg-light">
      <div class="row">
          <div class="col-xl-12">
              <h2>
                  TOP DANH SÁCH SẢN PHẨM NỔI BẬT
              </h2>
          </div>
      </div>
  </div>  
  <div class="container bg-light">
      <div class="row">
          
          <div class="col-xl-4">
              <p>
                  <button type="button" class="btn btn-warning myPopover"
                      data-toogle="popover"
                      data-placement="right"
                      title="Bánh mì đen"
                      data-trigger="hover"
                      data-content="Đây là loại bánh mì tốt cho sức khỏe">

                      <img src="russianblackbread.jpg" class="img-cake" />

                      </button>
              </p>
              <p>
                  Bánh mì đen
                  <br/>
                  45.000 VNĐ
                  <br/>
                  Tình trạng: Còn hàng
              </p>
          </div>
          <div class="col-xl-4">
              <p>
                  <button type="button" class="btn btn-warning myPopover"
                      data-toogle="popover"
                      data-placement="right"
                      title="Bánh tart trứng"
                      data-trigger="hover"
                      data-content="Đây là loại bánh thơm ngon, dễ làm">

                      <img src="tart.jpg" class="img-cake"/>

                      </button>
              </p>
              <p>
                  Bánh tart trứng
                  <br/>
                  55.000 VNĐ
                  <br/>
                  Tình trạng: Còn hàng
              </p>
          </div>
          <div class="col-xl-4">
              <p>
                  <button type="button" class="btn btn-warning myPopover"
                      data-toogle="popover"
                      data-placement="right"
                      title="Bánh mì đậu đỏ"
                      data-trigger="hover"
                      data-content="Chiếc bánh xinh xắn này mang hương vị truyền thống của nền ẩm thực Á Đông và ngon không kém những món bánh ngọt của phương Tây">

                      <img src="red_bean_bread.jpg" class="img-cake" />

                      </button>
              </p>
              <p>
                  Bánh mì đậu đỏ
                  <br/>
                  42.000 VNĐ
                  <br/>
                  Tình trạng: Còn hàng
              </p>
          </div>

      </div>
  </div>
  <br/>
  <div class="container">
      <div class="row">
          <div class="col-xl-12">
              <h2>
                  BÁNH MÌ
              </h2>
          </div> 
      </div>
  </div>

<div class="container">
  <div class="row">
      
      <div class="col-xl-3">
          <p>
              <button type="button" class="btn btn-light myPopover"
                  data-toogle="popover"
                  data-placement="right"
                  title="Bánh mì đen"
                  data-trigger="hover"
                  data-content="Đây là loại bánh mì tốt cho sức khỏe">

                  <img src="russianblackbread.jpg" class="img-cake" />

                  </button>
          </p>
          <p>
              Bánh mì đen
              <br/>
              45.000 VNĐ
              <br/>
              Tình trạng: Còn hàng
          </p>
      </div>
      <div class="col-xl-3">
          <p>
              <button type="button" class="btn btn-light myPopover"
                  data-toogle="popover"
                  data-placement="right"
                  title="Bánh tart trứng"
                  data-trigger="hover"
                  data-content="Đây là loại bánh thơm ngon, dễ làm">

                  <img src="tart.jpg" class="cake" />

                  </button>
          </p>
          <p>
              Bánh tart trứng
              <br/>
              55.000 VNĐ
              <br/>
              Tình trạng: Còn hàng
          </p>
      </div>
      <div class="col-xl-3">
          <p>
              <button type="button" class="btn btn-light myPopover"
                  data-toogle="popover"
                  data-placement="right"
                  title="Bánh mì đậu đỏ"
                  data-trigger="hover"
                  data-content="Chiếc bánh xinh xắn này mang hương vị truyền thống của nền ẩm thực Á Đông và ngon không kém những món bánh ngọt của phương Tây">

                  <img src="red_bean_bread.jpg" class="cake" />

                  </button>
          </p>
          <p>
              Bánh mì đậu đỏ
              <br/>
              42.000 VNĐ
              <br/>
              Tình trạng: Còn hàng
          </p>
      </div>
      <div class="col-xl-3">
          <p>
              <button type="button" class="btn btn-light myPopover"
                  data-toogle="popover"
                  data-placement="right"
                  title="Bánh mì xúc xích"
                  data-trigger="hover"
                  data-content="Bánh mì vừa ngon, bổ dưỡng và lại đơn giản cho cả nhà">

                  <img src="sausage.jpg" class="img-cake" />

                  </button>
          </p>
          <p>
              Bánh mì xúc xích
              <br/>
              30.000 VNĐ
              <br/>
              Tình trạng: Còn hàng
          </p>
      </div>
  </div>
</div>
      <br/>
     
       <div class="container">
      <div class="row">
          <div class="col-xl-12">
              <h2>
                  BÁNH KEM
              </h2>
          </div> 
      </div>
  </div>

      <div class="container">
      <div class="row">
      
          <div class="col-xl-3">
              <p>
                  <button type="button" class="btn btn-light myPopover"
                      data-toogle="popover"
                      data-placement="right"
                      title="Bánh kem dâu"
                      data-trigger="hover"
                      data-content="Dâu-một loại quả được ví như thứ trái cây tượng trưng cho một tình yêu hoàn hảo. Mỗi chấm như một ngọn sóng từ trái tim yêu trào dâng. Tình yêu, nỗi nhớ, xa cách, giận hờn... ">

                      <img src="str_cake.jpg" class="img-cake" />

                      </button>
              </p>
              <p>
                  Bánh kem dâu
                  <br/>
                  1.000.000 VNĐ
                  <br/>
                  Tình trạng: Còn hàng
              </p>
          </div>
          <div class="col-xl-3">
              <p>
                  <button type="button" class="btn btn-light myPopover"
                      data-toogle="popover"
                      data-placement="right"
                      title="Bánh kem việt quất"
                      data-trigger="hover"
                      data-content="Cây việt quất là loài cây có nhiều chất dinh dưỡng, được sử dụng vào bữa ăn hàng ngày rất tốt cho sức khỏe.">

                      <img src="blue_br_cake.jpg" class="img-cake" />

                      </button>
              </p>
              <p>
                  Bánh kem việt quất
                  <br/>
                  1.000.000 VNĐ
                  <br/>
                  Tình trạng: Còn hàng
              </p>
          </div>
          <div class="col-xl-3">
              <p>
                  <button type="button" class="btn btn-light myPopover"
                      data-toogle="popover"
                      data-placement="right"
                      title="Bánh kem choco"
                      data-trigger="hover"
                      data-content="Socola còn được xem là món quà của thượng đế, vì vậy, dành tặng cho một nửa yêu thương socola chính là lời bày tỏ tình cảm thiêng liêng và cao quý nhất, là lời hứa cho một tình yêu vĩnh cửu. Vị ngọt thanh khiết trong Socola luôn tượng trưng sự ngọt ngào trong tình yêu">

                      <img src="choco.jpg" class="img-cake" />

                      </button>
              </p>
              <p>
                  Bánh kem Chocolate
                  <br/>
                  2.000.000 VNĐ
                  <br/>
                  Tình trạng: Còn hàng
              </p>
          </div>
          <div class="col-xl-3">
              <p>
                  <button type="button" class="btn btn-light myPopover"
                      data-toogle="popover"
                      data-placement="right"
                      title="Bánh kem matcha"
                      data-trigger="hover"
                      data-content="Matcha có tác dụng tốt với thể chất và tinh thần. Matcha kích thích làm tỉnh táo, làm lắng đọng, giảm căng thẳng">

                      <img src="matcha_cake.jpg" class="img-cake" />

                      </button>
              </p>
              <p>
                  Bánh kem Matcha
                  <br/>
                  5.000.000 VNĐ
                  <br/>
                  Tình trạng: Còn hàng
              </p>
          </div>
          <br/>

          
      </div>
  </div> </div>)] })
    }
  }


  render()
  {
  return (
  <div className="App">
    <nav class="navbar navbar-expand-sm bg-light">
    <a class="navbar-brand" href="#"><img src="long_icon.png" class="nv_img"/></a>
    <ul class="navbar-nav">
       <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => this.change('1')}>Dashboard</a>
       </li>
       <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => this.change('2')} >User</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" onClick={() => this.change('3')}>Products</a>
        </li> 
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
                <a class="nav-link">
                      <button type="button" class="btn btn-light myPopover"
                        data-toogle="popover"
                        data-placement="right"
                        title="Thông tin tài khoản"
                        data-trigger="hover"
                        data-content="Đây là tài khoản của Admin - sử dụng để quản lý cửa hàng bánh LCake">
                        <img src="profile_icon.png" class="admin_avatar"/>
                      </button>
                  </a>
          </li>
      </ul>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-xl-12" id="gird">
          <br/>
          <img src={this.state.bg}/>
          <br/>
          <br/>
          <p>{this.state.content}</p>
       </div>
      </div>
    </div>
  </div>
  );
  }
  
}


export default App;
