"use client";
import { Button, Form, FormInstance, Input } from "antd";
import { observer } from "mobx-react";
import { enumRegisterField, FieldRegisterType } from "../interface";

interface Props {
  form: FormInstance<FieldRegisterType>;
  fnSuccess: (values: FieldRegisterType) => void;
  fnFaild: (values: any) => void;
}
const FormRegister = ({ form, fnSuccess, fnFaild }: Props) => {
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={fnSuccess}
      onFinishFailed={fnFaild}
      autoComplete="off"
    >
      <Form.Item<FieldRegisterType>
        label="Username"
        name={enumRegisterField.Username}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item<FieldRegisterType>
        label="Password"
        name={enumRegisterField.Password}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item<FieldRegisterType>
        label="First Name"
        name={enumRegisterField.FirstName}
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input placeholder="First Name" />
      </Form.Item>

      <Form.Item<FieldRegisterType>
        label="Last Name"
        name={enumRegisterField.LastName}
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>

      <Form.Item<FieldRegisterType>
        label="Email"
        name={enumRegisterField.Email}
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item<FieldRegisterType>
        label="Phone Number"
        name={enumRegisterField.Email}
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input placeholder="Phone Number" />
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          style={{ float: "right" }}
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default observer(FormRegister);
