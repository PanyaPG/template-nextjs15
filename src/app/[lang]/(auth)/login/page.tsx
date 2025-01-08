"use client";
import { Card, Divider, Form, FormProps, theme, Typography } from "antd";
import { observer } from "mobx-react";
import { Path } from "../../../../types/path.enum";
import FormLogin from "../components/FormLogin";
import { FieldType } from "../interface";

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginPage = () => {
  const [form] = Form.useForm<FieldType>();
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
          Template Login
        </Typography.Title>
        <FormLogin form={form} fnSuccess={onFinish} fnFaild={onFinishFailed} />
        <Divider style={{ margin: "0px 0px 10px" }} />
        <Typography.Text
          type="secondary"
          style={{ display: "block", textAlign: "center" }}
        >
          Don&apos;t have an account?{" "}
          <Typography.Link href={Path.Register}>Register Now</Typography.Link>
        </Typography.Text>
      </Card>
    </div>
  );
};

export default observer(LoginPage);
