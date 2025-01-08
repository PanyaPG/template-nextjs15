"use client";
import { Card, Divider, Form, FormProps, theme, Typography } from "antd";
import { observer } from "mobx-react";
import { Path } from "../../../../types/path.enum";
import FormRegister from "../components/FormRegister";
import { FieldRegisterType } from "../interface";

const onFinish: FormProps<FieldRegisterType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldRegisterType>["onFinishFailed"] = (
  errorInfo
) => {
  console.log("Failed:", errorInfo);
};

const RegisterPage = () => {
  const [form] = Form.useForm<FieldRegisterType>();
  const { colorPrimary } = theme.useToken().token;

  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "500px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <Typography.Title
          level={3}
          style={{
            color: colorPrimary,
            textAlign: "center",
          }}
        >
          Template Register
        </Typography.Title>
        <FormRegister
          form={form}
          fnSuccess={onFinish}
          fnFaild={onFinishFailed}
        />
        <Divider style={{ margin: "0px 0px 10px" }} />
        <Typography.Text
          type="secondary"
          style={{ display: "block", textAlign: "center" }}
        >
          Have a account?{" "}
          <Typography.Link href={Path.Login}>Sign In</Typography.Link>
        </Typography.Text>
      </Card>
    </div>
  );
};

export default observer(RegisterPage);
