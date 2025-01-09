"use client";
import { Button, Form, FormInstance, Input } from "antd";
import { observer } from "mobx-react";
import { useDictionary } from "../../../../i18n/dictionaryContext";
import { enumField, FieldType } from "../interface";

interface Props {
  form: FormInstance<FieldType>;
  fnSuccess: (values: FieldType) => void;
  fnFaild: (values: any) => void;
}
const FormLogin = ({ form, fnSuccess, fnFaild }: Props) => {
  const dictionary = useDictionary();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={fnSuccess}
      onFinishFailed={fnFaild}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label={dictionary?.login.username}
        name={enumField.Username}
        rules={[
          { required: true, message: dictionary?.login.usernameRequired },
        ]}
      >
        <Input placeholder={dictionary?.login.username} />
      </Form.Item>

      <Form.Item<FieldType>
        label={dictionary?.login.password}
        name={enumField.Password}
        rules={[
          { required: true, message: dictionary?.login.passwordRequired },
        ]}
      >
        <Input.Password placeholder={dictionary?.login.password} />
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          style={{ float: "right" }}
        >
          {dictionary?.login.btnLogin}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default observer(FormLogin);
