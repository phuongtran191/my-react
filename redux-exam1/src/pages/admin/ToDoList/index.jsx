import { Button, Card, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createToDoAction, deleteToDoAction, editToDoAction } from '../../../redux/actions';
import ListItem from "./components/Item";

function ToDoListPage({ createToDo, editToDo, deleteToDo, ...props }) {
  const { Search } = Input;
  
  const [ handleForm ] = Form.useForm();
  const { todoList } = useSelector((state) => state.todolistReducer); // ~ mapStateToProps
  const dispatch = useDispatch(); // ~ mapDispatchToProps

  // Tao chuc nang tim kiem
  const [searchKey, setSearchKey] = useState("");
  const filterList = todoList.filter((item) => {
    return item.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;
  });
  // them task moi va hien thi ra UI
  function handleSubmit(values) {
    dispatch(createToDoAction({
      id: uuidv4(),
      ...values,
    }));
    handleForm.resetFields();
  }
  // Chinh sua thong tin cua todo
  function handleEdit(values, id) {
    dispatch(editToDoAction({
      id: id,
      ...values,
    }));
  }
  // Xoa todo
  function handleDelete(id) {
    dispatch(deleteToDoAction({
      id: id,
    }));
  }
  // Hien thi ListItem component ra UI, truyen cac props can thiet vao
  function renderTodoList() {
    return filterList.map((item, index) => {
      return (
        <div className="list-item">
          <ListItem
            key={`${index}-${item.title}`}
            id={item.id}
            title={item.title}
            description={item.description}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      )
    });
  }
  // Return cua Main Function App
  return (
    <>
      <div className="todo-container" style={{margin: "20px 15rem"}}>
        <Card title="Add todoList" style={{ width: 500, marginBottom: 15 }}>
          <Form 
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            form={handleForm}
            // initialValues={{title: "", description: ""}}
            onFinish={(values) => handleSubmit(values)}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input your title!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                block
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Search placeholder="Search here ..." allowClear          
          onChange={(e) => setSearchKey(e.target.value)} style={{ width: 500, }} />
        {renderTodoList()}
      </div>
    </>
  );
}

export default ToDoListPage;

