"use client";
import { Button, Form, FormInstance, Input } from "antd";
import { observer } from "mobx-react";
import { enumField, FieldType } from "../interface";

interface Props {
  form: FormInstance<FieldType>;
  fnSuccess: (values: FieldType) => void;
  fnFaild: (values: any) => void;
}
const FormLogin = ({ form, fnSuccess, fnFaild }: Props) => {
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={fnSuccess}
      onFinishFailed={fnFaild}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name={enumField.Username}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name={enumField.Password}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      {/* <Form.Item> */}
      <Button block type="primary" htmlType="submit" style={{ float: "right" }}>
        Login
      </Button>
      {/* </Form.Item> */}
    </Form>
  );
};

export default observer(FormLogin);
