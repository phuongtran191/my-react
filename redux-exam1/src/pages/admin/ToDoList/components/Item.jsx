import { Button, Card, Col, Form, Input, Popconfirm, Row } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

function ListItem({ id, title, description, handleEdit, handleDelete }) {
    // dung state nay de hien thi ra UI form edit
    const [isEditTask, setIsEditTask] = useState(false);
    // Render tung item trong taskList ra UI
    function renderTaskItem() {
        if(!isEditTask) {
            return (
            <ul>
                <li>
                <b>Title:</b> &nbsp;{title}
                </li>
                <li>
                <b>Description:</b> &nbsp;{description}
                </li>
            </ul>
            );
        } else {
            return (
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{title: title, description: description}}
                    onFinish={(values) => {
                        handleEdit(values, id);
                        setIsEditTask(false);
                    }}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            { required: true, message: "Please input your title!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: "Please input your description!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Button type="primary" htmlType="submit" block >
                                    Edit
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Button htmlType="button" block
                                    onClick={() => setIsEditTask(false)}
                                >
                                Cancel
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            );
        }
    }
    // return cua ListItem component
    return (
        <Card
        style={{ width: 500, }}
        extra={
            <>
            { !isEditTask && (
                <Button
                    type="link"
                    htmlType="button"
                    style={{ color: "blue" }}
                    onClick={() => setIsEditTask(true)}
                >
                    Edit
                </Button>
            )}
            <Popconfirm
                title="Bạn có thật sự muốn xóa?"
                onCancel={() => null}
                cancelText="No"
                onConfirm={() => handleDelete(id)}
                okText="Yes"
            >
                <Button
                    type="link"
                    htmlType="button"
                    danger
                >
                    Delete
                </Button>
            </Popconfirm>
            </>
        }
        >
        {renderTaskItem()}
        </Card>
    );
}
  
export default ListItem;