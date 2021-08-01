import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import history from '../../utils/history';
import {userList} from '../../constants/user';

function LoginPage() {
    function handleSubmit(values) {
        const userInfo = userList.find((user) => {
            return user.name === values.username && user.password === values.password;
        });
        if (userInfo) {
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            if (userInfo.role === "user") {
                history.push("/");
            } else {
                history.push("/admin");
            }
        } else {
            alert("DANG NHAP THAT BAI!");
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-title">
                    <h2>LOGIN</h2>
                </div>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={(values) => handleSubmit(values)}
                >
                    <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        { required: true, message: "Nhập vào username!" }
                        ]}
                    >
                    <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Nhập mật khẩu!" }]}
                    >
                    <Input.Password placeholder="******" />
                    </Form.Item>

                    <Form.Item
                    name="remember"
                    valuePropName="checked"
                    >
                    <Checkbox>Ghi nhớ đăng nhập.</Checkbox>
                    </Form.Item>

                    <div style={{
                        display: "inline-block",
                        marginBottom: 24
                    }}>
                        Bạn chưa có tài khoản?&nbsp;
                        <Link to="/register">
                            Bấm vào đây để đăng kí.
                        </Link>
                    </div>

                    <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Đăng nhập
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default LoginPage;