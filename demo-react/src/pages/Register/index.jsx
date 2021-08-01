import { DatePicker, Select, Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;
const dateFormat = 'DD/MM/YYYY';
function RegisterPage() {
    return (
      <div className="register-container">
        <div className="register-form">
          <div className="register-title">
            <h2>REGISTER</h2>
          </div>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ agree: true }}
            onFinish={() => null}
          >
            <Form.Item
              label="Họ tên"
              name="name"
              rules={[{ required: true, message: "Nhập vào họ tên!" }]}
            >
              <Input placeholder="Nhập họ tên ..." />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                { required: true, message: "Nhập vào số điện thoại!" },
                {
                  pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                  message: "Số điện thoại không hợp lệ!",
                },
              ]}
            >
              <Input placeholder="Nhập số điện thoại ..." />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Nhập email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input placeholder="Nhập email ..." />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: "Nhập mật khẩu!" },
                { min: 6, message: "Mật khẩu ít nhất 6 kí tự!" },
              ]}
            >
              <Input.Password placeholder="******" />
            </Form.Item>

            <Form.Item
              label="Giới tính"
              name="gender"
              rules={[{ required: true, message: "Xác nhận giới tính!" }]}
            >
              <Select placeholder="Vui lòng chọn giới tính">
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
                <Option value="other">Khác</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Ngày sinh"
              name="birthday"
              rules={[{ required: true, message: "Nhập vào ngày sinh!" }]}
            >
              <DatePicker
                format={dateFormat}
                style={{ display: "block" }}
                placeholder="Vui lòng nhập ngày sinh ..."
              />
            </Form.Item>

            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[{ required: true, message: "Nhập địa chỉ!" }]}
            >
              <Input placeholder="Vui lòng nhập địa chỉ ..." />
            </Form.Item>

            <Form.Item
              label="Xác nhận Captcha"
              extra="We must make sure that your are a human."
            >
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Please input the captcha you got!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item name="agree" valuePropName="checked">
              <Checkbox>
                Tôi đã đọc và đồng ý với
                <Link to="/term"> các điều khoản.</Link>
              </Checkbox>
            </Form.Item>

            <div
              style={{
                display: "inline-block",
                marginBottom: 24,
              }}
            >
              Bạn đã có tài khoản?&nbsp;
              <Link to="/login">ĐĂNG NHẬP Ở ĐÂY!</Link>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Đăng kí
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
}
export default RegisterPage;